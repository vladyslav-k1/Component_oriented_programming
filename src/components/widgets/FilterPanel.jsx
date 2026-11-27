import { Controller } from 'react-hook-form';
import TextField from '../form/TextField';
import SelectField from '../form/SelectField';
import { LIMIT_OPTIONS, PERIOD_OPTIONS, validateMinMagnitude } from '../../utils/filters';

function FilterPanel({ control, errors, isDirty, isPending, onReset }) {
  return (
    <form className="filter-panel" noValidate onSubmit={(event) => event.preventDefault()}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            id="filter-search"
            label="Пошук за регіоном"
            placeholder="напр. Alaska"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="minMagnitude"
        control={control}
        rules={{ validate: validateMinMagnitude }}
        render={({ field }) => (
          <TextField
            id="filter-min-magnitude"
            label="Мін. магнітуда"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={field.value}
            onChange={field.onChange}
            error={errors.minMagnitude?.message}
          />
        )}
      />

      <Controller
        name="period"
        control={control}
        render={({ field }) => (
          <SelectField
            id="filter-period"
            label="Період"
            options={PERIOD_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="limit"
        control={control}
        render={({ field }) => (
          <SelectField
            id="filter-limit"
            label="Ліміт записів"
            options={LIMIT_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <div className="filter-panel__actions">
        <button type="button" className="button--secondary" onClick={onReset} disabled={!isDirty}>
          Скинути фільтри
        </button>
        {isPending && <span className="filter-panel__pending">Застосування фільтрів…</span>}
      </div>
    </form>
  );
}

export default FilterPanel;
