import { useDispatch, useSelector } from 'react-redux';
import { Button, FilterBar, FormField, Input, Select, Text } from '../../design-system';
import { LIMIT_OPTIONS, PERIOD_OPTIONS } from '../../utils/filters';
import {
  filterChanged,
  filtersReset,
  selectAreFiltersDirty,
  selectFilters,
  selectMinMagnitudeError,
} from '../../store/slices/filtersSlice';

function FilterPanel({ isPending }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const minMagnitudeError = useSelector(selectMinMagnitudeError);
  const isDirty = useSelector(selectAreFiltersDirty);

  const handleChange = (field) => (event) =>
    dispatch(filterChanged({ field, value: event.target.value }));

  return (
    <FilterBar
      actions={
        <Button variant="secondary" onClick={() => dispatch(filtersReset())} disabled={!isDirty}>
          Скинути фільтри
        </Button>
      }
      status={isPending && <Text size="sm" tone="muted">Застосування фільтрів…</Text>}
    >
      <FormField label="Пошук за регіоном" htmlFor="filter-search">
        <Input
          id="filter-search"
          placeholder="напр. Alaska"
          value={filters.search}
          onChange={handleChange('search')}
        />
      </FormField>

      <FormField label="Мін. магнітуда" htmlFor="filter-min-magnitude" error={minMagnitudeError}>
        <Input
          id="filter-min-magnitude"
          type="number"
          min="0"
          max="10"
          step="0.1"
          invalid={Boolean(minMagnitudeError)}
          value={filters.minMagnitude}
          onChange={handleChange('minMagnitude')}
        />
      </FormField>

      <FormField label="Період" htmlFor="filter-period">
        <Select
          id="filter-period"
          options={PERIOD_OPTIONS}
          value={filters.period}
          onChange={handleChange('period')}
        />
      </FormField>

      <FormField label="Ліміт записів" htmlFor="filter-limit">
        <Select
          id="filter-limit"
          options={LIMIT_OPTIONS}
          value={filters.limit}
          onChange={handleChange('limit')}
        />
      </FormField>
    </FilterBar>
  );
}

export default FilterPanel;
