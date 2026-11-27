const DAY_MS = 24 * 60 * 60 * 1000;
const KM_TO_MILES = 0.621371;

export const MAGNITUDE_CATEGORIES = [
  { value: 'all', label: 'Усі' },
  { value: 'minor', label: 'Слабкі (< 3)' },
  { value: 'moderate', label: 'Помірні (3 – 4.9)' },
  { value: 'strong', label: 'Сильні (≥ 5)' },
];

export function getMagnitudeCategory(mag) {
  if (mag < 3) return 'minor';
  if (mag < 5) return 'moderate';
  return 'strong';
}

export function getEventsLastDay(events, now = Date.now()) {
  return events.filter((event) => now - event.properties.time <= DAY_MS);
}

export function getMaxMagnitude(events) {
  if (events.length === 0) return 0;
  return Math.max(...events.map((event) => event.properties.mag));
}

export function getAverageDepth(events) {
  if (events.length === 0) return 0;
  const totalDepth = events.reduce((sum, event) => sum + event.geometry.coordinates[2], 0);
  return totalDepth / events.length;
}

export function formatChange(current, previous) {
  if (!previous) return '—';
  const percent = ((current - previous) / previous) * 100;
  const sign = percent > 0 ? '+' : '';
  return `${sign}${percent.toFixed(1)}%`;
}

export function formatDateTime(timestamp) {
  return new Date(timestamp).toLocaleString('uk-UA');
}

export function kmToMiles(km) {
  return km * KM_TO_MILES;
}
