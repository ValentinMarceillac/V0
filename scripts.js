const fallbackVehicles = [
  {
    id: 'peugeot-e208-2024',
    brand: 'Peugeot',
    model: 'e-208',
    version: 'GT Pack',
    energy: 'Électrique',
    segment: 'Citadine',
    transmission: 'Automatique',
    monthlyPrice: 339,
    cashPrice: 38200,
    year: 2024,
    co2: 0,
    power: 156,
    autonomy: 410,
    availability: 'Stock immédiat',
    url: '#',
    score: 92,
    highlight: 'Prime écologique éligible',
  },
  {
    id: 'renault-megane-e-tech',
    brand: 'Renault',
    model: 'Mégane E-Tech',
    version: 'Iconic EV60',
    energy: 'Électrique',
    segment: 'Compacte',
    transmission: 'Automatique',
    monthlyPrice: 369,
    cashPrice: 42900,
    year: 2023,
    co2: 0,
    power: 220,
    autonomy: 450,
    availability: 'Précommande 30 jours',
    url: '#',
    score: 89,
    highlight: 'Pack Google intégré',
  },
  {
    id: 'dacia-duster-eco-g',
    brand: 'Dacia',
    model: 'Duster',
    version: 'Expression ECO-G 100',
    energy: 'GPL',
    segment: 'SUV',
    transmission: 'Manuelle',
    monthlyPrice: 219,
    cashPrice: 21490,
    year: 2024,
    co2: 127,
    power: 100,
    autonomy: null,
    availability: 'Concession sous 15 jours',
    url: '#',
    score: 84,
    highlight: 'Crit’Air 1',
  },
  {
    id: 'tesla-model3-2024',
    brand: 'Tesla',
    model: 'Model 3',
    version: 'Propulsion',
    energy: 'Électrique',
    segment: 'Berline',
    transmission: 'Automatique',
    monthlyPrice: 429,
    cashPrice: 42990,
    year: 2024,
    co2: 0,
    power: 283,
    autonomy: 513,
    availability: 'Livraison sous 7 jours',
    url: '#',
    score: 94,
    highlight: 'Mise à jour OTA',
  },
  {
    id: 'toyota-yaris-hybrid',
    brand: 'Toyota',
    model: 'Yaris',
    version: 'Hybride 116 Dynamic',
    energy: 'Hybride',
    segment: 'Citadine',
    transmission: 'Automatique',
    monthlyPrice: 279,
    cashPrice: 24990,
    year: 2024,
    co2: 87,
    power: 116,
    autonomy: null,
    availability: 'Stock national 3 jours',
    url: '#',
    score: 88,
    highlight: 'Consommation mixte 3,8 L/100km',
  },
  {
    id: 'citroen-c5-aircross',
    brand: 'Citroën',
    model: 'C5 Aircross',
    version: 'Plug-in Hybrid 225 Shine',
    energy: 'Hybride rechargeable',
    segment: 'SUV',
    transmission: 'Automatique',
    monthlyPrice: 399,
    cashPrice: 45600,
    year: 2024,
    co2: 32,
    power: 225,
    autonomy: 55,
    availability: 'Commandable',
    url: '#',
    score: 83,
    highlight: 'Recharge 7,4 kW incluse',
  },
  {
    id: 'bmw-ix1-xdrive30',
    brand: 'BMW',
    model: 'iX1',
    version: 'xDrive30',
    energy: 'Électrique',
    segment: 'SUV Premium',
    transmission: 'Automatique',
    monthlyPrice: 589,
    cashPrice: 58400,
    year: 2024,
    co2: 0,
    power: 313,
    autonomy: 438,
    availability: 'Livraison 45 jours',
    url: '#',
    score: 86,
    highlight: 'xLine & Pack Innovation',
  },
  {
    id: 'peugeot-3008-2025',
    brand: 'Peugeot',
    model: '3008',
    version: 'Hybrid 136 e-DCS6',
    energy: 'Hybride',
    segment: 'SUV',
    transmission: 'Automatique',
    monthlyPrice: 349,
    cashPrice: 37990,
    year: 2025,
    co2: 129,
    power: 136,
    autonomy: null,
    availability: 'Précommande 60 jours',
    url: '#',
    score: 91,
    highlight: 'Plateforme STLA Medium',
  },
  {
    id: 'hyundai-ioniq5-2024',
    brand: 'Hyundai',
    model: 'IONIQ 5',
    version: '77 kWh Creative',
    energy: 'Électrique',
    segment: 'SUV',
    transmission: 'Automatique',
    monthlyPrice: 459,
    cashPrice: 49900,
    year: 2024,
    co2: 0,
    power: 229,
    autonomy: 507,
    availability: 'Stock importateur',
    url: '#',
    score: 90,
    highlight: 'Batterie 800V',
  },
  {
    id: 'ds4-esprit-de-voyage',
    brand: 'DS Automobiles',
    model: 'DS 4',
    version: 'Esprit de Voyage E-Tense 225',
    energy: 'Hybride rechargeable',
    segment: 'Compacte premium',
    transmission: 'Automatique',
    monthlyPrice: 479,
    cashPrice: 51800,
    year: 2024,
    co2: 30,
    power: 225,
    autonomy: 55,
    availability: 'Commandable',
    url: '#',
    score: 82,
    highlight: 'Finition limitée',
  },
  {
    id: 'volkswagen-id3-pro',
    brand: 'Volkswagen',
    model: 'ID.3',
    version: 'Pro Performance',
    energy: 'Électrique',
    segment: 'Compacte',
    transmission: 'Automatique',
    monthlyPrice: 329,
    cashPrice: 39990,
    year: 2024,
    co2: 0,
    power: 204,
    autonomy: 433,
    availability: 'Disponible sous 10 jours',
    url: '#',
    score: 87,
    highlight: 'Nouvelle interface 5.0',
  },
  {
    id: 'alpine-a110-r',
    brand: 'Alpine',
    model: 'A110',
    version: 'R 300',
    energy: 'Essence',
    segment: 'Coupé sport',
    transmission: 'Automatique',
    monthlyPrice: 999,
    cashPrice: 113000,
    year: 2024,
    co2: 188,
    power: 300,
    autonomy: null,
    availability: 'Série limitée',
    url: '#',
    score: 79,
    highlight: 'Track pack inclus',
  },
];

let vehicles = [];
let dataOrigin = 'initial';
let eventsRegistered = false;

const API_BASE_URL = '';

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

const priceInput = document.getElementById('price');
const priceValue = document.getElementById('priceValue');
const co2Input = document.getElementById('co2');
const co2Value = document.getElementById('co2Value');
const keywordInput = document.getElementById('keyword');
const brandSelect = document.getElementById('brand');
const energySelect = document.getElementById('energy');
const transmissionSelect = document.getElementById('transmission');
const sortSelect = document.getElementById('sort');
const resultsContainer = document.getElementById('results');
const resultsCount = document.getElementById('resultsCount');
const activeTags = document.getElementById('activeTags');
const resetFiltersButton = document.getElementById('resetFilters');
const footerYear = document.getElementById('year');
const aiForm = document.getElementById('aiSearchForm');
const aiInput = document.getElementById('aiSearchInput');
const aiResetButton = document.getElementById('aiSearchReset');
const aiResponse = document.getElementById('aiSearchResponse');

const DEFAULT_PRICE = 1500;
const DEFAULT_CO2 = 200;
const FILTER_LABELS = {
  keyword: 'Mot-clé',
  brand: 'Marque',
  model: 'Modèle',
  energy: 'Énergie',
  transmission: 'Boîte',
  price: 'Budget',
  co2: 'CO₂',
  segment: 'Segment',
};

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error(`Erreur API (${response.status})`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

function setLoadingState(message) {
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div class="empty">
        <strong>${message}</strong>
      </div>
    `;
  }
  if (resultsCount) {
    resultsCount.textContent = '—';
  }
}

async function loadVehicles() {
  setLoadingState('Chargement des véhicules sur le marché français…');

  try {
    const payload = await fetchJson(`${API_BASE_URL}/api/vehicles`);
    vehicles = Array.isArray(payload?.data) ? payload.data : payload;
    dataOrigin = 'api';
  } catch (apiError) {
    console.warn('API indisponible, fallback JSON local', apiError);
    try {
      const localPayload = await fetchJson('data/vehicles.json');
      vehicles = Array.isArray(localPayload?.data) ? localPayload.data : localPayload;
      dataOrigin = 'local-json';
    } catch (jsonError) {
      console.warn('Impossible de charger data/vehicles.json, utilisation des données embarquées', jsonError);
      vehicles = [...fallbackVehicles];
      dataOrigin = 'embedded';
    }
  }

  initControls();
  registerEvents();
  updateResults();

  if (dataOrigin !== 'api') {
    disableAiAssistant(
      "L'API IA n'est pas disponible hors serveur. Activez le serveur Node pour utiliser la recherche intelligente."
    );
  }
}

function initControls() {
  if (!vehicles.length) {
    return;
  }
  priceInput.value = DEFAULT_PRICE;
  co2Input.value = DEFAULT_CO2;
  updateRangeLabels();
  populateSelect(brandSelect, getUniqueValues(vehicles, 'brand'));
  populateSelect(energySelect, getUniqueValues(vehicles, 'energy'));
}

function updateRangeLabels() {
  priceValue.textContent = `≤ ${currencyFormatter.format(Number(priceInput.value))}/mois`;
  co2Value.textContent = `≤ ${co2Input.value} g CO₂/km`;
}

function getUniqueValues(list, key) {
  return [...new Set(list.map((vehicle) => vehicle[key]))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'fr'));
}

function populateSelect(select, values) {
  if (!select) {
    return;
  }
  const currentValue = select.value;
  select.innerHTML = '<option value="">Toutes</option>';
  const fragment = document.createDocumentFragment();
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    fragment.appendChild(option);
  });
  select.appendChild(fragment);
  if (currentValue && values.includes(currentValue)) {
    select.value = currentValue;
  }
}

function getFiltersState() {
  return {
    keyword: keywordInput.value.trim().toLowerCase(),
    brand: brandSelect.value,
    energy: energySelect.value,
    transmission: transmissionSelect.value,
    price: Number(priceInput.value),
    co2: Number(co2Input.value),
    sort: sortSelect.value,
  };
}

function filterVehicles(list, state) {
  return list
    .filter((vehicle) => {
      if (state.keyword) {
        const haystack = [
          vehicle.brand,
          vehicle.model,
          vehicle.version,
          vehicle.segment,
          vehicle.highlight,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(state.keyword)) {
          return false;
        }
      }

      if (state.brand && vehicle.brand !== state.brand) {
        return false;
      }

      if (state.energy && vehicle.energy !== state.energy) {
        return false;
      }

      if (state.transmission && vehicle.transmission !== state.transmission) {
        return false;
      }

      if (vehicle.monthlyPrice > state.price) {
        return false;
      }

      if (vehicle.co2 > state.co2) {
        return false;
      }

      return true;
    })
    .sort((a, b) => sortVehicles(a, b, state.sort));
}

function sortVehicles(a, b, sortKey) {
  switch (sortKey) {
    case 'price-asc':
      return a.monthlyPrice - b.monthlyPrice;
    case 'price-desc':
      return b.monthlyPrice - a.monthlyPrice;
    case 'year-desc':
      return b.year - a.year;
    case 'co2-asc':
      return a.co2 - b.co2;
    case 'score':
    default:
      return b.score - a.score;
  }
}

function renderResults(list) {
  if (!list.length) {
    resultsContainer.innerHTML = `
      <div class="empty">
        <strong>Aucun véhicule trouvé…</strong>
        <p>Assouplissez un critère ou découvrez nos recommandations tendances.</p>
      </div>
    `;
    resultsCount.textContent = '0 véhicule';
    return;
  }

  const fragment = document.createDocumentFragment();
  list.forEach((vehicle) => {
    const card = document.createElement('article');
    card.className = 'vehicle-card';
    card.innerHTML = `
      <span class="vehicle-chip">${vehicle.segment}</span>
      <div>
        <h3>${vehicle.brand} ${vehicle.model}</h3>
        <p>${vehicle.version}</p>
        <p class="vehicle-availability">${vehicle.availability}</p>
      </div>
      <div class="vehicle-meta">
        <span><strong>${vehicle.energy}</strong>Énergie</span>
        <span><strong>${vehicle.transmission}</strong>Transmission</span>
        <span><strong>${vehicle.year}</strong>Année</span>
        <span><strong>${vehicle.co2} g</strong>CO₂/km</span>
        <span><strong>${vehicle.power} ch</strong>Puissance</span>
        <span><strong>${vehicle.autonomy ? vehicle.autonomy + ' km' : '—'}</strong>Autonomie WLTP</span>
      </div>
      <div class="vehicle-highlight">${vehicle.highlight}</div>
      <div class="vehicle-footer">
        <span class="price">${currencyFormatter.format(vehicle.monthlyPrice)}/mois</span>
        <a href="${vehicle.url}" aria-label="Voir la fiche ${vehicle.brand} ${vehicle.model}">Voir la fiche</a>
      </div>
    `;
    fragment.appendChild(card);
  });
  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(fragment);

  const count = list.length;
  resultsCount.textContent = `${count} ${count > 1 ? 'véhicules' : 'véhicule'}`;
}

function renderTags(state) {
  const tags = [];

  if (state.keyword) {
    tags.push({ label: `Mot-clé : "${state.keyword}"`, key: 'keyword' });
  }
  if (state.brand) {
    tags.push({ label: `Marque : ${state.brand}`, key: 'brand', value: state.brand });
  }
  if (state.energy) {
    tags.push({ label: `Énergie : ${state.energy}`, key: 'energy', value: state.energy });
  }
  if (state.transmission) {
    tags.push({ label: `Boîte : ${state.transmission}`, key: 'transmission', value: state.transmission });
  }
  if (state.price !== DEFAULT_PRICE) {
    tags.push({ label: `Budget ≤ ${currencyFormatter.format(state.price)}/mois`, key: 'price', value: DEFAULT_PRICE });
  }
  if (state.co2 !== DEFAULT_CO2) {
    tags.push({ label: `CO₂ ≤ ${state.co2} g/km`, key: 'co2', value: DEFAULT_CO2 });
  }

  activeTags.innerHTML = '';
  if (!tags.length) {
    return;
  }

  const fragment = document.createDocumentFragment();
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag';
    tagEl.innerHTML = `
      ${tag.label}
      <button type="button" aria-label="Supprimer le filtre ${tag.label}" data-key="${tag.key}" data-value="${tag.value ?? ''}">✕</button>
    `;
    fragment.appendChild(tagEl);
  });
  activeTags.appendChild(fragment);
}

function updateResults() {
  if (!vehicles.length) {
    setLoadingState('Aucune donnée à afficher pour le moment.');
    return;
  }
  const state = getFiltersState();
  updateRangeLabels();
  const filtered = filterVehicles(vehicles, state);
  renderResults(filtered);
  renderTags(state);
}

function resetFilters() {
  keywordInput.value = '';
  brandSelect.value = '';
  energySelect.value = '';
  transmissionSelect.value = '';
  priceInput.value = DEFAULT_PRICE;
  co2Input.value = DEFAULT_CO2;
  sortSelect.value = 'score';
  updateResults();
}

function handleTagClick(event) {
  const button = event.target.closest('button[data-key]');
  if (!button) {
    return;
  }

  const { key, value } = button.dataset;
  switch (key) {
    case 'keyword':
      keywordInput.value = '';
      break;
    case 'brand':
      brandSelect.value = '';
      break;
    case 'energy':
      energySelect.value = '';
      break;
    case 'transmission':
      transmissionSelect.value = '';
      break;
    case 'price':
      priceInput.value = DEFAULT_PRICE;
      break;
    case 'co2':
      co2Input.value = DEFAULT_CO2;
      break;
    default:
      break;
  }
  updateResults();
}

function registerEvents() {
  if (eventsRegistered) {
    return;
  }
  keywordInput.addEventListener('input', debounce(updateResults, 120));
  brandSelect.addEventListener('change', updateResults);
  energySelect.addEventListener('change', updateResults);
  transmissionSelect.addEventListener('change', updateResults);
  sortSelect.addEventListener('change', updateResults);
  priceInput.addEventListener('input', updateResults);
  co2Input.addEventListener('input', updateResults);
  resetFiltersButton.addEventListener('click', resetFilters);
  activeTags.addEventListener('click', handleTagClick);

  if (aiForm && dataOrigin === 'api') {
    aiForm.addEventListener('submit', handleAiSubmit);
  }
  if (aiResetButton) {
    aiResetButton.addEventListener('click', handleAiReset);
  }

  document.querySelectorAll('.hero-actions button')?.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.currentTarget;
      if (target?.textContent?.includes('recherche')) {
        document.getElementById('recherche').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('tendances').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  eventsRegistered = true;
}

function disableAiAssistant(message) {
  if (!aiForm) {
    return;
  }
  const submitButton = aiForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
  }
  if (aiInput) {
    aiInput.disabled = true;
  }
  if (aiResetButton) {
    aiResetButton.disabled = true;
  }
  if (aiResponse) {
    aiResponse.innerHTML = `<p class="ai-response-error">${message}</p>`;
  }
}

function setAiLoading(isLoading, message = '') {
  if (!aiResponse) {
    return;
  }
  if (isLoading) {
    aiResponse.innerHTML = `<p class="ai-loading">${message || 'Analyse en cours…'}</p>`;
  }
}

async function handleAiSubmit(event) {
  event.preventDefault();
  if (!aiInput) {
    return;
  }

  const query = aiInput.value.trim();
  if (!query) {
    renderAiResponse({ error: 'Décrivez vos besoins pour lancer la recherche IA.' });
    return;
  }

  setAiLoading(true);

  try {
    const payload = await fetchJson(`${API_BASE_URL}/api/ai/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    renderAiResponse(payload);
    applyAiFilters(payload.filters);
  } catch (error) {
    console.warn('Erreur IA', error);
    renderAiResponse({
      error:
        "Impossible d'accéder à l'IA de référencement. Vérifiez que le serveur Node.js est démarré (npm start).",
    });
  }
}

function handleAiReset() {
  if (aiInput) {
    aiInput.value = '';
  }
  if (aiResponse) {
    aiResponse.innerHTML = '';
  }
}

function applyAiFilters(filters = {}) {
  if (!filters || !Object.keys(filters).length) {
    return;
  }

  let updated = false;

  if (filters.keyword !== undefined && keywordInput) {
    keywordInput.value = filters.keyword || '';
    updated = true;
  }
  if (filters.brand !== undefined && brandSelect) {
    brandSelect.value = brandSelect.querySelector(`option[value="${filters.brand}"]`) ? filters.brand : '';
    updated = true;
  }
  if (filters.energy !== undefined && energySelect) {
    energySelect.value = energySelect.querySelector(`option[value="${filters.energy}"]`) ? filters.energy : '';
    updated = true;
  }
  if (filters.transmission !== undefined && transmissionSelect) {
    transmissionSelect.value = filters.transmission || '';
    updated = true;
  }
  if (filters.price !== undefined && priceInput) {
    priceInput.value = Math.min(filters.price, Number(priceInput.max) || filters.price);
    updated = true;
  }
  if (filters.co2 !== undefined && co2Input) {
    co2Input.value = Math.min(filters.co2, Number(co2Input.max) || filters.co2);
    updated = true;
  }

  if (updated) {
    updateResults();
  }
}

function renderAiResponse(payload) {
  if (!aiResponse) {
    return;
  }

  if (payload?.error) {
    aiResponse.innerHTML = `<p class="ai-response-error">${payload.error}</p>`;
    return;
  }

  const filters = payload?.filters || {};
  const matches = payload?.matches || [];
  const total = payload?.meta?.total ?? matches.length;
  const summary = payload?.summary ? `<p>${payload.summary}</p>` : '';

  const filterEntries = Object.entries(filters)
    .filter(([key, value]) => value && !['sort'].includes(key))
    .map(([key, value]) => `<li><strong>${key}</strong> : ${value}</li>`) // key names raw? maybe convert to label.

  const filterList = filterEntries.length
    ? `<div class="ai-response-block"><p class="ai-response-subtitle">Filtres IA détectés</p><ul>${filterEntries.join(
        ''
      )}</ul></div>`
    : '';

  const previewItems = matches.slice(0, 3).map(
    (vehicle) => `<li>${vehicle.brand} ${vehicle.model} • ${vehicle.energy} • ${vehicle.monthlyPrice} €/mois</li>`
  );

  const previewList = previewItems.length
    ? `<div class="ai-response-block"><p class="ai-response-subtitle">Top recommandations</p><ul>${previewItems.join(
        ''
      )}</ul></div>`
    : '';

  const insights = payload?.meta?.insights
    ? `<div class="ai-response-block ai-response-insights">
        <p class="ai-response-subtitle">Insights express</p>
        <ul>
          <li>Prix moyen : ${currencyFormatter.format(payload.meta.insights.averageMonthlyPrice)}/mois</li>
          <li>Plage tarifaire : ${currencyFormatter.format(payload.meta.insights.minMonthlyPrice)} à ${currencyFormatter.format(
        payload.meta.insights.maxMonthlyPrice
      )}/mois</li>
          <li>Émissions min : ${payload.meta.insights.minCo2} g/km</li>
          ${payload.meta.insights.maxAutonomy ? `<li>Autonomie max : ${payload.meta.insights.maxAutonomy} km</li>` : ''}
        </ul>
      </div>`
    : '';

  aiResponse.innerHTML = `
    ${summary}
    <p class="ai-response-total">${total} résultat${total > 1 ? 's' : ''} identifiés par l'IA.</p>
    ${filterList}
    ${previewList}
    ${insights}
  `;
}

function debounce(fn, delay = 150) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(null, args), delay);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  footerYear.textContent = new Date().getFullYear();
  loadVehicles();
});

// Accessibility enhancements for keyboard users
document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    resetFilters();
  }
});

