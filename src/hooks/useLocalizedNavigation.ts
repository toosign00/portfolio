import { useTranslation } from 'react-i18next';
import type { NavigateOptions } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// navigate 함수 대체용
export function useLocalizedNavigate() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (path: string, options?: NavigateOptions) => {
    const lang = i18n.language;
    // 한국어면 그냥 path, 아니면 /{lang}/path
    if (lang === 'ko') {
      void navigate(path, options);
      return;
    }

    const normalizedPath = path === '/' ? '' : path;
    const localizedPath = `/${lang}${normalizedPath}`;
    void navigate(localizedPath, options);
  };
}

// Link의 to '/' 대체용
export function useLocalizedPath(path: string) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (lang === 'ko') return path;

  const normalizedPath = path === '/' ? '' : path;
  return `/${lang}${normalizedPath}`;
}
