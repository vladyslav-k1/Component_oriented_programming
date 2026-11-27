import Card from '../Card/Card';
import Text from '../../atoms/Text/Text';
import styles from './StatCard.module.css';

const DELTA_TONE_TO_TEXT = { neutral: 'muted', success: 'success', danger: 'danger' };

/**
 * Картка одного показника (KPI).
 * @param {{
 *   label: string,
 *   value: React.ReactNode,
 *   unit?: string,
 *   delta?: string,
 *   deltaLabel?: string,
 *   deltaTone?: 'neutral' | 'success' | 'danger'
 * }} props
 */
function StatCard({ label, value, unit, delta, deltaLabel, deltaTone = 'neutral' }) {
  return (
    <Card as="article">
      <Text size="sm" tone="muted" weight="medium">{label}</Text>
      <p className={styles.value}>
        {value}
        {unit && <span className={styles.unit}>{unit}</span>}
      </p>
      {delta && (
        <Text size="sm" tone={DELTA_TONE_TO_TEXT[deltaTone]}>
          {deltaLabel ? `${delta} ${deltaLabel}` : delta}
        </Text>
      )}
    </Card>
  );
}

export default StatCard;
