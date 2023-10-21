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

  return (
    <div
      className={twMerge('flex items-center justify-center gap-2', className)}
    >
      {languagesOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
          className="bg-none border-none px-2"
        >
          <span
            style={{
              fontWeight:
                i18n.language === languageOption.value ? 'bold' : 'normal',
              textDecoration:
                i18n.language === languageOption.value ? 'underline' : 'none',
            }}
            className="text-violet-400 transition-all duration-200 hover:opacity-50"
          >
            {languageOption.name}
          </span>
        </button>
      ))}
    </div>
  );
}
