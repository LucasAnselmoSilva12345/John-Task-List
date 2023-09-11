import { useTranslation } from 'react-i18next';

const languagesOptions = [
  {
    name: 'Português',
    value: 'ptBR',
  },
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Español',
    value: 'es',
  },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      {languagesOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <span
            style={{
              fontWeight:
                i18n.language === languageOption.value ? 'bold' : 'normal',
              textDecoration:
                i18n.language === languageOption.value ? 'underline' : 'none',
            }}
          >
            {languageOption.name}
          </span>
        </button>
      ))}
    </div>
  );
}
