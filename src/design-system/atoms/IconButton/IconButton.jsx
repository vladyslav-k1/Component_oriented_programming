import { cx } from '../../utils/cx';
import styles from './IconButton.module.css';

const ACTIVE_CLASS = {
  primary: styles.activePrimary,
  warning: styles.activeWarning,
  danger: styles.activeDanger,
};

/**
 * Кнопка-іконка. label обов'язковий (aria-label + підказка).
 * pressed робить кнопку перемикачем (aria-pressed).
 * @param {{
 *   icon: React.ReactNode,
 *   label: string,
 *   variant?: 'ghost' | 'secondary',
 *   size?: 'sm' | 'md',
 *   pressed?: boolean,
 *   activeTone?: 'primary' | 'warning' | 'danger',
 *   disabled?: boolean,
 *   onClick?: (event: React.MouseEvent) => void
 * }} props
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  pressed,
  activeTone = 'primary',
  ...rest
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={pressed}
      className={cx(styles.iconButton, styles[variant], styles[size], pressed && ACTIVE_CLASS[activeTone])}
      {...rest}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}

export default IconButton;
