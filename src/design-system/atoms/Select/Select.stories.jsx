import { useState } from 'react';
import Select from './Select';
import Stack from '../Stack/Stack';
import Text from '../Text/Text';

const OPTIONS = [
  { value: 'a', label: 'Продукт A' },
  { value: 'b', label: 'Продукт B' },
  { value: 'c', label: 'Продукт C' },
];

function SelectDemo(args) {
  const [value, setValue] = useState(args.options[0].value);
  return (
    <Stack gap="2">
      <Select {...args} value={value} onChange={(event) => setValue(event.target.value)} />
      <Text size="sm" tone="muted">Обрано: {value}</Text>
    </Stack>
  );
}

export default {
  title: 'Atoms/Select',
  component: Select,
  args: {
    options: OPTIONS,
    size: 'md',
    invalid: false,
    disabled: false,
    'aria-label': 'Вибір продукту',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {};

export const Sizes = {
  render: (args) => (
    <Stack gap="3">
      <Select {...args} size="sm" />
      <Select {...args} size="md" />
      <Select {...args} size="lg" />
    </Stack>
  ),
};

export const Invalid = { args: { invalid: true } };

export const Disabled = { args: { disabled: true } };

export const Interactive = { render: (args) => <SelectDemo {...args} /> };
