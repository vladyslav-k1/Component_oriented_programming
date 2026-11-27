import { Link } from 'react-router';
import { ROUTES } from '../../routes';

function NotFoundMessage({ message }) {
  return (
    <div className="request-state" role="status">
      <p className="not-found__code">404</p>
      <p>{message}</p>
      <Link to={ROUTES.home} className="back-link">
        ← Повернутися до дашборду
      </Link>
    </div>
  );
}

export default NotFoundMessage;
