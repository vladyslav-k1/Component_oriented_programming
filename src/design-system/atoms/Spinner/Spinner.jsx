import { cx } from '../../utils/cx';
import utilities from '../../styles/utilities.module.css';
import styles from './Spinner.module.css';

/**
 * Індикатор завантаження.
 * @param {{ size?: 'sm' | 'md' | 'lg', label?: string }} props
 */
function Spinner({ size = 'md', label = 'Завантаження' }) {
  return (
    <span className={styles.wrapper} role="status">
      <span className={cx(styles.spinner, styles[size])} aria-hidden="true" />
      <span className={utilities.srOnly}>{label}</span>
    </span>
  );
}

export default Spinner;
