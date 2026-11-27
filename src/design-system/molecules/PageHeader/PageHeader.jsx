import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import styles from './PageHeader.module.css';

/**
 * Заголовок сторінки.
 * @param {{ title: React.ReactNode, subtitle?: React.ReactNode, actions?: React.ReactNode }} props
 */
function PageHeader({ title, subtitle, actions }) {
  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <Heading level={1}>{title}</Heading>
        {subtitle && <Text tone="muted">{subtitle}</Text>}
      </div>
      {actions}
    </header>
  );
}

export default PageHeader;
