import { fn } from 'storybook/test';
import StatusMessage from './StatusMessage';
import Button from '../../atoms/Button/Button';
import TextLink from '../../atoms/TextLink/TextLink';

export default {
  title: 'Molecules/StatusMessage',
  component: StatusMessage,
  args: { variant: 'info', message: 'Повідомлення' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['loading', 'error', 'empty', 'info'] },
  },
};

export const Loading = { args: { variant: 'loading', message: 'Завантаження даних…' } };

export const Error = {
  args: {
    variant: 'error',
    message: 'Не вдалося завантажити дані: сервер недоступний',
    action: (
      <Button variant="secondary" onClick={fn()}>
        Спробувати ще раз
      </Button>
    ),
  },
};

export const Empty = { args: { variant: 'empty', message: 'За обраними умовами нічого не знайдено.' } };

export const NotFound = {
  args: {
    variant: 'empty',
    title: '404',
    message: 'Такої сторінки не існує.',
    action: <TextLink href="#">← На головну</TextLink>,
  },
};
