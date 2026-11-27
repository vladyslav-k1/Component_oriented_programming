import Text from './Text';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/Text',
  component: Text,
  args: { children: 'Приклад тексту', size: 'md', tone: 'default', weight: 'regular' },
  argTypes: {
    as: { control: 'inline-radio', options: ['p', 'span', 'strong', 'div'] },
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    tone: {
      control: 'inline-radio',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'],
    },
    weight: { control: 'inline-radio', options: ['regular', 'medium', 'semibold', 'bold'] },
  },
};

export const Sizes = {
  render: (args) => (
    <Stack gap="2">
      <Text {...args} size="xs">Size xs</Text>
      <Text {...args} size="sm">Size sm</Text>
      <Text {...args} size="md">Size md</Text>
      <Text {...args} size="lg">Size lg</Text>
      <Text {...args} size="xl">Size xl</Text>
    </Stack>
  ),
};

export const Tones = {
  render: (args) => (
    <Stack gap="2">
      <Text {...args} tone="default">Default</Text>
      <Text {...args} tone="muted">Muted</Text>
      <Text {...args} tone="primary">Primary</Text>
      <Text {...args} tone="success">Success</Text>
      <Text {...args} tone="warning">Warning</Text>
      <Text {...args} tone="danger">Danger</Text>
    </Stack>
  ),
};

export const Weights = {
  render: (args) => (
    <Stack gap="2">
      <Text {...args} weight="regular">Regular</Text>
      <Text {...args} weight="medium">Medium</Text>
      <Text {...args} weight="semibold">Semibold</Text>
      <Text {...args} weight="bold">Bold</Text>
    </Stack>
  ),
};
