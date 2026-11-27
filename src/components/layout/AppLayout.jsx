import { NavLink, Outlet } from 'react-router';
import ThemeToggle from '../ui/ThemeToggle';
import { ROUTES } from '../../routes';
import { useDocumentTheme } from '../../hooks/useDocumentTheme';

function AppLayout() {
  useDocumentTheme();

  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink to={ROUTES.home} end className="app-header__brand">
          Seismo Dashboard
        </NavLink>
        <ThemeToggle />
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
