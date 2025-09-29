import { useTranslation } from 'react-i18next';
import type { MultiLanguageText } from '@/types/projects.types';

// 다국어 텍스트를 현재 언어에 맞게 반환하는 커스텀 훅
export const useLocalizedText = () => {
  const { i18n } = useTranslation();

  return (text: MultiLanguageText | string): string => {
    // string 타입은 그대로 반환 (하위 호환성)
    if (typeof text === 'string') return text;

    // 현재 언어로 텍스트 반환, 없으면 한국어로 fallback
    const resolved = i18n.resolvedLanguage || i18n.language;
    const baseLang = (resolved.split('-')[0] as keyof MultiLanguageText) || 'ko';
    return text[baseLang] || text.ko;
  };
};
