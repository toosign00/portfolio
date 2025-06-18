import { ProjectServiceError } from '@/services/projectService';

// 에러 타입 정의
export type AppError = ProjectServiceError | Error;

// 에러 메시지 정규화
export const normalizeErrorMessage = (error: AppError | null | undefined): string => {
  if (!error) return '알 수 없는 오류가 발생했습니다.';

  if (error instanceof ProjectServiceError) {
    return error.message;
  }

  return error.message || '알 수 없는 오류가 발생했습니다.';
};

// 에러가 특정 타입인지 확인
export const isProjectServiceError = (error: unknown): error is ProjectServiceError => {
  return error instanceof ProjectServiceError;
};

// 에러가 404 에러인지 확인
export const isNotFoundError = (error: AppError | null | undefined): boolean => {
  if (!error) return false;

  if (error instanceof ProjectServiceError) {
    return error.code === 'NOT_FOUND';
  }

  return false;
};

// 에러 로깅
export const logError = (context: string, error: AppError | null | undefined): void => {
  if (!error) return;

  console.error(`❌ [${context}] 오류 발생:`, {
    message: error.message,
    name: error.name,
    stack: error.stack,
    ...(error instanceof ProjectServiceError && { code: error.code }),
  });
};
