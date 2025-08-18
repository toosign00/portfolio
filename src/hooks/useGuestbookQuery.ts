import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GUESTBOOK_CONSTANTS } from '@/constants/guestbook.constants';
import { QUERY_KEYS } from '@/constants/queryKeys.constants';
import {
  createGuestbookEntry,
  fetchGuestbookEntries,
  GuestbookServiceError,
} from '@/services/guestbookService';

// 방명록 목록 조회
export const useGuestbookEntries = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GUESTBOOK.ALL,
    queryFn: fetchGuestbookEntries,
    retry: (failureCount, error) => {
      // 클라이언트 오류(4xx)는 재시도하지 않음
      if (error instanceof GuestbookServiceError) {
        const isClientError = error.code?.startsWith('4') || error.code === 'PGRST';
        return !isClientError && failureCount < 2;
      }
      // 네트워크 오류는 설정된 횟수만큼 재시도
      return failureCount < GUESTBOOK_CONSTANTS.API.MAX_RETRY_COUNT;
    },
    retryDelay: (attemptIndex) =>
      Math.min(
        GUESTBOOK_CONSTANTS.API.RETRY_DELAY_BASE * 2 ** attemptIndex,
        GUESTBOOK_CONSTANTS.API.MAX_RETRY_DELAY
      ), // 지수 백오프
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
