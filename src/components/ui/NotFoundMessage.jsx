import { Link } from 'react-router';
import { StatusMessage, TextLink } from '../../design-system';
import { ROUTES } from '../../routes';

function NotFoundMessage({ message }) {
  return (
    <StatusMessage
      variant="empty"
      title="404"
      message={message}
      action={
        <TextLink as={Link} to={ROUTES.home}>
          ← Повернутися до дашборду
        </TextLink>
      }
    />
  );
}

export default NotFoundMessage;
