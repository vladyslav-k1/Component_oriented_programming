import { fn } from 'storybook/test';
import IconButton from './IconButton';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
    icon: '★',
    label: 'Позначити',
    variant: 'ghost',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['ghost', 'secondary'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    activeTone: { control: 'inline-radio', options: ['primary', 'warning', 'danger'] },
  },
};

export const Default = {};

export const Secondary = { args: { variant: 'secondary', icon: '+', label: 'Додати' } };

export const Sizes = {
  render: (args) => (
    <Stack direction="row" gap="3" align="center">
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
    </Stack>
  ),
};

export const Pressed = {
  render: (args) => (
    <Stack direction="row" gap="3" align="center">
      <IconButton {...args} pressed activeTone="primary" icon="●" label="Primary" />
      <IconButton {...args} pressed activeTone="warning" icon="★" label="Warning" />
      <IconButton {...args} pressed activeTone="danger" icon="♥" label="Danger" />
    </Stack>
  ),
};

export const Disabled = { args: { disabled: true } };
