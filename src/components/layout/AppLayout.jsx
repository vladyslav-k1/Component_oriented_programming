import { NavLink, Outlet } from 'react-router';
import ThemeToggle from '../ui/ThemeToggle';
import { ROUTES } from '../../routes';

function AppLayout() {
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
