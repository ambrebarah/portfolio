import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// La configuration i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      fr: {
        translation: translationFR
      }
    },
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // langue de secours
    interpolation: {
      escapeValue: false // pour réactiver le support de l'échappement XSS
    }
  });

export default i18n;
