import { fn } from 'storybook/test';
import FilterBar from './FilterBar';
import FormField from '../../molecules/FormField/FormField';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'Усі' },
  { value: 'electronics', label: 'Електроніка' },
  { value: 'books', label: 'Книги' },
];

const SORT_OPTIONS = [
  { value: 'name', label: 'За назвою' },
  { value: 'price', label: 'За ціною' },
];

function Fields() {
  return (
    <>
      <FormField label="Пошук" htmlFor="filter-demo-search">
        <Input id="filter-demo-search" placeholder="Назва продукту" />
      </FormField>
      <FormField label="Мін. ціна" htmlFor="filter-demo-price">
        <Input id="filter-demo-price" type="number" min="0" defaultValue="0" />
      </FormField>
      <FormField label="Категорія" htmlFor="filter-demo-category">
        <Select id="filter-demo-category" options={CATEGORY_OPTIONS} />
      </FormField>
      <FormField label="Сортування" htmlFor="filter-demo-sort">
        <Select id="filter-demo-sort" options={SORT_OPTIONS} />
      </FormField>
    </>
  );
}

export default {
  title: 'Organisms/FilterBar',
  component: FilterBar,
  args: {
    onSubmit: fn(),
    children: <Fields />,
    actions: (
      <Button variant="secondary" onClick={fn()}>
        Скинути фільтри
      </Button>
    ),
  },
};

export const Default = {};

export const WithStatus = {
  args: {
    status: (
      <Text size="sm" tone="muted">
        Застосування фільтрів…
      </Text>
    ),
  },
};
