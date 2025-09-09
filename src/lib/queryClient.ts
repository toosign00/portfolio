import { QueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys.constants';

// React Query 클라이언트 설정
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10분
      gcTime: 60 * 60 * 1000, // 1시간
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

// 방명록 데이터는 실시간 업데이트
queryClient.setQueryDefaults(QUERY_KEYS.GUESTBOOK.ALL, {
  staleTime: 0, // 즉시 stale 처리
  refetchOnMount: 'always', // 컴포넌트 마운트 시 매번 리패치
});

// 무한 스크롤 방명록도 실시간 업데이트
queryClient.setQueryDefaults([...QUERY_KEYS.GUESTBOOK.ALL, 'infinite'], {
  staleTime: 0,
  refetchOnMount: 'always',
});
