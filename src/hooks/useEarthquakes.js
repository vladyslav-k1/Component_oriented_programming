import { useMemo } from 'react';
import { useFetch } from './useFetch';
import { parseEarthquakesResponse } from '../api/earthquakesApi';

const EMPTY_EVENTS = [];

export function useEarthquakes(url) {
  const { data, loading, error, refetch } = useFetch(url);

  const parsed = useMemo(() => (data ? parseEarthquakesResponse(data) : null), [data]);

  return {
    events: parsed?.events ?? EMPTY_EVENTS,
    generatedAt: parsed?.generatedAt ?? null,
    loading,
    error,
    refetch,
  };
}
