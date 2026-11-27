import { cx } from '../../utils/cx';
import styles from '../../styles/control.module.css';

/**
 * Випадаючий список. Інші props (value, onChange, id) — як у <select>.
 * @param {{
 *   options: { value: string, label: string }[],
 *   size?: 'sm' | 'md' | 'lg',
 *   invalid?: boolean
 * }} props
 */
function Select({ options, size = 'md', invalid = false, ...rest }) {
  return (
    <select
      className={cx(styles.control, styles[size], invalid && styles.invalid)}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
