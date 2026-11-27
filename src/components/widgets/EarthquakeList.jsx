import { useState } from 'react';
import { MAGNITUDE_CATEGORIES, getMagnitudeCategory, formatDateTime } from '../../utils/earthquakeUtils';

function EarthquakeList({ events, selectedId, onSelect }) {
  const [category, setCategory] = useState('all');

  const filteredEvents =
    category === 'all'
      ? events
      : events.filter((event) => getMagnitudeCategory(event.properties.mag) === category);

  return (
    <div className="event-list">
      <label className="event-list__filter">
        Категорія:{' '}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {MAGNITUDE_CATEGORIES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      {filteredEvents.length === 0 ? (
        <p className="placeholder">Немає подій у цій категорії.</p>
      ) : (
        <ul className="event-list__items">
          {filteredEvents.map((event) => (
            <li key={event.id}>
              <button
                type="button"
                className={`event-list__item ${event.id === selectedId ? 'event-list__item--selected' : ''}`}
                onClick={() => onSelect(event.id)}
              >
                <span className="event-list__mag">M {event.properties.mag.toFixed(1)}</span>
                <span className="event-list__place">{event.properties.place}</span>
                <span className="event-list__time">{formatDateTime(event.properties.time)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EarthquakeList;
