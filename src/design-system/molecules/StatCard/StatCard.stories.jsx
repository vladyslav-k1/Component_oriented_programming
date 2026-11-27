import StatCard from './StatCard';
import Grid from '../../atoms/Grid/Grid';

export default {
  title: 'Molecules/StatCard',
  component: StatCard,
  args: {
    label: 'Замовлень',
    value: 128,
    delta: '+0.0%',
    deltaLabel: 'за тиждень',
    deltaTone: 'neutral',
  },
  argTypes: {
    deltaTone: { control: 'inline-radio', options: ['neutral', 'success', 'danger'] },
  },
};

export const Neutral = { args: { delta: '0.0%' } };

export const PositiveDelta = { args: { delta: '+12.5%', deltaTone: 'success' } };

export const NegativeDelta = { args: { delta: '-4.2%', deltaTone: 'danger' } };

export const WithoutDelta = { args: { delta: undefined, deltaLabel: undefined } };

export const Grid3 = {
  name: 'Grid',
  render: () => (
    <Grid minItemWidth="sm" gap="4">
      <StatCard label="Продукт A" value="1 250" unit="шт" delta="+8.1%" deltaLabel="за місяць" deltaTone="success" />
      <StatCard label="Продукт B" value="74.5" unit="%" delta="-2.3%" deltaLabel="за місяць" deltaTone="danger" />
      <StatCard label="Продукт C" value="312" delta="0.0%" deltaLabel="за місяць" />
    </Grid>
  ),
};
