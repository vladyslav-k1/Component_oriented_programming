import { cx } from '../../utils/cx';
import styles from '../../styles/control.module.css';

/**
 * Текстове / числове поле. Інші props (value, onChange, type, min, max, step, placeholder, id) — як у <input>.
 * @param {{ size?: 'sm' | 'md' | 'lg', invalid?: boolean }} props
 */
function Input({ size = 'md', invalid = false, ...rest }) {
  return (
    <input
      className={cx(styles.control, styles[size], invalid && styles.invalid)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export default Input;
