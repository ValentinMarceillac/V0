import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const DATA_PATH = path.join(ROOT_DIR, 'data', 'vehicles.json');

const app = express();
const PORT = process.env.PORT || 3000;

const rawVehicles = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

function normalize(str) {
  return (str || '')
    .toString()
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

function getBrandsDataset(vehicles) {
  const brandMap = new Map();
  vehicles.forEach((vehicle) => {
    if (!brandMap.has(vehicle.brand)) {
      brandMap.set(vehicle.brand, new Set());
    }
    brandMap.get(vehicle.brand).add(vehicle.model);
  });

  return Array.from(brandMap.entries())
    .map(([brand, modelsSet]) => ({
      brand,
      models: Array.from(modelsSet).sort((a, b) => a.localeCompare(b, 'fr')),
    }))
    .sort((a, b) => a.brand.localeCompare(b.brand, 'fr'));
}

function sortVehicles(list, sortKey = 'score') {
  const copy = [...list];
  switch (sortKey) {
    case 'price-asc':
      return copy.sort((a, b) => a.monthlyPrice - b.monthlyPrice);
    case 'price-desc':
      return copy.sort((a, b) => b.monthlyPrice - a.monthlyPrice);
    case 'year-desc':
      return copy.sort((a, b) => b.year - a.year);
    case 'co2-asc':
      return copy.sort((a, b) => a.co2 - b.co2);
    case 'score':
    default:
      return copy.sort((a, b) => b.score - a.score);
  }
}

function applyFilters(list, filters = {}) {
  const {
    keyword,
    brand,
    model,
    energy,
    transmission,
    segment,
    price,
    co2,
    sort,
  } = filters;

  const normalizedKeyword = normalize(keyword);
  const normalizedBrand = normalize(brand);
  const normalizedModel = normalize(model);
  const normalizedEnergy = normalize(energy);
  const normalizedTransmission = normalize(transmission);
  const normalizedSegment = normalize(segment);
  const priceLimit = Number.isFinite(price) ? Number(price) : undefined;
  const co2Limit = Number.isFinite(co2) ? Number(co2) : undefined;

  const filtered = list.filter((vehicle) => {
    const haystack = normalize(
      [vehicle.brand, vehicle.model, vehicle.version, vehicle.segment, vehicle.highlight].join(' ')
    );

    if (normalizedKeyword && !haystack.includes(normalizedKeyword)) {
      return false;
    }

    if (normalizedBrand && normalize(vehicle.brand) !== normalizedBrand) {
      return false;
    }

    if (normalizedModel && normalize(vehicle.model) !== normalizedModel) {
      return false;
    }

    if (normalizedEnergy && normalize(vehicle.energy) !== normalizedEnergy) {
      return false;
    }

    if (normalizedTransmission && normalize(vehicle.transmission) !== normalizedTransmission) {
      return false;
    }

    if (normalizedSegment && normalize(vehicle.segment) !== normalizedSegment) {
      return false;
    }

    if (priceLimit !== undefined && vehicle.monthlyPrice > priceLimit) {
      return false;
    }

    if (co2Limit !== undefined && vehicle.co2 > co2Limit) {
      return false;
    }

    return true;
  });

  return sortVehicles(filtered, sort);
}

const brandsDataset = getBrandsDataset(rawVehicles);

app.get('/api/brands', (req, res) => {
  res.json({
    data: brandsDataset,
    meta: {
      totalBrands: brandsDataset.length,
      totalModels: brandsDataset.reduce((sum, item) => sum + item.models.length, 0),
    },
  });
});

app.get('/api/brands/:brand/models', (req, res) => {
  const brandParam = normalize(req.params.brand);
  const brandEntry = brandsDataset.find((brand) => normalize(brand.brand) === brandParam);

  if (!brandEntry) {
    return res.status(404).json({ error: 'Marque introuvable' });
  }

  res.json({
    data: brandEntry,
  });
});

app.get('/api/vehicles', (req, res) => {
  const {
    brand,
    model,
    energy,
    transmission,
    segment,
    priceMax,
    co2Max,
    search,
    sort = 'score',
    limit,
  } = req.query;

  const filters = {
    brand,
    model,
    energy,
    transmission,
    segment,
    price: priceMax ? Number(priceMax) : undefined,
    co2: co2Max ? Number(co2Max) : undefined,
    keyword: search,
    sort,
  };

  const results = applyFilters(rawVehicles, filters);
  const capped = limit ? results.slice(0, Number(limit)) : results;

  res.json({
    data: capped,
    meta: {
      total: results.length,
      limit: limit ? Number(limit) : results.length,
    },
  });
});

app.get('/api/vehicles/:id', (req, res) => {
  const vehicle = rawVehicles.find((item) => item.id === req.params.id);
  if (!vehicle) {
    return res.status(404).json({ error: 'Véhicule introuvable' });
  }
  res.json({ data: vehicle });
});

const ENERGY_KEYWORDS = new Map([
  ['electrique', 'Électrique'],
  ['électrique', 'Électrique'],
  ['hybride rechargeable', 'Hybride rechargeable'],
  ['plug-in', 'Hybride rechargeable'],
  ['phev', 'Hybride rechargeable'],
  ['hybride', 'Hybride'],
  ['essence', 'Essence'],
  ['diesel', 'Diesel'],
  ['gpl', 'GPL'],
  ['bioethanol', 'Bioéthanol'],
  ['éthanol', 'Bioéthanol'],
]);

const TRANSMISSION_KEYWORDS = new Map([
  ['auto', 'Automatique'],
  ['automatique', 'Automatique'],
  ['boite auto', 'Automatique'],
  ['manuelle', 'Manuelle'],
  ['boite meca', 'Manuelle'],
  ['boite manu', 'Manuelle'],
]);

function extractFiltersFromQuery(query) {
  const normalizedQuery = normalize(query);
  const filters = {};
  const matchedTokens = [];

  const brandMatch = brandsDataset.find((item) => normalizedQuery.includes(normalize(item.brand)));
  if (brandMatch) {
    filters.brand = brandMatch.brand;
    matchedTokens.push(brandMatch.brand);

    const modelMatch = brandMatch.models.find((model) => normalizedQuery.includes(normalize(model)));
    if (modelMatch) {
      filters.model = modelMatch;
      matchedTokens.push(modelMatch);
    }
  } else {
    const modelMatch = rawVehicles.find((vehicle) => normalizedQuery.includes(normalize(vehicle.model)));
    if (modelMatch) {
      filters.brand = modelMatch.brand;
      filters.model = modelMatch.model;
      matchedTokens.push(modelMatch.brand, modelMatch.model);
    }
  }

  for (const [keyword, energy] of ENERGY_KEYWORDS.entries()) {
    if (normalizedQuery.includes(keyword)) {
      filters.energy = energy;
      matchedTokens.push(keyword);
      break;
    }
  }

  for (const [keyword, transmission] of TRANSMISSION_KEYWORDS.entries()) {
    if (normalizedQuery.includes(keyword)) {
      filters.transmission = transmission;
      matchedTokens.push(keyword);
      break;
    }
  }

  const budgetRegex = /(\d{2,3})(?:\s?)(?:k|000)?\s?(?:€|eur|euros)?\s*(?:par mois|\/mois|mensuel|mois)/i;
  const budgetMatch = query.match(budgetRegex);
  if (budgetMatch) {
    const rawValue = budgetMatch[1];
    const isThousands = /k|000/.test(budgetMatch[0]);
    const monthlyBudget = Number(rawValue) * (isThousands ? 10 : 1);
    if (Number.isFinite(monthlyBudget)) {
      filters.price = monthlyBudget;
    }
  }

  const co2Regex = /(\d{2,3})\s*g/i;
  const co2Match = query.match(co2Regex);
  if (co2Match) {
    const co2Limit = Number(co2Match[1]);
    if (Number.isFinite(co2Limit)) {
      filters.co2 = co2Limit;
    }
  }

  const segments = ['SUV', 'Citadine', 'Berline', 'Break', 'Coupé', 'Crossover'];
  const segmentMatch = segments.find((segment) => normalizedQuery.includes(normalize(segment)));
  if (segmentMatch) {
    filters.segment = segmentMatch;
    matchedTokens.push(segmentMatch);
  }

  const remainingKeyword = normalizedQuery
    .split(/\s+/)
    .filter((token) => token && !matchedTokens.some((matched) => normalize(matched).includes(token)))
    .join(' ')
    .trim();

  if (remainingKeyword.length >= 3) {
    filters.keyword = remainingKeyword;
  }

  return filters;
}

function buildSummary(query, filters, matchCount) {
  const parts = [`Requête analysée : « ${query} »`];
  const highlights = [];

  if (filters.brand) {
    highlights.push(`marque ${filters.brand}`);
  }
  if (filters.model) {
    highlights.push(`modèle ${filters.model}`);
  }
  if (filters.energy) {
    highlights.push(`motorisation ${filters.energy}`);
  }
  if (filters.transmission) {
    highlights.push(`boîte ${filters.transmission}`);
  }
  if (filters.price) {
    highlights.push(`budget ≤ ${filters.price} €/mois`);
  }
  if (filters.co2) {
    highlights.push(`émissions ≤ ${filters.co2} g/km`);
  }
  if (filters.segment) {
    highlights.push(`segment ${filters.segment}`);
  }

  if (highlights.length) {
    parts.push(`Critères détectés : ${highlights.join(', ')}.`);
  }

  parts.push(
    matchCount > 0
      ? `${matchCount} véhicule${matchCount > 1 ? 's' : ''} correspond${matchCount > 1 ? 'ent' : ''} à cette recherche.`
      : `Aucun véhicule ne correspond exactement, proposez un critère plus large.`
  );

  return parts.join(' ');
}

function buildInsights(list) {
  if (!list.length) {
    return null;
  }

  const monthlyPrices = list.map((item) => item.monthlyPrice);
  const co2Values = list.map((item) => item.co2);
  const autonomyValues = list
    .map((item) => item.autonomy)
    .filter((value) => Number.isFinite(value));

  return {
    averageMonthlyPrice: Math.round(monthlyPrices.reduce((acc, value) => acc + value, 0) / monthlyPrices.length),
    minMonthlyPrice: Math.min(...monthlyPrices),
    maxMonthlyPrice: Math.max(...monthlyPrices),
    minCo2: Math.min(...co2Values),
    maxCo2: Math.max(...co2Values),
    maxAutonomy: autonomyValues.length ? Math.max(...autonomyValues) : null,
  };
}

app.post('/api/ai/query', (req, res) => {
  const { query } = req.body || {};
  if (!query || !query.trim()) {
    return res.status(400).json({ error: 'La requête en langage naturel est obligatoire.' });
  }

  const filters = extractFiltersFromQuery(query);
  const matches = applyFilters(rawVehicles, { ...filters, sort: 'score' });
  const summary = buildSummary(query, filters, matches.length);
  const insights = buildInsights(matches);

  res.json({
    query,
    filters,
    summary,
    matches: matches.slice(0, 12),
    meta: {
      total: matches.length,
      insights,
    },
  });
});

app.use(express.static(ROOT_DIR));

app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Endpoint API introuvable' });
  }
  return res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AutoScope API prête sur http://localhost:${PORT}`);
});
