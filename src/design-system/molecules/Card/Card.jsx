import Heading from '../../atoms/Heading/Heading';
import styles from './Card.module.css';

/**
 * Поверхня-контейнер з необов'язковим заголовком і діями.
 * @param {{
 *   title?: React.ReactNode,
 *   actions?: React.ReactNode,
 *   as?: 'section' | 'article' | 'div',
 *   children: React.ReactNode
 * }} props
 */
function Card({ title, actions, as: Component = 'section', children }) {
  return (
    <Component className={styles.card}>
      {(title || actions) && (
        <header className={styles.header}>
          {title && <Heading level={2} size="lg">{title}</Heading>}
          {actions}
        </header>
      )}
      <div className={styles.body}>{children}</div>
    </Component>
  );
}

export default Card;
