import { useState } from 'react';
import { Button, IconButton, Stack, Text } from '../../design-system';

function MagnitudeCounter({ events, initialValue = 4, step = 0.5, min = 0, max = 10 }) {
  const [threshold, setThreshold] = useState(initialValue);

  const matchingCount = events.filter((event) => event.properties.mag >= threshold).length;

  const handleIncrement = () => setThreshold((prev) => Math.min(prev + step, max));
  const handleDecrement = () => setThreshold((prev) => Math.max(prev - step, min));
  const handleReset = () => setThreshold(initialValue);

  return (
    <Stack gap="3" align="start">
      <Stack direction="row" gap="3" align="center">
        <IconButton icon="−" label="Зменшити поріг" variant="secondary" onClick={handleDecrement} disabled={threshold <= min} />
        <Text size="xl" weight="semibold">M ≥ {threshold.toFixed(1)}</Text>
        <IconButton icon="+" label="Збільшити поріг" variant="secondary" onClick={handleIncrement} disabled={threshold >= max} />
      </Stack>
      <Text>
        Подій з такою магнітудою: <Text as="strong" weight="bold">{matchingCount}</Text>
      </Text>
      <Button variant="secondary" size="sm" onClick={handleReset}>Скинути</Button>
    </Stack>
  );
}

export default MagnitudeCounter;
