import { NavLink, Outlet } from 'react-router';
import { AppShell, TextLink } from '../../design-system';
import ThemeToggle from '../ui/ThemeToggle';
import { useDocumentTheme } from '../../hooks/useDocumentTheme';
import { ROUTES } from '../../routes';

function AppLayout() {
  useDocumentTheme();

  return (
    <AppShell
      brand={
        <TextLink as={NavLink} to={ROUTES.home} end tone="default" weight="bold">
          Seismo Dashboard
        </TextLink>
      }
      actions={<ThemeToggle />}
    >
      <Outlet />
    </AppShell>
  );
}

export default AppLayout;
