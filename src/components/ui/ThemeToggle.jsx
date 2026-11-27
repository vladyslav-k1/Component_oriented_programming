import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '../../design-system';
import { selectThemeMode, themeChanged } from '../../store/slices/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);

  return (
    <Switch
      label="Тема оформлення"
      checked={mode === 'dark'}
      onChange={(isDark) => dispatch(themeChanged(isDark ? 'dark' : 'light'))}
      offLabel="Світла"
      onLabel="Темна"
    />
  );
}

export default ThemeToggle;
