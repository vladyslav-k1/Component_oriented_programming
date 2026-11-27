import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cx } from '../../utils/cx';
import styles from './DataChart.module.css';

const SERIES_COLOR = 'var(--ds-color-chart-1)';
const GRID_COLOR = 'var(--ds-color-chart-grid)';
const AXIS_COLOR = 'var(--ds-color-chart-axis)';

const TOOLTIP_STYLE = {
  background: 'var(--ds-color-surface)',
  border: 'var(--ds-border-width) solid var(--ds-color-border)',
  borderRadius: 'var(--ds-radius-md)',
  color: 'var(--ds-color-text)',
};

const TOOLTIP_LABEL_STYLE = { color: 'var(--ds-color-text)' };

function renderCommonParts(xKey, valueLabel) {
  return [
    <CartesianGrid key="grid" strokeDasharray="3 3" stroke={GRID_COLOR} />,
    <XAxis key="x-axis" dataKey={xKey} tick={{ fill: AXIS_COLOR }} stroke={GRID_COLOR} />,
    <YAxis key="y-axis" allowDecimals={false} tick={{ fill: AXIS_COLOR }} stroke={GRID_COLOR} />,
    <Tooltip
      key="tooltip"
      formatter={(value) => [value, valueLabel]}
      contentStyle={TOOLTIP_STYLE}
      labelStyle={TOOLTIP_LABEL_STYLE}
    />,
  ];
}

/**
 * Графік одного ряду даних. Тип — через prop type.
 * @param {{
 *   data: object[],
 *   type?: 'bar' | 'line' | 'area',
 *   xKey: string,
 *   yKey: string,
 *   valueLabel: string,
 *   height?: 'sm' | 'md' | 'lg'
 * }} props
 */
function DataChart({ data, type = 'bar', xKey, yKey, valueLabel, height = 'md' }) {
  const commonParts = renderCommonParts(xKey, valueLabel);
  const showDots = data.length <= 24;

  let chart;
  if (type === 'line') {
    chart = (
      <LineChart data={data}>
        {commonParts}
        <Line type="monotone" dataKey={yKey} name={valueLabel} stroke={SERIES_COLOR} strokeWidth={2} dot={showDots} />
      </LineChart>
    );
  } else if (type === 'area') {
    chart = (
      <AreaChart data={data}>
        {commonParts}
        <Area type="monotone" dataKey={yKey} name={valueLabel} stroke={SERIES_COLOR} fill={SERIES_COLOR} fillOpacity={0.25} />
      </AreaChart>
    );
  } else {
    chart = (
      <BarChart data={data}>
        {commonParts}
        <Bar dataKey={yKey} name={valueLabel} fill={SERIES_COLOR} />
      </BarChart>
    );
  }

  return (
    <div className={cx(styles.chart, styles[`height-${height}`])}>
      <ResponsiveContainer width="100%" height="100%">
        {chart}
      </ResponsiveContainer>
    </div>
  );
}

export default DataChart;
