import { useDispatch, useSelector } from 'react-redux';
import Toggle from './Toggle';
import { selectThemeMode, themeChanged } from '../../store/slices/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);

  return (
    <Toggle
      checked={mode === 'dark'}
      onChange={(isDark) => dispatch(themeChanged(isDark ? 'dark' : 'light'))}
      offLabel="Світла"
      onLabel="Темна"
    />
  );
}

export default ThemeToggle;
