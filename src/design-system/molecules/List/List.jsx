import { cx } from '../../utils/cx';
import styles from './List.module.css';

/**
 * Контейнер для ListItem. maxHeight вмикає прокрутку.
 * @param {{ maxHeight?: 'sm' | 'md' | 'lg', children: React.ReactNode }} props
 */
function List({ maxHeight, children }) {
  return (
    <ul className={cx(styles.list, maxHeight && styles[`height-${maxHeight}`])}>{children}</ul>
  );
}

export default List;
