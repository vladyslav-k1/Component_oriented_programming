import Stack from './Stack';
import Badge from '../Badge/Badge';
import Text from '../Text/Text';

const ITEMS = ['A', 'B', 'C'];

function Items() {
  return ITEMS.map((item) => (
    <Badge key={item} tone="info">
      {item}
    </Badge>
  ));
}

export default {
  title: 'Atoms/Stack',
  component: Stack,
  args: { direction: 'column', gap: '4', align: 'stretch', justify: 'start', wrap: false },
  argTypes: {
    direction: { control: 'inline-radio', options: ['column', 'row'] },
    gap: { control: 'inline-radio', options: ['0', '1', '2', '3', '4', '5', '6', '7'] },
    align: { control: 'inline-radio', options: ['stretch', 'start', 'center', 'end', 'baseline'] },
    justify: { control: 'inline-radio', options: ['start', 'center', 'end', 'between'] },
  },
  render: (args) => (
    <Stack {...args}>
      <Items />
    </Stack>
  ),
};

export const Column = {};

export const Row = { args: { direction: 'row' } };

export const Gaps = {
  render: () => (
    <Stack gap="4">
      {['1', '2', '3', '4', '5', '6', '7'].map((gap) => (
        <Stack key={gap} direction="row" gap="3" align="center">
          <Text size="sm" tone="muted">gap {gap}</Text>
          <Stack direction="row" gap={gap}>
            <Items />
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
};

export const AlignJustify = {
  args: { direction: 'row', align: 'center', justify: 'between' },
};

export const Wrap = {
  render: (args) => (
    <Stack {...args} direction="row" gap="2" wrap>
      {Array.from({ length: 24 }, (_, index) => (
        <Badge key={index}>Елемент {index + 1}</Badge>
      ))}
    </Stack>
  ),
};
