import { useState } from 'react';
import Toggle from '../ui/Toggle';
import { formatDateTime, kmToMiles } from '../../utils/earthquakeUtils';

function EarthquakeDetails({ event }) {
  const [useMiles, setUseMiles] = useState(false);

  if (!event) {
    return <p className="placeholder">Оберіть подію у списку, щоб побачити деталі.</p>;
  }

  const { mag, place, time, url, tsunami } = event.properties;
  const [longitude, latitude, depthKm] = event.geometry.coordinates;

  const depthText = useMiles
    ? `${kmToMiles(depthKm).toFixed(1)} mi`
    : `${depthKm.toFixed(1)} км`;

  return (
    <div className="details">
      <Toggle checked={useMiles} onChange={setUseMiles} offLabel="км" onLabel="милі" />

      <dl className="details__list">
        <dt>Регіон</dt>
        <dd>{place}</dd>

        <dt>Магнітуда</dt>
        <dd>M {mag.toFixed(1)}</dd>

        <dt>Глибина</dt>
        <dd>{depthText}</dd>

        <dt>Координати</dt>
        <dd>{latitude.toFixed(2)}°, {longitude.toFixed(2)}°</dd>

        <dt>Час</dt>
        <dd>{formatDateTime(time)}</dd>
      </dl>

      {tsunami === 1 && <p className="details__warning">⚠ Можлива загроза цунамі</p>}

      <a href={url} target="_blank" rel="noreferrer">Сторінка події на USGS</a>
    </div>
  );
}

export default EarthquakeDetails;
