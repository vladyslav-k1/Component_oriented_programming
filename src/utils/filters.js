const DAY_MS = 24 * 60 * 60 * 1000;

export const DEFAULT_FILTERS = {
  search: '',
  minMagnitude: '2.5',
  period: '1',
  limit: '500',
};

export const PERIOD_OPTIONS = [
  { value: '1', label: 'Остання доба' },
  { value: '3', label: 'Останні 3 доби' },
  { value: '7', label: 'Останній тиждень' },
];

export const LIMIT_OPTIONS = [
  { value: '100', label: '100' },
  { value: '250', label: '250' },
  { value: '500', label: '500' },
  { value: '1000', label: '1000' },
];

export function validateMinMagnitude(value) {
  if (value === '') return true;
  const magnitude = Number(value);
  if (!Number.isFinite(magnitude)) return 'Введіть число';
  if (magnitude < 0 || magnitude > 10) return 'Значення від 0 до 10';
  return true;
}

export function toQueryParams({ period, minMagnitude, limit }) {
  const magnitude = minMagnitude === '' ? null : Number(minMagnitude);
  const isValidMagnitude = magnitude !== null && validateMinMagnitude(minMagnitude) === true;

  return {
    periodMs: Number(period) * DAY_MS,
    minMagnitude: isValidMagnitude ? magnitude : null,
    limit: Number(limit),
  };
}

export function filterBySearch(events, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (normalizedQuery === '') return events;

  return events.filter((event) =>
    (event.properties.place ?? '').toLowerCase().includes(normalizedQuery),
  );
}
