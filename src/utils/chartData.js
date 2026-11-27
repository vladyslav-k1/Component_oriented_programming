const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

export const CHART_TYPES = [
  { value: 'bar', label: 'Стовпчики' },
  { value: 'line', label: 'Лінія' },
  { value: 'area', label: 'Область' },
];

export const CHART_METRICS = [
  { value: 'magnitude', label: 'За магнітудою' },
  { value: 'time', label: 'За часом' },
];

export function buildMagnitudeDistribution(events) {
  if (events.length === 0) return [];

  const magnitudes = events.map((event) => event.properties.mag);
  const minBin = Math.floor(Math.min(...magnitudes));
  const maxBin = Math.floor(Math.max(...magnitudes));

  const counts = new Map();
  for (let bin = minBin; bin <= maxBin; bin += 1) {
    counts.set(bin, 0);
  }
  magnitudes.forEach((mag) => {
    const bin = Math.floor(mag);
    counts.set(bin, counts.get(bin) + 1);
  });

  return Array.from(counts, ([bin, count]) => ({ label: `${bin}–${bin + 1}`, count }));
}

function getBucketSize(periodMs) {
  if (periodMs <= DAY_MS) return HOUR_MS;
  if (periodMs <= 3 * DAY_MS) return 6 * HOUR_MS;
  return DAY_MS;
}

function formatBucketLabel(timestamp, bucketMs) {
  const options =
    bucketMs >= DAY_MS
      ? { day: '2-digit', month: '2-digit' }
      : bucketMs > HOUR_MS
        ? { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }
        : { hour: '2-digit', minute: '2-digit' };
  return new Date(timestamp).toLocaleString('uk-UA', options);
}

export function buildTimeSeries(events, { start, end, periodMs }) {
  const bucketMs = getBucketSize(periodMs);
  const bucketCount = Math.max(1, Math.ceil((end - start) / bucketMs));

  const counts = Array.from({ length: bucketCount }, () => 0);
  events.forEach((event) => {
    const index = Math.floor((event.properties.time - start) / bucketMs);
    if (index >= 0 && index < bucketCount) counts[index] += 1;
  });

  return counts.map((count, index) => ({
    label: formatBucketLabel(start + index * bucketMs, bucketMs),
    count,
  }));
}
