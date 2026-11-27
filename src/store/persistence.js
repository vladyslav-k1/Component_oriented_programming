import { readStorage, writeStorage } from '../utils/storage';
import { isChartMetric, isChartType } from './slices/chartSlice';

const STORAGE_KEY = 'earthquake-dashboard-state';

function sanitize(saved) {
  const state = {};

  if (saved?.theme?.mode === 'light' || saved?.theme?.mode === 'dark') {
    state.theme = { mode: saved.theme.mode };
  }

  const favorites = saved?.favorites;
  if (Array.isArray(favorites?.ids) && favorites.entities && typeof favorites.entities === 'object') {
    state.favorites = { ids: favorites.ids, entities: favorites.entities };
  }

  if (isChartType(saved?.chart?.type) && isChartMetric(saved?.chart?.metric)) {
    state.chart = { type: saved.chart.type, metric: saved.chart.metric };
  }

  return state;
}

export function loadPersistedState() {
  const raw = readStorage(STORAGE_KEY);
  if (!raw) return undefined;

  try {
    return sanitize(JSON.parse(raw));
  } catch {
    return undefined;
  }
}

export function savePersistedState({ theme, favorites, chart }) {
  writeStorage(STORAGE_KEY, JSON.stringify({ theme, favorites, chart }));
}
