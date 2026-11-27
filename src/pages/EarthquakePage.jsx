import { Link, useParams } from 'react-router';
import { useEarthquake } from '../hooks/useEarthquake';
import { ROUTES } from '../routes';
import { PageHeader, Stack, TextLink } from '../design-system';
import RequestState from '../components/ui/RequestState';
import NotFoundMessage from '../components/ui/NotFoundMessage';
import EarthquakeFullDetails from '../components/widgets/EarthquakeFullDetails';
import FavoriteButton from '../components/widgets/FavoriteButton';

function EarthquakePage() {
  const { id } = useParams();
  const { event, loading, error, notFound, refetch } = useEarthquake(id);

  if (notFound) {
    return (
      <Stack gap="5">
        <PageHeader title="Подію не знайдено" />
        <NotFoundMessage message={`Землетрусу з ідентифікатором «${id}» не існує.`} />
      </Stack>
    );
  }

  const title = event
    ? `M ${event.properties.mag?.toFixed(1) ?? '—'} · ${event.properties.place ?? 'Невідомий регіон'}`
    : 'Деталі події';

  return (
    <Stack gap="5">
      <PageHeader
        title={title}
        subtitle={`ID події: ${id}`}
        actions={event && <FavoriteButton event={event} showLabel />}
      />
      <Stack align="start">
        <TextLink as={Link} to={ROUTES.home}>← Назад до дашборду</TextLink>
      </Stack>
      <RequestState
        loading={loading}
        error={error}
        isEmpty={!event}
        emptyMessage="Дані про подію відсутні."
        onRetry={refetch}
      >
        <EarthquakeFullDetails event={event} />
      </RequestState>
    </Stack>
  );
}

export default EarthquakePage;
