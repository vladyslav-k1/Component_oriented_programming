import { fn } from 'storybook/test';
import Button from './Button';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Кнопка',
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Playground = {};

export const Variants = {
  render: (args) => (
    <Stack direction="row" gap="3" wrap>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
    </Stack>
  ),
};

export const Sizes = {
  render: (args) => (
    <Stack direction="row" gap="3" align="center">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </Stack>
  ),
};

export const WithIcon = { args: { startIcon: '★', variant: 'secondary', children: 'Додати в обране' } };

export const Disabled = { args: { disabled: true } };
