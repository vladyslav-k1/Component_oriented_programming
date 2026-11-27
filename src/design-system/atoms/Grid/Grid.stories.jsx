import Grid from './Grid';
import Stack from '../Stack/Stack';
import Heading from '../Heading/Heading';
import Badge from '../Badge/Badge';

const ITEMS = ['A', 'B', 'C', 'D', 'E', 'F'];

function Items() {
  return ITEMS.map((item) => (
    <Badge key={item} tone="info">
      Продукт {item}
    </Badge>
  ));
}

export default {
  title: 'Atoms/Grid',
  component: Grid,
  args: { minItemWidth: 'md', gap: '4', align: 'stretch' },
  argTypes: {
    minItemWidth: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    gap: { control: 'inline-radio', options: ['2', '3', '4', '5'] },
    align: { control: 'inline-radio', options: ['stretch', 'start'] },
  },
  render: (args) => (
    <Grid {...args}>
      <Items />
    </Grid>
  ),
};

export const MinItemWidth = {
  render: (args) => (
    <Stack gap="5">
      {['sm', 'md', 'lg'].map((width) => (
        <Stack key={width} gap="2">
          <Heading level={3}>minItemWidth = {width}</Heading>
          <Grid {...args} minItemWidth={width}>
            <Items />
          </Grid>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Gaps = {
  render: (args) => (
    <Stack gap="5">
      {['2', '3', '4', '5'].map((gap) => (
        <Stack key={gap} gap="2">
          <Heading level={3}>gap = {gap}</Heading>
          <Grid {...args} minItemWidth="sm" gap={gap}>
            <Items />
          </Grid>
        </Stack>
      ))}
    </Stack>
  ),
};
