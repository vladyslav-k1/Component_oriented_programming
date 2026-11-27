import { useContext } from 'react';
import { FiltersContext } from '../contexts/FiltersContext';

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters має використовуватися всередині <FiltersProvider>');
  }
  return context;
}
