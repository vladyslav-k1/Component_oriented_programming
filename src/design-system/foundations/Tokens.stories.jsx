import Grid from '../atoms/Grid/Grid';
import Stack from '../atoms/Stack/Stack';
import Text from '../atoms/Text/Text';
import Heading from '../atoms/Heading/Heading';
import styles from './Tokens.module.css';

const COLOR_TOKENS = [
  '--ds-color-bg', '--ds-color-surface', '--ds-color-surface-muted', '--ds-color-text',
  '--ds-color-text-muted', '--ds-color-border', '--ds-color-border-subtle', '--ds-color-primary',
  '--ds-color-primary-subtle', '--ds-color-danger', '--ds-color-danger-subtle', '--ds-color-success',
  '--ds-color-success-subtle', '--ds-color-warning', '--ds-color-warning-subtle', '--ds-color-favorite',
  '--ds-color-chart-1',
];
const SPACE_TOKENS = ['1', '2', '3', '4', '5', '6', '7'];
const RADIUS_TOKENS = ['sm', 'md', 'lg', 'full'];
const FONT_SIZE_TOKENS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

function TokensOverview() {
  return (
    <Stack gap="6">
      <Stack gap="3">
        <Heading level={2}>Кольори (семантичні)</Heading>
        <Grid minItemWidth="sm" gap="3">
          {COLOR_TOKENS.map((token) => (
            <Stack key={token} gap="2">
              <div className={styles.swatch} style={{ background: `var(${token})` }} />
              <Text size="xs">{token}</Text>
            </Stack>
          ))}
        </Grid>
      </Stack>

      <Stack gap="3">
        <Heading level={2}>Відступи</Heading>
        {SPACE_TOKENS.map((step) => (
          <Stack key={step} direction="row" gap="3" align="center">
            <Text size="xs">--ds-space-{step}</Text>
            <div className={styles.spaceBar} style={{ width: `var(--ds-space-${step})` }} />
          </Stack>
        ))}
      </Stack>

      <Stack gap="3">
        <Heading level={2}>Радіуси</Heading>
        <Stack direction="row" gap="4" wrap>
          {RADIUS_TOKENS.map((radius) => (
            <Stack key={radius} gap="2" align="center">
              <div className={styles.radiusBox} style={{ borderRadius: `var(--ds-radius-${radius})` }} />
              <Text size="xs">--ds-radius-{radius}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="3">
        <Heading level={2}>Типографіка</Heading>
        {FONT_SIZE_TOKENS.map((size) => (
          <p key={size} className={styles.typeSample} style={{ fontSize: `var(--ds-font-size-${size})` }}>
            --ds-font-size-{size} — Землетрус / Earthquake
          </p>
        ))}
      </Stack>
    </Stack>
  );
}

export default {
  title: 'Foundations/Tokens',
  component: TokensOverview,
  parameters: { layout: 'padded' },
};

export const Overview = {};
