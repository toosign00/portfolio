import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

// React Query 클라이언트 설정
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 60 * 1000, // 3시간
      gcTime: 4 * 60 * 60 * 1000,    // 4시간
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
        refetchOnMount: false, // 마운트 시 자동 refetch 방지
    },
    mutations: {
      retry: 1,
    },
  },
});

// localStorage persister 설정
const localStoragePersister = createAsyncStoragePersister({
  storage: window.localStorage,
  key: 'portfolio-query-cache',
});

// 쿼리 클라이언트 persistence 설정
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 24 * 60 * 60 * 1000, // 24시간
  buster: 'v1', // 캐시 버전 (스키마 변경 시 업데이트!!)
});

// 쿼리 키 상수 정의
export const QUERY_KEYS = {
  PROJECTS: {
    ALL: ['projects'] as const,
    DETAIL: (id: string) => ['project', id] as const,
  },
} as const;
