import { FiltersContext } from '../contexts/FiltersContext';
import { useEarthquakeFilters } from '../hooks/useEarthquakeFilters';

function FiltersProvider({ children }) {
  const filters = useEarthquakeFilters();
  return <FiltersContext.Provider value={filters}>{children}</FiltersContext.Provider>;
}

export default FiltersProvider;
