import { Moon, Sun } from '@phosphor-icons/react';
import { Theme } from '../../hook/localStorage/Theme';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = Theme();

  return (
    <button
      type="button"
      aria-label="Change app theme"
      data-testid="changeSwitchTheme"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun size={32} weight="bold" className="text-yellow-400" />
      ) : (
        <Moon size={32} weight="bold" className="text-black" />
      )}
    </button>
  );
}
