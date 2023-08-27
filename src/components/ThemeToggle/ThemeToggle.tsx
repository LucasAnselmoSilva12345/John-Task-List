import { useEffect, useState } from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

export function ThemeToggle() {
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(savedTheme === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <button data-testid="changeSwitchTheme" onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun size={20} weight="bold" className="text-yellow-400" />
      ) : (
        <Moon size={20} weight="bold" className="text-black" />
      )}
    </button>
  );
}
