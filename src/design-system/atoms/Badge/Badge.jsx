import { cx } from '../../utils/cx';
import styles from './Badge.module.css';

/**
 * Значок-мітка.
 * @param {{
 *   tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger',
 *   size?: 'sm' | 'md',
 *   children: React.ReactNode
 * }} props
 */
function Badge({ tone = 'neutral', size = 'md', children }) {
  return (
    <span className={cx(styles.badge, styles[`tone-${tone}`], styles[`size-${size}`])}>
      {children}
    </span>
  );
}

export default Badge;
