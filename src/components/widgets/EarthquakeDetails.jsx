import { useState } from 'react';
import { Link } from 'react-router';
import { DescriptionList, Stack, Switch, Text, TextLink } from '../../design-system';
import { ROUTES } from '../../routes';
import { formatDateTime, kmToMiles } from '../../utils/earthquakeUtils';

function EarthquakeDetails({ event }) {
  const [useMiles, setUseMiles] = useState(false);

  if (!event) {
    return <Text tone="muted">Оберіть подію у списку, щоб побачити деталі.</Text>;
  }

  const { mag, place, time, url, tsunami } = event.properties;
  const [longitude, latitude, depthKm] = event.geometry.coordinates;

  const depthText = useMiles
    ? `${kmToMiles(depthKm).toFixed(1)} mi`
    : `${depthKm.toFixed(1)} км`;

  const items = [
    { label: 'Регіон', value: place ?? '—' },
    { label: 'Магнітуда', value: `M ${mag.toFixed(1)}` },
    { label: 'Глибина', value: depthText },
    { label: 'Координати', value: `${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°` },
    { label: 'Час', value: formatDateTime(time) },
  ];

  return (
    <Stack gap="3">
      <Switch label="Одиниці глибини" checked={useMiles} onChange={setUseMiles} offLabel="км" onLabel="милі" />
      <DescriptionList items={items} />
      {tsunami === 1 && <Text tone="warning" weight="semibold">⚠ Можлива загроза цунамі</Text>}
      <Stack direction="row" gap="3" wrap>
        <TextLink as={Link} to={ROUTES.earthquake(event.id)}>Відкрити сторінку події →</TextLink>
        <TextLink href={url} target="_blank" rel="noreferrer">Сторінка події на USGS ↗</TextLink>
      </Stack>
    </Stack>
  );
}

export default EarthquakeDetails;
