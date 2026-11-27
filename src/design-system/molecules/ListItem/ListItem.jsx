import { cx } from '../../utils/cx';
import styles from './ListItem.module.css';

/**
 * Елемент списку. Клікабельний, якщо є onClick (кнопка) або as (напр. Link з роутера).
 * trailing — дія праворуч поза клікабельною зоною.
 * @param {{
 *   title: React.ReactNode,
 *   description?: React.ReactNode,
 *   meta?: React.ReactNode,
 *   trailing?: React.ReactNode,
 *   selected?: boolean,
 *   as?: React.ElementType,
 *   onClick?: () => void
 * }} props
 */
function ListItem({ title, description, meta, trailing, selected = false, as, onClick, ...rest }) {
  const Component = as ?? (onClick ? 'button' : 'div');
  const isInteractive = Boolean(as || onClick);

  return (
    <li className={cx(styles.item, selected && styles.selected)}>
      <Component
        className={cx(styles.main, isInteractive && styles.interactive)}
        type={Component === 'button' ? 'button' : undefined}
        aria-current={selected || undefined}
        onClick={onClick}
        {...rest}
      >
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
        {meta && <span className={styles.meta}>{meta}</span>}
      </Component>
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </li>
  );
}

export default ListItem;
