import styles from './DescriptionList.module.css';

/**
 * Пари «назва — значення».
 * @param {{ items: { label: string, value: React.ReactNode }[] }} props
 */
function DescriptionList({ items }) {
  return (
    <dl className={styles.list}>
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.term}>{item.label}</dt>
          <dd className={styles.description}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default DescriptionList;
