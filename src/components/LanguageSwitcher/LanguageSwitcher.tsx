import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

interface LanguageSwitcherProps {
  className?: string;
}

const languagesOptions = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Español',
    value: 'es',
  },
  {
    name: 'Português',
    value: 'ptBR',
  },
];

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div
      className={twMerge('flex items-center justify-center gap-2', className)}
    >
      <label htmlFor="languageSelect" className="sr-only">
        Select Language
      </label>
      <select
        id="languageSelect"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-none border-none px-2"
      >
        {languagesOptions.map((languageOption) => (
          <option key={languageOption.value} value={languageOption.value}>
            {languageOption.name}
          </option>
        ))}
      </select>
    </div>
  );
}
