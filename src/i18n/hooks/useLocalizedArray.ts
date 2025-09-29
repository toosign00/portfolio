import { useTranslation } from 'react-i18next';

type LocaleKey = 'ko' | 'en' | 'ja';

// 다국어 배열(description 등)을 현재 언어에 맞춰 반환
export const useLocalizedArray = () => {
  const { i18n } = useTranslation();

  return <T extends string | string[]>(map: { ko: T; en?: T; ja?: T }): T => {
    const resolved = i18n.resolvedLanguage || i18n.language || 'ko';
    const base = (resolved.split('-')[0] as LocaleKey) || 'ko';
    return (map[base] ?? map.ko) as T;
  };
};
