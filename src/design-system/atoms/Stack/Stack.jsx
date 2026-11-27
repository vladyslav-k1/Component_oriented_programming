import { cx } from '../../utils/cx';
import styles from './Stack.module.css';

/**
 * Розміщення елементів у рядок/стовпець з відступом за токенами.
 * @param {{
 *   as?: React.ElementType,
 *   direction?: 'column' | 'row',
 *   gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7',
 *   align?: 'stretch' | 'start' | 'center' | 'end' | 'baseline',
 *   justify?: 'start' | 'center' | 'end' | 'between',
 *   wrap?: boolean,
 *   children: React.ReactNode
 * }} props
 */
function Stack({
  as: Component = 'div',
  direction = 'column',
  gap = '4',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
}) {
  return (
    <Component
      className={cx(
        styles.stack,
        styles[`direction-${direction}`],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        wrap && styles.wrap,
      )}
    >
      {children}
    </Component>
  );
}

export default Stack;
