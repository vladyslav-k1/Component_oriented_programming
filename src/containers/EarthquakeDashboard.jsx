import { useMemo, useState } from 'react';
import { useEarthquakes } from '../hooks/useEarthquakes';
import { buildKpis, formatDateTime } from '../utils/earthquakeUtils';
import { sortEvents, getNextSortConfig } from '../utils/sorting';
import DashboardLayout from '../components/layout/DashboardLayout';
import Widget from '../components/layout/Widget';
import RequestState from '../components/ui/RequestState';
import KpiCard from '../components/widgets/KpiCard';
import EarthquakeTable from '../components/widgets/EarthquakeTable';
import MagnitudeCounter from '../components/widgets/MagnitudeCounter';
import EarthquakeList from '../components/widgets/EarthquakeList';
import EarthquakeDetails from '../components/widgets/EarthquakeDetails';

const DEFAULT_SORT = { key: 'time', direction: 'desc' };

function EarthquakeDashboard() {
  const { events, generatedAt, status, error, reload } = useEarthquakes();
  const [sortConfig, setSortConfig] = useState(DEFAULT_SORT);
  const [selectedId, setSelectedId] = useState(null);

  const sortedEvents = useMemo(() => sortEvents(events, sortConfig), [events, sortConfig]);
  const kpis = useMemo(() => buildKpis(events, generatedAt), [events, generatedAt]);

  const selectedEvent = events.find((event) => event.id === selectedId) ?? sortedEvents[0] ?? null;
  const activeId = selectedEvent?.id ?? null;

  const handleSortChange = (key) => {
    setSortConfig((prev) => getNextSortConfig(prev, key));
  };

  const subtitle = generatedAt
    ? `Дані USGS за останню добу · оновлено ${formatDateTime(generatedAt)}`
    : 'Дані USGS за останню добу';

  return (
    <DashboardLayout title="Землетруси" subtitle={subtitle}>
      <RequestState
        status={status}
        error={error}
        isEmpty={events.length === 0}
        onRetry={reload}
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

        <div className="table-section">
          <Widget title={`Усі події за добу (${events.length})`}>
            <EarthquakeTable
              events={sortedEvents}
              sortConfig={sortConfig}
              onSortChange={handleSortChange}
              selectedId={activeId}
              onSelect={setSelectedId}
            />
          </Widget>
        </div>

        <div className="widgets-grid">
          <Widget title="Поріг магнітуди">
            <MagnitudeCounter events={events} />
          </Widget>

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
