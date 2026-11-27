import { Button, StatusMessage } from '../../design-system';

function RequestState({ loading, error, isEmpty, emptyMessage = 'Даних немає.', onRetry, children }) {
  if (loading) {
    return <StatusMessage variant="loading" message="Завантаження даних USGS…" />;
  }

  if (error) {
    return (
      <StatusMessage
        variant="error"
        message={`Не вдалося завантажити дані: ${error}`}
        action={<Button variant="secondary" onClick={onRetry}>Спробувати ще раз</Button>}
      />
    );
  }

  if (isEmpty) {
    return <StatusMessage variant="empty" message={emptyMessage} />;
  }

  return children;
}

export default RequestState;
