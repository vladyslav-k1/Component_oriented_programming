import { cx } from '../../utils/cx';
import styles from './Heading.module.css';

const SIZE_BY_LEVEL = { 1: '2xl', 2: 'lg', 3: 'md', 4: 'sm' };

/**
 * Заголовок. level — семантика (h1–h4), size — візуальний розмір.
 * @param {{
 *   level?: 1 | 2 | 3 | 4,
 *   size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
 *   children: React.ReactNode
 * }} props
 */
function Heading({ level = 2, size, children }) {
  const Tag = `h${level}`;
  return (
    <Tag className={cx(styles.heading, styles[`size-${size ?? SIZE_BY_LEVEL[level]}`])}>
      {children}
    </Tag>
  );
}

export default Heading;
