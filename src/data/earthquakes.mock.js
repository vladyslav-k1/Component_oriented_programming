const NOW = Date.now();
const HOUR_MS = 60 * 60 * 1000;

function createEvent({ id, mag, place, hoursAgo, longitude, latitude, depth, tsunami = 0 }) {
  const time = NOW - hoursAgo * HOUR_MS;

  return {
    type: 'Feature',
    id,
    properties: {
      mag,
      place,
      time,
      updated: time,
      url: `https://earthquake.usgs.gov/earthquakes/eventpage/${id}`,
      tsunami,
      magType: mag >= 4.5 ? 'mww' : 'ml',
      type: 'earthquake',
      title: `M ${mag.toFixed(1)} - ${place}`,
    },
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude, depth],
    },
  };
}

export const mockEarthquakeCollection = {
  type: 'FeatureCollection',
  metadata: {
    generated: NOW,
    title: 'USGS All Earthquakes, Past Day (mock)',
    count: 10,
  },
  features: [
    createEvent({ id: 'ci40912345', mag: 2.1, place: '12 km SW of Ridgecrest, CA', hoursAgo: 1, longitude: -117.78, latitude: 35.55, depth: 8.2 }),
    createEvent({ id: 'us7000abcd', mag: 5.6, place: '85 km S of Sand Point, Alaska', hoursAgo: 3, longitude: -160.4, latitude: 54.6, depth: 35.0 }),
    createEvent({ id: 'nc73912345', mag: 1.4, place: '5 km NW of The Geysers, CA', hoursAgo: 4, longitude: -122.8, latitude: 38.8, depth: 2.1 }),
    createEvent({ id: 'us7000abce', mag: 6.1, place: '120 km E of Hachinohe, Japan', hoursAgo: 6, longitude: 142.9, latitude: 40.4, depth: 42.7, tsunami: 1 }),
    createEvent({ id: 'ak0249abcd', mag: 3.2, place: '40 km N of Anchorage, Alaska', hoursAgo: 8, longitude: -149.9, latitude: 61.6, depth: 45.3 }),
    createEvent({ id: 'us7000abcf', mag: 4.7, place: 'Fiji Islands region', hoursAgo: 11, longitude: -178.2, latitude: -17.9, depth: 562.4 }),
    createEvent({ id: 'hv73654321', mag: 2.6, place: '8 km S of Volcano, Hawaii', hoursAgo: 15, longitude: -155.2, latitude: 19.35, depth: 1.9 }),
    createEvent({ id: 'us7000abcg', mag: 4.3, place: '25 km W of Ovalle, Chile', hoursAgo: 20, longitude: -71.5, latitude: -30.6, depth: 55.0 }),
    createEvent({ id: 'ci40912399', mag: 3.8, place: '15 km N of Borrego Springs, CA', hoursAgo: 30, longitude: -116.4, latitude: 33.4, depth: 11.0 }),
    createEvent({ id: 'us7000abch', mag: 5.2, place: 'Southern Mid-Atlantic Ridge', hoursAgo: 40, longitude: -13.5, latitude: -35.2, depth: 10.0 }),
  ],
};

export const mockPreviousDayStats = {
  count: 9,
  maxMagnitude: 5.4,
  averageDepth: 70,
};
