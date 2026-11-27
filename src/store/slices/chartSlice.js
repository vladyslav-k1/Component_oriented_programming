import { createSlice } from '@reduxjs/toolkit';
import { CHART_METRICS, CHART_TYPES } from '../../utils/chartData';

const isChartType = (value) => CHART_TYPES.some((option) => option.value === value);
const isChartMetric = (value) => CHART_METRICS.some((option) => option.value === value);

const chartSlice = createSlice({
  name: 'chart',
  initialState: { type: 'bar', metric: 'magnitude' },
  reducers: {
    chartTypeChanged(state, action) {
      if (isChartType(action.payload)) state.type = action.payload;
    },
    chartMetricChanged(state, action) {
      if (isChartMetric(action.payload)) state.metric = action.payload;
    },
  },
});

export const { chartTypeChanged, chartMetricChanged } = chartSlice.actions;
export default chartSlice.reducer;

export const selectChartType = (state) => state.chart.type;
export const selectChartMetric = (state) => state.chart.metric;

export { isChartType, isChartMetric };
