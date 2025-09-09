import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys.constants';
import { createGuestbookEntry, fetchGuestbookEntries } from '@/services/guestbookService';

// 방명록 API 재시도 설정
const MAX_RETRY_COUNT = 3;
const RETRY_DELAY_BASE = 1000;
const MAX_RETRY_DELAY = 30000;

// 방명록 목록 조회
export const useGuestbookEntries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GUESTBOOK.ALL,
    queryFn: fetchGuestbookEntries,
    // 오류 발생 시 최대 횟수까지 재시도
    retry: (failureCount) => failureCount < MAX_RETRY_COUNT,
    retryDelay: (attemptIndex) => Math.min(RETRY_DELAY_BASE * 2 ** attemptIndex, MAX_RETRY_DELAY), // 지수 백오프
  });
};

// 방명록 작성
export const useCreateGuestbookEntry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGuestbookEntry,
    onSuccess: () => {
      // 성공 시 방명록 목록 새로고침
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.GUESTBOOK.ALL });
    },
    onError: (error) => {
      console.error('방명록 작성 실패:', error);
    },
  });
};
