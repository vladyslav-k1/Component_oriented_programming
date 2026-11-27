import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useEarthquakeQuery } from '../hooks/useEarthquakeQuery';
import { useEarthquakes } from '../hooks/useEarthquakes';
import { ROUTES } from '../routes';
import { buildKpis, formatDateTime } from '../utils/earthquakeUtils';
import { sortEvents, getNextSortConfig } from '../utils/sorting';
import { filterBySearch } from '../utils/filters';
import DashboardLayout from '../components/layout/DashboardLayout';
import Widget from '../components/layout/Widget';
import RequestState from '../components/ui/RequestState';
import FilterPanel from '../components/widgets/FilterPanel';
import KpiCard from '../components/widgets/KpiCard';
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
    <DashboardLayout title="Землетруси" subtitle={subtitle}>
      <div className="filters-section">
        <Widget title="Фільтри">
          <FilterPanel isPending={query.isPending} />
        </Widget>
      </div>

      <RequestState
        loading={loading}
        error={error}
        isEmpty={events.length === 0}
        emptyMessage="За обраними фільтрами землетрусів не знайдено. Змініть або скиньте фільтри."
        onRetry={refetch}
      >
        <div className="kpi-row">
          {kpis.map((kpi) => (
            <KpiCard
              key={kpi.id}
              title={kpi.title}
              value={kpi.value}
              unit={kpi.unit}
              change={kpi.change}
              changeLabel={kpi.changeLabel}
            />
          ))}
        </div>

        <div className="chart-section">
          <Widget title="Аналітика вибірки">
            <EarthquakeChartWidget events={events} timeRange={timeRange} />
          </Widget>
        </div>

        <div className="table-section">
          <Widget title={`Події у вибірці (${events.length})`}>
            <EarthquakeTable
              events={sortedEvents}
              sortConfig={sortConfig}
              onSortChange={handleSortChange}
              selectedId={activeId}
              onSelect={handleOpenEvent}
            />
          </Widget>
        </div>

        <div className="widgets-grid">
          <div className="widgets-column">
            <Widget title="Поріг магнітуди">
              <MagnitudeCounter events={events} />
            </Widget>

            <Widget title="Обране">
              <FavoritesWidget />
            </Widget>
          </div>

          <Widget title="Події за категорією">
            <EarthquakeList events={events} selectedId={activeId} onSelect={setSelectedId} />
          </Widget>

          <Widget title="Деталі події">
            <EarthquakeDetails event={selectedEvent} />
          </Widget>
        </div>
      </RequestState>
    </DashboardLayout>
  );
}

export default EarthquakeDashboard;
