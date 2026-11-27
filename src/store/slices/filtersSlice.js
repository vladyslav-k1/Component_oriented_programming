import { createSelector, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FILTERS, toQueryParams, validateMinMagnitude } from '../../utils/filters';

const FILTER_FIELDS = Object.keys(DEFAULT_FILTERS);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    ...DEFAULT_FILTERS,
    referenceTime: Date.now(),
  },
  reducers: {
    filterChanged(state, action) {
      const { field, value } = action.payload;
      if (FILTER_FIELDS.includes(field)) {
        state[field] = value;
      }
    },
    filtersReset(state) {
      Object.assign(state, DEFAULT_FILTERS);
    },
  },
});

export const { filterChanged, filtersReset } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectFilters = (state) => state.filters;
export const selectSearch = (state) => state.filters.search;
export const selectReferenceTime = (state) => state.filters.referenceTime;

export const selectMinMagnitudeError = (state) => {
  const result = validateMinMagnitude(state.filters.minMagnitude);
  return result === true ? null : result;
};

export const selectAreFiltersDirty = (state) =>
  FILTER_FIELDS.some((field) => state.filters[field] !== DEFAULT_FILTERS[field]);

export const selectQueryParams = createSelector(
  [
    (state) => state.filters.period,
    (state) => state.filters.minMagnitude,
    (state) => state.filters.limit,
  ],
  (period, minMagnitude, limit) => toQueryParams({ period, minMagnitude, limit }),
);
