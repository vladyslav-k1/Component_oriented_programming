import { useFetch } from './useFetch';
import { buildEarthquakeDetailsUrl, isValidEventId } from '../api/earthquakesApi';

const NOT_FOUND_STATUSES = [400, 404];

export function useEarthquake(id) {
  const isValidId = isValidEventId(id);
  const { data, loading, error, errorStatus, refetch } = useFetch(
    isValidId ? buildEarthquakeDetailsUrl(id) : null,
  );

  const event = data?.type === 'Feature' ? data : null;
  const notFound =
    !isValidId ||
    NOT_FOUND_STATUSES.includes(errorStatus) ||
    (data !== null && event === null);

  return {
    event,
    loading,
    error: notFound ? null : error,
    notFound,
    refetch,
  };
}
