import styles from './FormField.module.css';

/**
 * Підпис + контрол (через children) + помилка/підказка.
 * @param {{
 *   label: string,
 *   htmlFor: string,
 *   error?: string | null,
 *   hint?: string,
 *   children: React.ReactNode
 * }} props
 */
function FormField({ label, htmlFor, error, hint, children }) {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      {children}
      {error && <span className={styles.error} role="alert">{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

export default FormField;
