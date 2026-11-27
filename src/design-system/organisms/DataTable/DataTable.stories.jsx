import { useState } from 'react';
import { fn } from 'storybook/test';
import DataTable from './DataTable';
import Badge from '../../atoms/Badge/Badge';

const ROWS = [
  { id: 'a', name: 'Продукт A', category: 'Електроніка', price: 1250, stock: 12 },
  { id: 'b', name: 'Продукт B', category: 'Книги', price: 320, stock: 0 },
  { id: 'c', name: 'Продукт C', category: 'Одяг', price: 890, stock: 4 },
  { id: 'd', name: 'Продукт D', category: 'Електроніка', price: 2400, stock: 30 },
  { id: 'e', name: 'Продукт E', category: 'Книги', price: 150, stock: 7 },
];

const COLUMNS = [
  { key: 'name', header: 'Назва', sortable: true },
  { key: 'category', header: 'Категорія', sortable: true },
  { key: 'price', header: 'Ціна, грн', sortable: true, align: 'end' },
  { key: 'stock', header: 'Залишок', sortable: true, align: 'end' },
];

function getStockTone(stock) {
  if (stock === 0) return 'danger';
  if (stock < 10) return 'warning';
  return 'success';
}

const COLUMNS_WITH_BADGES = [
  { key: 'name', header: 'Назва' },
  { key: 'category', header: 'Категорія' },
  {
    key: 'stock',
    header: 'Залишок',
    align: 'center',
    render: (row) => <Badge tone={getStockTone(row.stock)}>{row.stock}</Badge>,
  },
];

const getRowKey = (row) => row.id;

function sortRows(rows, { key, direction }) {
  const factor = direction === 'asc' ? 1 : -1;
  return [...rows].sort((a, b) => {
    if (typeof a[key] === 'string') return a[key].localeCompare(b[key]) * factor;
    return (a[key] - b[key]) * factor;
  });
}

function SortableDemo(args) {
  const [sort, setSort] = useState({ key: 'name', direction: 'asc' });

  const handleSortChange = (key) => {
    setSort((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' },
    );
  };

  return (
    <DataTable
      {...args}
      rows={sortRows(args.rows, sort)}
      sort={sort}
      onSortChange={handleSortChange}
    />
  );
}

export default {
  title: 'Organisms/DataTable',
  component: DataTable,
  args: {
    columns: COLUMNS,
    rows: ROWS,
    getRowKey,
    maxHeight: 'md',
    caption: 'Продукти',
  },
  argTypes: {
    maxHeight: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {};

export const Sortable = { render: (args) => <SortableDemo {...args} /> };

export const ClickableRows = { args: { onRowClick: fn() } };

export const SelectedRow = { args: { onRowClick: fn(), selectedRowKey: 'c' } };

export const WithBadges = { args: { columns: COLUMNS_WITH_BADGES } };

export const Empty = { args: { rows: [], emptyMessage: 'Продуктів не знайдено' } };

export const Scrollable = {
  args: {
    maxHeight: 'sm',
    rows: Array.from({ length: 30 }, (_, index) => ({
      id: `p-${index}`,
      name: `Продукт ${index + 1}`,
      category: index % 2 === 0 ? 'Електроніка' : 'Книги',
      price: 100 + index * 25,
      stock: index % 7,
    })),
  },
};
