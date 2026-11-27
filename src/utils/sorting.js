const SORT_ACCESSORS = {
  time: (event) => event.properties.time,
  mag: (event) => event.properties.mag,
  depth: (event) => event.geometry.coordinates[2],
  place: (event) => event.properties.place ?? '',
};

export function sortEvents(events, { key, direction }) {
  const getValue = SORT_ACCESSORS[key];
  const factor = direction === 'asc' ? 1 : -1;

  return [...events].sort((a, b) => {
    const valueA = getValue(a);
    const valueB = getValue(b);

    if (typeof valueA === 'string') {
      return valueA.localeCompare(valueB) * factor;
    }
    return (valueA - valueB) * factor;
  });
}

export function getNextSortConfig(prevConfig, key) {
  if (prevConfig.key === key) {
    return { key, direction: prevConfig.direction === 'asc' ? 'desc' : 'asc' };
  }
  return { key, direction: 'desc' };
}
