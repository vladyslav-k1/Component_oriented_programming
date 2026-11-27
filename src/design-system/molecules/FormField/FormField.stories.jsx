import FormField from './FormField';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';

const OPTIONS = [
  { value: 'a', label: 'Продукт A' },
  { value: 'b', label: 'Продукт B' },
];

export default {
  title: 'Molecules/FormField',
  component: FormField,
  args: { label: 'Назва', htmlFor: 'field-name' },
};

export const WithInput = {
  args: { children: <Input id="field-name" placeholder="Введіть назву" /> },
};

export const WithSelect = {
  args: {
    label: 'Продукт',
    htmlFor: 'field-product',
    children: <Select id="field-product" options={OPTIONS} />,
  },
};

export const WithError = {
  args: {
    label: 'Кількість',
    htmlFor: 'field-amount',
    error: 'Значення від 0 до 100',
    children: <Input id="field-amount" type="number" defaultValue={150} invalid />,
  },
};

export const WithHint = {
  args: {
    label: 'Email',
    htmlFor: 'field-email',
    hint: 'Ми не показуємо email іншим користувачам',
    children: <Input id="field-email" type="email" placeholder="name@example.com" />,
  },
};
