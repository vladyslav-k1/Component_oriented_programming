import Card from './Card';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

export default {
  title: 'Molecules/Card',
  component: Card,
  args: {
    as: 'section',
    children: <Text>Вміст картки: будь-які компоненти, передані через children.</Text>,
  },
  argTypes: {
    as: { control: 'inline-radio', options: ['section', 'article', 'div'] },
  },
};

export const Default = {};

export const WithTitle = { args: { title: 'Продажі за тиждень' } };

export const WithActions = {
  args: {
    title: 'Звіт',
    actions: (
      <Button variant="secondary" size="sm">
        Експорт
      </Button>
    ),
  },
};
