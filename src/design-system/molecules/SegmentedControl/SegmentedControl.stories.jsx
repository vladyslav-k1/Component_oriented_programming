import { useState } from 'react';
import SegmentedControl from './SegmentedControl';
import Stack from '../../atoms/Stack/Stack';
import Text from '../../atoms/Text/Text';

const TWO_OPTIONS = [
  { value: 'list', label: 'Список' },
  { value: 'grid', label: 'Плитка' },
];

const THREE_OPTIONS = [
  { value: 'day', label: 'День' },
  { value: 'week', label: 'Тиждень' },
  { value: 'month', label: 'Місяць' },
];

function SegmentedDemo({ label, options }) {
  const [value, setValue] = useState(options[0].value);
  return (
    <Stack gap="2" align="start">
      <SegmentedControl label={label} options={options} value={value} onChange={setValue} />
      <Text size="sm" tone="muted">Обрано: {value}</Text>
    </Stack>
  );
}

export default {
  title: 'Molecules/SegmentedControl',
  component: SegmentedControl,
  args: { label: 'Вигляд', options: TWO_OPTIONS, value: 'list' },
};

export const Interactive = {
  render: () => (
    <Stack gap="5">
      <SegmentedDemo label="Вигляд" options={TWO_OPTIONS} />
      <SegmentedDemo label="Період" options={THREE_OPTIONS} />
    </Stack>
  ),
};
