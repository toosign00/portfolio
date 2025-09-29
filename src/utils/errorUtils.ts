import i18n from '@/i18n';
import { ProjectServiceError } from '@/services/projectService';

// 에러 메시지 정규화
export const normalizeErrorMessage = (
  error: ProjectServiceError | Error | null | undefined
): string => {
  const t = i18n.t.bind(i18n);

  if (!error) return t('common.unknownError');

  // 1) 도메인 에러 우선 처리
  if (error instanceof ProjectServiceError) {
    switch (error.code) {
      case 'NOT_FOUND':
        return t('projectModals.notFound');
      default:
        return error.message || t('common.unknownError');
    }
  }

  // 2) 네트워크/플랫폼 공통 처리
  if (typeof window !== 'undefined') {
    if (!navigator.onLine) {
      return t('common.error');
    }
  }

  if (error instanceof Error) {
    if (error.name === 'AbortError') {
      return t('common.error');
    }
    const lower = error.message?.toLowerCase?.() ?? '';
    if (lower.includes('timeout')) {
      return t('common.error');
    }
    if (lower.includes('failed to fetch')) {
      return t('common.error');
    }
    return error.message || t('common.unknownError');
  }

  // 3) 알 수 없음
  return t('common.unknownError');
};

// 에러가 404 에러인지 확인
export const isNotFoundError = (error: ProjectServiceError | Error | null | undefined): boolean => {
  if (!error) return false;

  if (error instanceof ProjectServiceError) {
    return error.code === 'NOT_FOUND';
  }

  return false;
};
