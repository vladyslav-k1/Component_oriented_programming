function RequestState({ status, error, isEmpty, onRetry, children }) {
  if (status === 'loading') {
    return (
      <div className="request-state">
        <span className="spinner" aria-hidden="true" />
        <p>Завантаження даних USGS…</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="request-state request-state--error" role="alert">
        <p>Не вдалося завантажити дані: {error}</p>
        <button type="button" className="button--secondary" onClick={onRetry}>
          Спробувати ще раз
        </button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="request-state">
        <p>За останню добу землетрусів не зафіксовано.</p>
      </div>
    );
  }

  return children;
}

export default RequestState;
