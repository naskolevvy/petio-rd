import bgCommon from '@/public/locales/bg/common.json';
import enCommon from '@/public/locales/en/common.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Default to Bulgarian
const defaultLanguage = 'bg';

// Only initialize i18next on the client side
if (typeof window !== 'undefined') {
  // Get initial language from localStorage or default to Bulgarian
  const initialLanguage = localStorage.getItem('language') || defaultLanguage;

  i18next
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enCommon,
        },
        bg: {
          common: bgCommon,
        },
      },
      lng: initialLanguage,
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
    });
}

export const changeLanguage = (lang: string) => {
  i18next.changeLanguage(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

export default i18next; 