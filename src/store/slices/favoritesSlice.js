import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const favoritesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.addedAt - a.addedAt,
});

function toFavorite(event) {
  return {
    id: event.id,
    mag: event.properties.mag,
    place: event.properties.place,
    time: event.properties.time,
    addedAt: Date.now(),
  };
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesAdapter.getInitialState(),
  reducers: {
    favoriteAdded: {
      reducer: favoritesAdapter.addOne,
      prepare: (event) => ({ payload: toFavorite(event) }),
    },
    favoriteRemoved: favoritesAdapter.removeOne,
    favoritesCleared: favoritesAdapter.removeAll,
  },
});

export const { favoriteAdded, favoriteRemoved, favoritesCleared } = favoritesSlice.actions;
export default favoritesSlice.reducer;

const adapterSelectors = favoritesAdapter.getSelectors((state) => state.favorites);

export const selectAllFavorites = adapterSelectors.selectAll;
export const selectFavoritesCount = adapterSelectors.selectTotal;
export const selectIsFavorite = (state, id) => Boolean(adapterSelectors.selectById(state, id));
