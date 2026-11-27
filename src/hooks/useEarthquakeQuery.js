import { useSelector } from 'react-redux';
import { useDebounce } from './useDebounce';
import { buildEarthquakesUrl } from '../api/earthquakesApi';
import {
  selectQueryParams,
  selectReferenceTime,
  selectSearch,
} from '../store/slices/filtersSlice';

const DEBOUNCE_MS = 400;

export function useEarthquakeQuery() {
  const search = useSelector(selectSearch);
  const queryParams = useSelector(selectQueryParams);
  const referenceTime = useSelector(selectReferenceTime);

  const liveUrl = buildEarthquakesUrl(queryParams, referenceTime);

  const requestUrl = useDebounce(liveUrl, DEBOUNCE_MS);
  const debouncedSearch = useDebounce(search, DEBOUNCE_MS);
  const periodMs = useDebounce(queryParams.periodMs, DEBOUNCE_MS);

  return {
    requestUrl,
    search: debouncedSearch,
    periodMs,
    referenceTime,
    isPending: liveUrl !== requestUrl || search !== debouncedSearch,
  };
}
