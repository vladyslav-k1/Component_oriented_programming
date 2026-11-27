import { formatDateTime, getMagnitudeCategory } from '../../utils/earthquakeUtils';
import FavoriteButton from './FavoriteButton';

const COLUMNS = [
  { key: 'favorite', label: '★', sortable: false },
  { key: 'time', label: 'Час', sortable: true },
  { key: 'mag', label: 'Магнітуда', sortable: true },
  { key: 'place', label: 'Регіон', sortable: true },
  { key: 'depth', label: 'Глибина, км', sortable: true },
  { key: 'coordinates', label: 'Координати', sortable: false },
  { key: 'magType', label: 'Тип', sortable: false },
];

function getSortIndicator(columnKey, sortConfig) {
  if (columnKey !== sortConfig.key) return '↕';
  return sortConfig.direction === 'asc' ? '▲' : '▼';
}

function getAriaSort(columnKey, sortConfig) {
  if (columnKey !== sortConfig.key) return 'none';
  return sortConfig.direction === 'asc' ? 'ascending' : 'descending';
}

function EarthquakeTable({ events, sortConfig, onSortChange, selectedId, onSelect }) {
  return (
    <div className="table-wrapper">
      <table className="eq-table">
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th
                key={column.key}
                scope="col"
                aria-sort={column.sortable ? getAriaSort(column.key, sortConfig) : undefined}
              >
                {column.sortable ? (
                  <button
                    type="button"
                    className="eq-table__sort"
                    onClick={() => onSortChange(column.key)}
                  >
                    {column.label}{' '}
                    <span aria-hidden="true">{getSortIndicator(column.key, sortConfig)}</span>
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            const { mag, place, time, magType } = event.properties;
            const [longitude, latitude, depth] = event.geometry.coordinates;

            return (
              <tr
                key={event.id}
                className={event.id === selectedId ? 'eq-table__row--selected' : ''}
                tabIndex={0}
                onClick={() => onSelect(event.id)}
                onKeyDown={(keyboardEvent) => {
                  if (keyboardEvent.key === 'Enter' && keyboardEvent.target === keyboardEvent.currentTarget) {
                    onSelect(event.id);
                  }
                }}
              >
                <td className="eq-table__favorite">
                  <FavoriteButton event={event} />
                </td>
                <td>{formatDateTime(time)}</td>
                <td>
                  <span className={`mag-badge mag-badge--${getMagnitudeCategory(mag)}`}>
                    {mag.toFixed(1)}
                  </span>
                </td>
                <td>{place ?? '—'}</td>
                <td className="eq-table__num">{depth.toFixed(1)}</td>
                <td>
                  {latitude.toFixed(2)}°, {longitude.toFixed(2)}°
                </td>
                <td>{magType ?? '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EarthquakeTable;
