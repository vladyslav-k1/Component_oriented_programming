import { useDispatch, useSelector } from 'react-redux';
import TextField from '../form/TextField';
import SelectField from '../form/SelectField';
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

  const handleChange = (field) => (value) => dispatch(filterChanged({ field, value }));

  return (
    <form className="filter-panel" noValidate onSubmit={(event) => event.preventDefault()}>
      <TextField
        id="filter-search"
        label="Пошук за регіоном"
        placeholder="напр. Alaska"
        value={filters.search}
        onChange={handleChange('search')}
      />

      <TextField
        id="filter-min-magnitude"
        label="Мін. магнітуда"
        type="number"
        min="0"
        max="10"
        step="0.1"
        value={filters.minMagnitude}
        onChange={handleChange('minMagnitude')}
        error={minMagnitudeError}
      />

      <SelectField
        id="filter-period"
        label="Період"
        options={PERIOD_OPTIONS}
        value={filters.period}
        onChange={handleChange('period')}
      />

      <SelectField
        id="filter-limit"
        label="Ліміт записів"
        options={LIMIT_OPTIONS}
        value={filters.limit}
        onChange={handleChange('limit')}
      />

      <div className="filter-panel__actions">
        <button
          type="button"
          className="button--secondary"
          onClick={() => dispatch(filtersReset())}
          disabled={!isDirty}
        >
          Скинути фільтри
        </button>
        {isPending && <span className="filter-panel__pending">Застосування фільтрів…</span>}
      </div>
    </form>
  );
}

export default FilterPanel;
