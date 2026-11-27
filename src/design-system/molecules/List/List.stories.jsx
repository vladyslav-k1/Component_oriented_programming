import List from './List';
import ListItem from '../ListItem/ListItem';

function Items({ count }) {
  return Array.from({ length: count }, (_, index) => (
    <ListItem
      key={index}
      title={`Продукт ${index + 1}`}
      description="Короткий опис продукту"
      meta={`Артикул ${1000 + index}`}
    />
  ));
}

export default {
  title: 'Molecules/List',
  component: List,
  argTypes: {
    maxHeight: { control: 'inline-radio', options: [undefined, 'sm', 'md', 'lg'] },
  },
};

export const Default = {
  render: (args) => (
    <List {...args}>
      <Items count={3} />
    </List>
  ),
};

export const Scrollable = {
  args: { maxHeight: 'sm' },
  render: (args) => (
    <List {...args}>
      <Items count={20} />
    </List>
  ),
};
