import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import favoritesReducer from './slices/favoritesSlice';
import themeReducer from './slices/themeSlice';
import chartReducer from './slices/chartSlice';
import { loadPersistedState, savePersistedState } from './persistence';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
    chart: chartReducer,
  },
  preloadedState: loadPersistedState(),
});

let lastSaved = null;

store.subscribe(() => {
  const { theme, favorites, chart } = store.getState();

  if (
    lastSaved &&
    lastSaved.theme === theme &&
    lastSaved.favorites === favorites &&
    lastSaved.chart === chart
  ) {
    return;
  }

  lastSaved = { theme, favorites, chart };
  savePersistedState(lastSaved);
});
