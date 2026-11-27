import { useEffect, useState } from 'react';

const INITIAL_RESULT = { key: null, data: null, error: null, errorStatus: null };

export function useFetch(url) {
  const [result, setResult] = useState(INITIAL_RESULT);
  const [reloadToken, setReloadToken] = useState(0);

  const requestKey = url ? `${reloadToken}:${url}` : null;

  useEffect(() => {
    if (!requestKey) return undefined;

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          const httpError = new Error(`Сервер відповів зі статусом ${response.status}`);
          httpError.status = response.status;
          throw httpError;
        }
        return response.json();
      })
      .then((data) => setResult({ key: requestKey, data, error: null, errorStatus: null }))
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setResult({
          key: requestKey,
          data: null,
          error: err.message,
          errorStatus: err.status ?? null,
        });
      });

    return () => controller.abort();
  }, [url, requestKey]);

  const isCurrent = requestKey !== null && result.key === requestKey;

  return {
    data: isCurrent ? result.data : null,
    loading: requestKey !== null && !isCurrent,
    error: isCurrent ? result.error : null,
    errorStatus: isCurrent ? result.errorStatus : null,
    refetch: () => setReloadToken((token) => token + 1),
  };
}
