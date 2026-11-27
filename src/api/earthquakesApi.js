const USGS_QUERY_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query';

export function buildEarthquakesUrl({ periodMs, minMagnitude, limit }, referenceTime) {
  const params = new URLSearchParams({
    format: 'geojson',
    eventtype: 'earthquake',
    orderby: 'time',
    starttime: new Date(referenceTime - periodMs).toISOString().slice(0, 19),
    limit: String(limit),
  });

  if (minMagnitude !== null) {
    params.set('minmagnitude', String(minMagnitude));
  }

  return `${USGS_QUERY_URL}?${params}`;
}

export function parseEarthquakesResponse(data) {
  return {
    events: data.features.filter((feature) => typeof feature.properties.mag === 'number'),
    generatedAt: data.metadata.generated,
  };
}

const EVENT_ID_PATTERN = /^[a-z0-9_-]{4,40}$/i;

export function isValidEventId(id) {
  return typeof id === 'string' && EVENT_ID_PATTERN.test(id);
}

export function buildEarthquakeDetailsUrl(id) {
  const params = new URLSearchParams({
    format: 'geojson',
    eventid: id,
    nodata: '404',
  });
  return `${USGS_QUERY_URL}?${params}`;
}
