import { Badge, DataTable } from '../../design-system';
import FavoriteButton from './FavoriteButton';
import { formatDateTime } from '../../utils/earthquakeUtils';
import { getMagnitudeTone } from '../../utils/presentation';

const COLUMNS = [
  {
    key: 'favorite',
    header: '★',
    width: 'icon',
    render: (event) => <FavoriteButton event={event} />,
  },
  {
    key: 'time',
    header: 'Час',
    sortable: true,
    render: (event) => formatDateTime(event.properties.time),
  },
  {
    key: 'mag',
    header: 'Магнітуда',
    sortable: true,
    render: (event) => (
      <Badge tone={getMagnitudeTone(event.properties.mag)}>{event.properties.mag.toFixed(1)}</Badge>
    ),
  },
  {
    key: 'place',
    header: 'Регіон',
    sortable: true,
    render: (event) => event.properties.place ?? '—',
  },
  {
    key: 'depth',
    header: 'Глибина, км',
    sortable: true,
    align: 'end',
    render: (event) => event.geometry.coordinates[2].toFixed(1),
  },
  {
    key: 'coordinates',
    header: 'Координати',
    render: (event) => {
      const [longitude, latitude] = event.geometry.coordinates;
      return `${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`;
    },
  },
  {
    key: 'magType',
    header: 'Тип',
    render: (event) => event.properties.magType ?? '—',
  },
];

const getEventKey = (event) => event.id;

function EarthquakeTable({ events, sortConfig, onSortChange, selectedId, onSelect }) {
  return (
    <DataTable
      columns={COLUMNS}
      rows={events}
      getRowKey={getEventKey}
      sort={sortConfig}
      onSortChange={onSortChange}
      onRowClick={(event) => onSelect(event.id)}
      selectedRowKey={selectedId}
      maxHeight="lg"
      caption="Землетруси у вибірці"
    />
  );
}

export default EarthquakeTable;
