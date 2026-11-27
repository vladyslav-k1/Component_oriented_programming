import { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import Widget from './components/layout/Widget';
import KpiCard from './components/widgets/KpiCard';
import MagnitudeCounter from './components/widgets/MagnitudeCounter';
import EarthquakeList from './components/widgets/EarthquakeList';
import EarthquakeDetails from './components/widgets/EarthquakeDetails';
import { mockEarthquakeCollection, mockPreviousDayStats } from './data/earthquakes.mock';
import {
  getEventsLastDay,
  getMaxMagnitude,
  getAverageDepth,
  formatChange,
} from './utils/earthquakeUtils';

const events = mockEarthquakeCollection.features;

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedEvent = events.find((event) => event.id === selectedId) ?? null;

  const lastDayEvents = getEventsLastDay(events);
  const count = lastDayEvents.length;
  const maxMagnitude = getMaxMagnitude(lastDayEvents);
  const averageDepth = getAverageDepth(lastDayEvents);

  const kpis = [
    {
      id: 'count',
      title: 'Події за добу',
      value: count,
      change: formatChange(count, mockPreviousDayStats.count),
    },
    {
      id: 'max-mag',
      title: 'Макс. магнітуда',
      value: maxMagnitude.toFixed(1),
      unit: 'M',
      change: formatChange(maxMagnitude, mockPreviousDayStats.maxMagnitude),
    },
    {
      id: 'avg-depth',
      title: 'Середня глибина',
      value: averageDepth.toFixed(1),
      unit: 'км',
      change: formatChange(averageDepth, mockPreviousDayStats.averageDepth),
    },
  ];

  return (
    <DashboardLayout title="Землетруси" subtitle="Дані USGS (mock) за останню добу">
      <div className="kpi-row">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            unit={kpi.unit}
            change={kpi.change}
          />
        ))}
      </div>

      <div className="widgets-grid">
        <Widget title="Поріг магнітуди">
          <MagnitudeCounter events={events} />
        </Widget>

        <Widget title="Події">
          <EarthquakeList events={events} selectedId={selectedId} onSelect={setSelectedId} />
        </Widget>

        <Widget title="Деталі події">
          <EarthquakeDetails event={selectedEvent} />
        </Widget>
      </div>
    </DashboardLayout>
  );
}

export default App;
