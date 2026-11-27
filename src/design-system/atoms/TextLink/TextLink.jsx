import { cx } from '../../utils/cx';
import styles from './TextLink.module.css';

/**
 * Посилання. as — будь-який компонент-посилання (напр. Link з react-router), за замовчуванням <a>.
 * Інші props (href, to, target, rel, end) передаються далі.
 * @param {{
 *   as?: React.ElementType,
 *   tone?: 'primary' | 'default',
 *   weight?: 'medium' | 'bold',
 *   children: React.ReactNode
 * }} props
 */
function TextLink({ as: Component = 'a', tone = 'primary', weight = 'medium', children, ...rest }) {
  return (
    <Component
      className={cx(styles.link, styles[`tone-${tone}`], styles[`weight-${weight}`])}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default TextLink;
