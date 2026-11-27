import DashboardLayout from '../components/layout/DashboardLayout';
import NotFoundMessage from '../components/ui/NotFoundMessage';

function NotFoundPage() {
  return (
    <DashboardLayout title="Сторінку не знайдено">
      <NotFoundMessage message="Такої сторінки не існує." />
    </DashboardLayout>
  );
}

export default NotFoundPage;
