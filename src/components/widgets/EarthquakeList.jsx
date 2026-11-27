import { useState } from 'react';
import { FormField, List, ListItem, Select, Stack, Text } from '../../design-system';
import { MAGNITUDE_CATEGORIES, getMagnitudeCategory, formatDateTime } from '../../utils/earthquakeUtils';

function EarthquakeList({ events, selectedId, onSelect }) {
  const [category, setCategory] = useState('all');

  const filteredEvents =
    category === 'all'
      ? events
      : events.filter((event) => getMagnitudeCategory(event.properties.mag) === category);

  return (
    <Stack gap="3">
      <FormField label="Категорія" htmlFor="event-category">
        <Select
          id="event-category"
          size="sm"
          options={MAGNITUDE_CATEGORIES}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </FormField>

      {filteredEvents.length === 0 ? (
        <Text tone="muted">Немає подій у цій категорії.</Text>
      ) : (
        <List maxHeight="md">
          {filteredEvents.map((event) => (
            <ListItem
              key={event.id}
              title={`M ${event.properties.mag.toFixed(1)}`}
              description={event.properties.place ?? '—'}
              meta={formatDateTime(event.properties.time)}
              selected={event.id === selectedId}
              onClick={() => onSelect(event.id)}
            />
          ))}
        </List>
      )}
    </Stack>
  );
}

export default EarthquakeList;
