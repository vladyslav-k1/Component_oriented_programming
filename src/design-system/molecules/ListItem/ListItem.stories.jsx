import { fn } from 'storybook/test';
import ListItem from './ListItem';
import List from '../List/List';
import IconButton from '../../atoms/IconButton/IconButton';

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
  args: {
    title: 'Продукт A',
    description: 'Короткий опис продукту',
    meta: 'Оновлено 01.01.2026',
    selected: false,
  },
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const Static = {};

export const Clickable = { args: { onClick: fn() } };

export const Selected = { args: { onClick: fn(), selected: true } };

export const WithTrailing = {
  args: {
    onClick: fn(),
    trailing: <IconButton icon="✕" label="Видалити" size="sm" onClick={fn()} />,
  },
};
