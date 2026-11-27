import { PageHeader, Stack } from '../design-system';
import NotFoundMessage from '../components/ui/NotFoundMessage';

function NotFoundPage() {
  return (
    <Stack gap="5">
      <PageHeader title="Сторінку не знайдено" />
      <NotFoundMessage message="Такої сторінки не існує." />
    </Stack>
  );
}

export default NotFoundPage;
