import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../store/slices/themeSlice';

export function useDocumentTheme() {
  const mode = useSelector(selectThemeMode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);
}
