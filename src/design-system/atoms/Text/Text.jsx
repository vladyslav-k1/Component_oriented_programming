import { cx } from '../../utils/cx';
import styles from './Text.module.css';

/**
 * Текст.
 * @param {{
 *   as?: 'p' | 'span' | 'strong' | 'div',
 *   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
 *   tone?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger',
 *   weight?: 'regular' | 'medium' | 'semibold' | 'bold',
 *   children: React.ReactNode
 * }} props
 */
function Text({ as: Component = 'p', size = 'md', tone = 'default', weight = 'regular', children }) {
  return (
    <Component
      className={cx(
        styles.text,
        styles[`size-${size}`],
        styles[`tone-${tone}`],
        styles[`weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
}

export default Text;
