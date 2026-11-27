const USGS_FEED_URL =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export async function fetchEarthquakes(signal) {
  const response = await fetch(USGS_FEED_URL, { signal });

  if (!response.ok) {
    throw new Error(`Сервер USGS відповів зі статусом ${response.status}`);
  }

  const data = await response.json();

  return {
    events: data.features.filter((feature) => typeof feature.properties.mag === 'number'),
    generatedAt: data.metadata.generated,
  };
}
