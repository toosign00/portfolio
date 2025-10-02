import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
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

i18n
  .use(LanguageDetector) // 언어 감지 플러그인 추가
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko', // 감지된 언어가 지원되지 않을 때 사용할 기본 언어

    // 언어 감지 설정 (URL path 우선, 브라우저 언어 후순위)
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0, // /:lang 형식
    },

    interpolation: {
      escapeValue: false, // React가 XSS를 방지하므로 비활성화
    },
  });

export default i18n;
