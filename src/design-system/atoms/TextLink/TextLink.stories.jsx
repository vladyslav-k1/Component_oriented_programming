import TextLink from './TextLink';

export default {
  title: 'Atoms/TextLink',
  component: TextLink,
  args: { children: 'Детальніше', href: '#', tone: 'primary', weight: 'medium' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['primary', 'default'] },
    weight: { control: 'inline-radio', options: ['medium', 'bold'] },
  },
};

export const Primary = {};

export const Default = { args: { tone: 'default', weight: 'bold', children: 'Назва продукту' } };

export const External = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noreferrer',
    children: 'Зовнішній сайт ↗',
  },
};
