import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from './translations/en.json';
import esJSON from './translations/es.json';
import ptBRJSON from './translations/ptBR.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJSON,
    es: esJSON,
    ptBR: ptBRJSON,
  },
});

export default i18n;
