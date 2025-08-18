import { ProjectServiceError } from '@/services/projectService';

// 에러 메시지 정규화
export const normalizeErrorMessage = (
  error: ProjectServiceError | Error | null | undefined
): string => {
  if (!error) return '알 수 없는 오류가 발생했습니다.';

  if (error instanceof ProjectServiceError) {
    return error.message;
  }

  return error.message || '알 수 없는 오류가 발생했습니다.';
};

// 에러가 404 에러인지 확인
export const isNotFoundError = (error: ProjectServiceError | Error | null | undefined): boolean => {
  if (!error) return false;

  if (error instanceof ProjectServiceError) {
    return error.code === 'NOT_FOUND';
  }

  return false;
};
