const vehicles = [
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

const DEFAULT_PRICE = 1500;
const DEFAULT_CO2 = 200;

function initControls() {
  priceInput.value = DEFAULT_PRICE;
  co2Input.value = DEFAULT_CO2;
  updateRangeLabels();
  populateSelect(brandSelect, getUniqueValues('brand'));
  populateSelect(energySelect, getUniqueValues('energy'));
  updateResults();
}

function updateRangeLabels() {
  priceValue.textContent = `≤ ${currencyFormatter.format(Number(priceInput.value))}/mois`;
  co2Value.textContent = `≤ ${co2Input.value} g CO₂/km`;
}

function getUniqueValues(key) {
  return [...new Set(vehicles.map((vehicle) => vehicle[key]))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, 'fr'));
}

function populateSelect(select, values) {
  const fragment = document.createDocumentFragment();
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    fragment.appendChild(option);
  });
  select.appendChild(fragment);
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

function filterVehicles(state) {
  return vehicles
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
  const state = getFiltersState();
  updateRangeLabels();
  const filtered = filterVehicles(state);
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
  keywordInput.addEventListener('input', debounce(updateResults, 120));
  brandSelect.addEventListener('change', updateResults);
  energySelect.addEventListener('change', updateResults);
  transmissionSelect.addEventListener('change', updateResults);
  sortSelect.addEventListener('change', updateResults);
  priceInput.addEventListener('input', updateResults);
  co2Input.addEventListener('input', updateResults);
  resetFiltersButton.addEventListener('click', resetFilters);
  activeTags.addEventListener('click', handleTagClick);

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
  initControls();
  registerEvents();
});

// Accessibility enhancements for keyboard users
document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    resetFilters();
  }
});

