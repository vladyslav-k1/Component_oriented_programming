import { useState } from 'react';
import Input from './Input';
import Stack from '../Stack/Stack';
import Text from '../Text/Text';

function InputDemo(args) {
  const [value, setValue] = useState('');
  return (
    <Stack gap="2">
      <Input {...args} value={value} onChange={(event) => setValue(event.target.value)} />
      <Text size="sm" tone="muted">Значення: {value || '—'}</Text>
    </Stack>
  );
}

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    size: 'md',
    invalid: false,
    disabled: false,
    'aria-label': 'Поле вводу',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {};

export const WithPlaceholder = { args: { placeholder: 'Введіть назву' } };

export const Number = { args: { type: 'number', min: 0, max: 100, step: 1, defaultValue: 42 } };

export const Sizes = {
  render: (args) => (
    <Stack gap="3">
      <Input {...args} size="sm" placeholder="Small" />
      <Input {...args} size="md" placeholder="Medium" />
      <Input {...args} size="lg" placeholder="Large" />
    </Stack>
  ),
};

export const Invalid = { args: { invalid: true, defaultValue: 'Некоректне значення' } };

export const Disabled = { args: { disabled: true, defaultValue: 'Недоступно' } };

export const Interactive = {
  args: { placeholder: 'Почніть вводити…' },
  render: (args) => <InputDemo {...args} />,
};
