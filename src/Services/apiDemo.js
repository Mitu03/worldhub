const API_data = "https://api.worldbank.org/v2";
const RestCountries = "https://restcountries.com/v3.1/all";
const HealthAPI = "https://ghoapi.azureedge.net/api/WHOSIS_000001";

// Fetch total population
export async function fetchPopulation(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/SP.POP.TOTL?format=json`
  );
  const data = await res.json();
  return data[1]?.map((item) => ({ date: item.date, value: item.value })) || [];
}

// Fetch population growth rate
export async function fetchPopulationGrowth(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/SP.POP.GROW?format=json`
  );
  const data = await res.json();
  return data[1]?.map((item) => ({ date: item.date, value: item.value })) || [];
}

// Fetch life expectancy
export async function fetchLifeExpectancy(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/SP.DYN.LE00.IN?format=json`
  );
  const data = await res.json();
  return data[1]?.map((item) => ({ date: item.date, value: item.value })) || [];
}

// Fetch literacy rate
export async function fetchLiteracyRate(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/SE.ADT.LITR.ZS?format=json`
  );
  const data = await res.json();
  return data[1]?.map((item) => ({ date: item.date, value: item.value })) || [];
}

// Fetch country data from RestCountries
export async function fetchCountryData() {
  const res = await fetch(RestCountries);
  const data = await res.json();
  return data.map((country) => ({
    name: country.name.common,
    population: country.population,
    area: country.area,
    capital: country.capital ? country.capital[0] : "N/A",
    region: country.region,
  }));
}

// Fetch health data from WHO API
export async function fetchHealthData() {
  const res = await fetch(HealthAPI);
  const data = await res.json();
  return data.value?.map((item) => ({
    indicator: item.IndicatorName,
    country: item.SpatialDim,
    year: item.TimeDim,
    value: item.Value,
  })) || [];
}
