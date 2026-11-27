import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataChart from '../charts/DataChart';
import SegmentedControl from '../ui/SegmentedControl';
import {
  CHART_COLORS,
  CHART_METRICS,
  CHART_TYPES,
  buildMagnitudeDistribution,
  buildTimeSeries,
} from '../../utils/chartData';
import {
  chartMetricChanged,
  chartTypeChanged,
  selectChartMetric,
  selectChartType,
} from '../../store/slices/chartSlice';
import { selectThemeMode } from '../../store/slices/themeSlice';

function EarthquakeChartWidget({ events, timeRange }) {
  const dispatch = useDispatch();
  const chartType = useSelector(selectChartType);
  const metric = useSelector(selectChartMetric);
  const themeMode = useSelector(selectThemeMode);

  const data = useMemo(
    () =>
      metric === 'magnitude'
        ? buildMagnitudeDistribution(events)
        : buildTimeSeries(events, timeRange),
    [metric, events, timeRange],
  );

  return (
    <div className="chart-widget">
      <div className="chart-widget__controls">
        <SegmentedControl
          label="Метрика графіка"
          options={CHART_METRICS}
          value={metric}
          onChange={(value) => dispatch(chartMetricChanged(value))}
        />
        <SegmentedControl
          label="Тип графіка"
          options={CHART_TYPES}
          value={chartType}
          onChange={(value) => dispatch(chartTypeChanged(value))}
        />
      </div>

      <DataChart
        data={data}
        type={chartType}
        xKey="label"
        yKey="count"
        valueLabel="Кількість подій"
        colors={CHART_COLORS[themeMode]}
      />
    </div>
  );
}

export default EarthquakeChartWidget;
