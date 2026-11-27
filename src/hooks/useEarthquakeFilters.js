import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDebounce } from './useDebounce';
import { buildEarthquakesUrl } from '../api/earthquakesApi';
import { DEFAULT_FILTERS, toQueryParams } from '../utils/filters';

const DEBOUNCE_MS = 400;

export function useEarthquakeFilters() {
  const [referenceTime] = useState(() => Date.now());

  const {
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: DEFAULT_FILTERS, mode: 'onChange' });

  const [search, period, minMagnitude, limit] = useWatch({
    control,
    name: ['search', 'period', 'minMagnitude', 'limit'],
  });

  const queryParams = toQueryParams({ period, minMagnitude, limit });
  const liveUrl = buildEarthquakesUrl(queryParams, referenceTime);

  const requestUrl = useDebounce(liveUrl, DEBOUNCE_MS);
  const debouncedSearch = useDebounce(search, DEBOUNCE_MS);

  const appliedPeriodMs = useDebounce(queryParams.periodMs, DEBOUNCE_MS);

  const resetFilters = () => reset(DEFAULT_FILTERS);

  return {
    control,
    errors,
    isDirty,
    resetFilters,
    requestUrl,
    search: debouncedSearch,
    periodMs: appliedPeriodMs,
    referenceTime,
    isPending: liveUrl !== requestUrl || search !== debouncedSearch,
  };
}
