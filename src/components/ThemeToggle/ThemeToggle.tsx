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
      className="transition-all duration-200 hover:opacity-50"
    >
      {isDarkMode ? (
        <Sun size={32} weight="light" className="text-yellow-300" />
      ) : (
        <Moon size={32} weight="light" className="text-neutral-500" />
      )}
    </button>
  );
}
