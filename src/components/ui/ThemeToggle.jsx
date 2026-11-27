import Toggle from './Toggle';
import { useTheme } from '../../hooks/useTheme';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      checked={theme === 'dark'}
      onChange={(isDark) => setTheme(isDark ? 'dark' : 'light')}
      offLabel="Світла"
      onLabel="Темна"
    />
  );
}

export default ThemeToggle;
