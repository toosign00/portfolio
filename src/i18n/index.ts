import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import jaTranslation from './locales/ja/translation.json';
import koTranslation from './locales/ko/translation.json';

const resources = {
  // 언어별 번역 리소스
  en: {
    translation: enTranslation,
  },
  ko: {
    translation: koTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 기본 언어
  fallbackLng: 'ko', // 기본 언어가 없을 때 사용할 언어
  interpolation: {
    escapeValue: false, // React가 XSS를 방지하므로 비활성화
  },
});

export default i18n;
