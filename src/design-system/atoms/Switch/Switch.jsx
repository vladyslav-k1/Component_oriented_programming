import { cx } from '../../utils/cx';
import styles from './Switch.module.css';

/**
 * Перемикач між двома станами (контрольований).
 * @param {{
 *   checked: boolean,
 *   onChange: (checked: boolean) => void,
 *   label: string,
 *   offLabel?: string,
 *   onLabel?: string,
 *   disabled?: boolean
 * }} props
 */
function Switch({ checked, onChange, label, offLabel, onLabel, disabled = false }) {
  return (
    <span className={styles.switch}>
      {offLabel && <span className={cx(!checked && styles.labelActive)}>{offLabel}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        className={cx(styles.track, checked && styles.trackOn)}
        onClick={() => onChange(!checked)}
      >
        <span className={styles.thumb} />
      </button>
      {onLabel && <span className={cx(checked && styles.labelActive)}>{onLabel}</span>}
    </span>
  );
}

export default Switch;
