import PageHeader from './PageHeader';
import Button from '../../atoms/Button/Button';

export default {
  title: 'Molecules/PageHeader',
  component: PageHeader,
  args: { title: 'Каталог продуктів' },
};

export const Default = {};

export const WithSubtitle = { args: { subtitle: 'Оновлено сьогодні о 10:00' } };

export const WithActions = {
  args: {
    subtitle: '42 позиції',
    actions: <Button startIcon="+">Додати продукт</Button>,
  },
};
