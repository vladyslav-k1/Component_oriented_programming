import { useEffect, useState } from 'react';
import { fetchEarthquakes } from '../api/earthquakesApi';

export function useEarthquakes() {
  const [events, setEvents] = useState([]);
  const [generatedAt, setGeneratedAt] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetchEarthquakes(controller.signal)
      .then((result) => {
        setEvents(result.events);
        setGeneratedAt(result.generatedAt);
        setStatus('success');
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setStatus('error');
      });

    return () => controller.abort();
  }, [reloadToken]);

  const reload = () => {
    setStatus('loading');
    setError(null);
    setReloadToken((token) => token + 1);
  };

  return { events, generatedAt, status, error, reload };
}
