import { Link, useParams } from 'react-router';
import { useEarthquake } from '../hooks/useEarthquake';
import { ROUTES } from '../routes';
import DashboardLayout from '../components/layout/DashboardLayout';
import RequestState from '../components/ui/RequestState';
import NotFoundMessage from '../components/ui/NotFoundMessage';
import EarthquakeFullDetails from '../components/widgets/EarthquakeFullDetails';

function EarthquakePage() {
  const { id } = useParams();
  const { event, loading, error, notFound, refetch } = useEarthquake(id);

  if (notFound) {
    return (
      <DashboardLayout title="Подію не знайдено">
        <NotFoundMessage message={`Землетрусу з ідентифікатором «${id}» не існує.`} />
      </DashboardLayout>
    );
  }

  const title = event
    ? `M ${event.properties.mag?.toFixed(1) ?? '—'} · ${event.properties.place ?? 'Невідомий регіон'}`
    : 'Деталі події';

  return (
    <DashboardLayout title={title} subtitle={`ID події: ${id}`}>
      <Link to={ROUTES.home} className="back-link">
        ← Назад до дашборду
      </Link>

      <RequestState
        loading={loading}
        error={error}
        isEmpty={!event}
        emptyMessage="Дані про подію відсутні."
        onRetry={refetch}
      >
        <EarthquakeFullDetails event={event} />
      </RequestState>
    </DashboardLayout>
  );
}

export default EarthquakePage;
