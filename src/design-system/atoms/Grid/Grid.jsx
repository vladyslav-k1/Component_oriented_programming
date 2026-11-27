import { cx } from '../../utils/cx';
import styles from './Grid.module.css';

/**
 * Адаптивна сітка: стільки колонок, скільки вміщується при мінімальній ширині елемента.
 * @param {{
 *   minItemWidth?: 'sm' | 'md' | 'lg',
 *   gap?: '2' | '3' | '4' | '5',
 *   align?: 'stretch' | 'start',
 *   children: React.ReactNode
 * }} props
 */
function Grid({ minItemWidth = 'md', gap = '4', align = 'stretch', children }) {
  return (
    <div
      className={cx(
        styles.grid,
        styles[`min-${minItemWidth}`],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
      )}
    >
      {children}
    </div>
  );
}

export default Grid;
