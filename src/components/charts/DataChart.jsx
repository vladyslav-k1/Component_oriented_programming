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

const MARGIN = { top: 8, right: 16, bottom: 8, left: 0 };

function renderCommonParts({ xKey, valueLabel, colors }) {
  return [
    <CartesianGrid key="grid" strokeDasharray="3 3" stroke={colors.grid} />,
    <XAxis
      key="x-axis"
      dataKey={xKey}
      tick={{ fill: colors.text, fontSize: 12 }}
      stroke={colors.grid}
    />,
    <YAxis
      key="y-axis"
      allowDecimals={false}
      tick={{ fill: colors.text, fontSize: 12 }}
      stroke={colors.grid}
    />,
    <Tooltip
      key="tooltip"
      formatter={(value) => [value, valueLabel]}
      contentStyle={{
        background: colors.tooltipBg,
        border: `1px solid ${colors.grid}`,
        color: colors.text,
      }}
      labelStyle={{ color: colors.text }}
    />,
  ];
}

function DataChart({ data, type, xKey, yKey, valueLabel, colors, height = 300 }) {
  const commonParts = renderCommonParts({ xKey, valueLabel, colors });
  const showDots = data.length <= 24;

  let chart;
  if (type === 'line') {
    chart = (
      <LineChart data={data} margin={MARGIN}>
        {commonParts}
        <Line
          type="monotone"
          dataKey={yKey}
          name={valueLabel}
          stroke={colors.primary}
          strokeWidth={2}
          dot={showDots}
        />
      </LineChart>
    );
  } else if (type === 'area') {
    chart = (
      <AreaChart data={data} margin={MARGIN}>
        {commonParts}
        <Area
          type="monotone"
          dataKey={yKey}
          name={valueLabel}
          stroke={colors.primary}
          fill={colors.primary}
          fillOpacity={0.25}
        />
      </AreaChart>
    );
  } else {
    chart = (
      <BarChart data={data} margin={MARGIN}>
        {commonParts}
        <Bar dataKey={yKey} name={valueLabel} fill={colors.primary} radius={[4, 4, 0, 0]} />
      </BarChart>
    );
  }

  return (
    <div className="data-chart" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {chart}
      </ResponsiveContainer>
    </div>
  );
}

export default DataChart;
