import Card from '../Card/Card';
import Spinner from '../../atoms/Spinner/Spinner';
import Text from '../../atoms/Text/Text';
import styles from './StatusMessage.module.css';

/**
 * Повідомлення про стан: завантаження, помилка, порожньо, інфо.
 * @param {{
 *   variant?: 'loading' | 'error' | 'empty' | 'info',
 *   title?: string,
 *   message: string,
 *   action?: React.ReactNode
 * }} props
 */
function StatusMessage({ variant = 'info', title, message, action }) {
  return (
    <Card>
      <div className={styles.status} role={variant === 'error' ? 'alert' : 'status'}>
        {variant === 'loading' && <Spinner size="lg" label={message} />}
        {title && <p className={styles.title}>{title}</p>}
        <Text tone={variant === 'error' ? 'danger' : 'muted'}>{message}</Text>
        {action}
      </div>
    </Card>
  );
}

export default StatusMessage;
