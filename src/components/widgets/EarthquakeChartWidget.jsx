import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataChart, SegmentedControl, Stack } from '../../design-system';
import {
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

function EarthquakeChartWidget({ events, timeRange }) {
  const dispatch = useDispatch();
  const chartType = useSelector(selectChartType);
  const metric = useSelector(selectChartMetric);

  const data = useMemo(
    () =>
      metric === 'magnitude'
        ? buildMagnitudeDistribution(events)
        : buildTimeSeries(events, timeRange),
    [metric, events, timeRange],
  );

  return (
    <Stack gap="3">
      <Stack direction="row" justify="between" gap="3" wrap>
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
      </Stack>
      <DataChart data={data} type={chartType} xKey="label" yKey="count" valueLabel="Кількість подій" height="md" />
    </Stack>
  );
}

export default EarthquakeChartWidget;
