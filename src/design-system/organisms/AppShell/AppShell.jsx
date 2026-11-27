import styles from './AppShell.module.css';

/**
 * Каркас застосунку: шапка (бренд + дії) і основний вміст.
 * @param {{ brand: React.ReactNode, actions?: React.ReactNode, children: React.ReactNode }} props
 */
function AppShell({ brand, actions, children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>{brand}</div>
        {actions}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default AppShell;
