import { createSlice } from '@reduxjs/toolkit';

function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: getSystemTheme() },
  reducers: {
    themeChanged(state, action) {
      state.mode = action.payload === 'dark' ? 'dark' : 'light';
    },
  },
});

export const { themeChanged } = themeSlice.actions;
export default themeSlice.reducer;

export const selectThemeMode = (state) => state.theme.mode;
