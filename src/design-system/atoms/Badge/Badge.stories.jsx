import Badge from './Badge';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  args: { children: '42', tone: 'neutral', size: 'md' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
};

export const Tones = {
  render: (args) => (
    <Stack direction="row" gap="3" wrap>
      <Badge {...args} tone="neutral">Neutral</Badge>
      <Badge {...args} tone="info">Info</Badge>
      <Badge {...args} tone="success">Success</Badge>
      <Badge {...args} tone="warning">Warning</Badge>
      <Badge {...args} tone="danger">Danger</Badge>
    </Stack>
  ),
};

export const Sizes = {
  render: (args) => (
    <Stack direction="row" gap="3" align="center">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
    </Stack>
  ),
};
