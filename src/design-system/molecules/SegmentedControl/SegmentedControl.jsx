import { cx } from '../../utils/cx';
import styles from './SegmentedControl.module.css';

/**
 * Вибір одного варіанта з кількох (контрольований).
 * @param {{
 *   label: string,
 *   options: { value: string, label: string }[],
 *   value: string,
 *   onChange: (value: string) => void
 * }} props
 */
function SegmentedControl({ label, options, value, onChange }) {
  return (
    <div className={styles.segmented} role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cx(styles.option, option.value === value && styles.active)}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;
