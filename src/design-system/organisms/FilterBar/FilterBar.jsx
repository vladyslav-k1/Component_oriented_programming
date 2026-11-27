import Grid from '../../atoms/Grid/Grid';
import Stack from '../../atoms/Stack/Stack';

/**
 * Панель фільтрів: поля в адаптивній сітці + рядок дій.
 * @param {{
 *   children: React.ReactNode,
 *   actions?: React.ReactNode,
 *   status?: React.ReactNode,
 *   onSubmit?: () => void
 * }} props
 */
function FilterBar({ children, actions, status, onSubmit }) {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <Stack gap="3">
        <Grid minItemWidth="sm" gap="4" align="start">
          {children}
        </Grid>
        {(actions || status) && (
          <Stack direction="row" gap="3" align="center" wrap>
            {actions}
            {status}
          </Stack>
        )}
      </Stack>
    </form>
  );
}

export default FilterBar;
