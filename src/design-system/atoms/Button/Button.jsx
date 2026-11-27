import { cx } from '../../utils/cx';
import styles from './Button.module.css';

/**
 * Основна кнопка.
 * @param {{
 *   variant?: 'primary' | 'secondary' | 'ghost' | 'danger',
 *   size?: 'sm' | 'md' | 'lg',
 *   fullWidth?: boolean,
 *   startIcon?: React.ReactNode,
 *   type?: 'button' | 'submit' | 'reset',
 *   disabled?: boolean,
 *   onClick?: (event: React.MouseEvent) => void,
 *   children: React.ReactNode
 * }} props
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  startIcon,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={cx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth)}
      {...rest}
    >
      {startIcon && <span aria-hidden="true">{startIcon}</span>}
      {children}
    </button>
  );
}

export default Button;
