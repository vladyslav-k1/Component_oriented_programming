import DataChart from './DataChart';
import Stack from '../../atoms/Stack/Stack';
import Heading from '../../atoms/Heading/Heading';

const DATA = [
  { label: 'Пн', count: 12 },
  { label: 'Вт', count: 19 },
  { label: 'Ср', count: 7 },
  { label: 'Чт', count: 24 },
  { label: 'Пт', count: 15 },
  { label: 'Сб', count: 9 },
  { label: 'Нд', count: 4 },
];

export default {
  title: 'Organisms/DataChart',
  component: DataChart,
  args: {
    data: DATA,
    type: 'bar',
    xKey: 'label',
    yKey: 'count',
    valueLabel: 'Замовлень',
    height: 'md',
  },
  argTypes: {
    type: { control: 'inline-radio', options: ['bar', 'line', 'area'] },
    height: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Bar = {};

export const Line = { args: { type: 'line' } };

export const Area = { args: { type: 'area' } };

export const Heights = {
  render: (args) => (
    <Stack gap="5">
      {['sm', 'md', 'lg'].map((height) => (
        <Stack key={height} gap="2">
          <Heading level={3}>height = {height}</Heading>
          <DataChart {...args} height={height} />
        </Stack>
      ))}
    </Stack>
  ),
};
