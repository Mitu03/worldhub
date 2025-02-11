const API_data = "https://api.worldbank.org/v2";

export async function fetchGDP(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`
  );
  const data = await res.json();
  return data[1].map((item) => ({ date: item.date, value: item.value }));
}

export async function fetchInflation(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/FP.CPI.TOTL.ZG?format=json`
  );
  const data = await res.json();
  return data[1].map((item) => ({ date: item.date, value: item.value }));
}

export async function fetchUnemployment(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/SL.UEM.TOTL.ZS?format=json`
  );
  const data = await res.json();
  return data[1].map((item) => ({ date: item.date, value: item.value }));
}

export async function fetchExternalDebt(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/DT.DOD.DECT.CD?format=json`
  );
  const data = await res.json();
  return data[1].map((item) => ({ date: item.date, value: item.value }));
}

export async function fetchForeignReserves(countryCode) {
  const res = await fetch(
    `${API_data}/country/${countryCode}/indicator/FI.RES.TOTL.CD?format=json`
  );
  const data = await res.json();
  return data[1].map((item) => ({ date: item.date, value: item.value }));
}
