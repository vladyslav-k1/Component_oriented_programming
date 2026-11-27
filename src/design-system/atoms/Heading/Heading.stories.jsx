import Heading from './Heading';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: { children: 'Заголовок розділу', level: 2 },
  argTypes: {
    level: { control: 'inline-radio', options: [1, 2, 3, 4] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] },
  },
};

export const Levels = {
  render: (args) => (
    <Stack gap="3">
      <Heading {...args} level={1}>Heading 1</Heading>
      <Heading {...args} level={2}>Heading 2</Heading>
      <Heading {...args} level={3}>Heading 3</Heading>
      <Heading {...args} level={4}>Heading 4</Heading>
    </Stack>
  ),
};

export const CustomSize = { args: { level: 3, size: '3xl', children: 'h3 з розміром 3xl' } };
