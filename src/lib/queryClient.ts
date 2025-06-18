import { QueryClient } from '@tanstack/react-query';

// React Query 클라이언트 설정
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분 (프로젝트 목록)
      gcTime: 10 * 60 * 1000, // 10분 (가비지 컬렉션)
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
    },
  },
});

// 쿼리 키 상수 정의
export const QUERY_KEYS = {
  PROJECTS: {
    ALL: ['projects'] as const,
    DETAIL: (id: string) => ['project', id] as const,
  },
} as const;
