import Spinner from './Spinner';
import Stack from '../Stack/Stack';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  args: { size: 'md', label: 'Завантаження' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
};

export const Sizes = {
  render: (args) => (
    <Stack direction="row" gap="4" align="center">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </Stack>
  ),
};
