import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEarthquakeQuery } from '../hooks/useEarthquakeQuery';
import { useEarthquakes } from '../hooks/useEarthquakes';
import { ROUTES } from '../routes';
import { buildKpis, formatDateTime } from '../utils/earthquakeUtils';
import { sortEvents, getNextSortConfig } from '../utils/sorting';
import { filterBySearch } from '../utils/filters';
import { getDeltaTone } from '../utils/presentation';
import { selectFavoritesCount } from '../store/slices/favoritesSlice';
import { Card, Grid, PageHeader, Stack, StatCard } from '../design-system';
import RequestState from '../components/ui/RequestState';
import FilterPanel from '../components/widgets/FilterPanel';
import EarthquakeChartWidget from '../components/widgets/EarthquakeChartWidget';
import EarthquakeTable from '../components/widgets/EarthquakeTable';
import MagnitudeCounter from '../components/widgets/MagnitudeCounter';
import EarthquakeList from '../components/widgets/EarthquakeList';
import EarthquakeDetails from '../components/widgets/EarthquakeDetails';
import FavoritesWidget from '../components/widgets/FavoritesWidget';

const DEFAULT_SORT = { key: 'time', direction: 'desc' };

function EarthquakeDashboard() {
  const query = useEarthquakeQuery();
  const navigate = useNavigate();
  const favoritesCount = useSelector(selectFavoritesCount);
  const { events: loadedEvents, generatedAt, loading, error, refetch } = useEarthquakes(
    query.requestUrl,
  );

  const handleOpenEvent = (id) => navigate(ROUTES.earthquake(id));

  const [sortConfig, setSortConfig] = useState(DEFAULT_SORT);
  const [selectedId, setSelectedId] = useState(null);

  const events = useMemo(
    () => filterBySearch(loadedEvents, query.search),
    [loadedEvents, query.search],
  );
  const sortedEvents = useMemo(() => sortEvents(events, sortConfig), [events, sortConfig]);
  const kpis = useMemo(
    () =>
      buildKpis(events, {
        now: generatedAt ?? query.referenceTime,
        periodMs: query.periodMs,
      }),
    [events, generatedAt, query.referenceTime, query.periodMs],
  );
  const timeRange = useMemo(
    () => ({
      start: query.referenceTime - query.periodMs,
      end: generatedAt ?? query.referenceTime,
      periodMs: query.periodMs,
    }),
    [query.referenceTime, query.periodMs, generatedAt],
  );

  const selectedEvent =
    events.find((event) => event.id === selectedId) ?? sortedEvents[0] ?? null;
  const activeId = selectedEvent?.id ?? null;

  const handleSortChange = (key) => {
    setSortConfig((prev) => getNextSortConfig(prev, key));
  };

  const subtitle = generatedAt
    ? `Дані USGS · оновлено ${formatDateTime(generatedAt)}`
    : 'Дані USGS';

  return (
    <Stack gap="5">
      <PageHeader title="Землетруси" subtitle={subtitle} />

      <Card title="Фільтри">
        <FilterPanel isPending={query.isPending} />
      </Card>

      <RequestState
        loading={loading}
        error={error}
        isEmpty={events.length === 0}
        emptyMessage="За обраними фільтрами землетрусів не знайдено. Змініть або скиньте фільтри."
        onRetry={refetch}
      >
        <Stack gap="5">
          <Grid minItemWidth="sm" gap="4">
            {kpis.map((kpi) => (
              <StatCard
                key={kpi.id}
                label={kpi.title}
                value={kpi.value}
                unit={kpi.unit}
                delta={kpi.change}
                deltaLabel={kpi.changeLabel}
                deltaTone={getDeltaTone(kpi.change)}
              />
            ))}
          </Grid>

          <Card title="Аналітика вибірки">
            <EarthquakeChartWidget events={events} timeRange={timeRange} />
          </Card>

          <Card title={`Події у вибірці (${events.length})`}>
            <EarthquakeTable
              events={sortedEvents}
              sortConfig={sortConfig}
              onSortChange={handleSortChange}
              selectedId={activeId}
              onSelect={handleOpenEvent}
            />
          </Card>

          <Grid minItemWidth="md" gap="4" align="start">
            <Stack gap="4">
              <Card title="Поріг магнітуди">
                <MagnitudeCounter events={events} />
              </Card>
              <Card title={`Обране (${favoritesCount})`}>
                <FavoritesWidget />
              </Card>
            </Stack>
            <Card title="Події за категорією">
              <EarthquakeList events={events} selectedId={activeId} onSelect={setSelectedId} />
            </Card>
            <Card title="Деталі події">
              <EarthquakeDetails event={selectedEvent} />
            </Card>
          </Grid>
        </Stack>
      </RequestState>
    </Stack>
  );
}

export default EarthquakeDashboard;
