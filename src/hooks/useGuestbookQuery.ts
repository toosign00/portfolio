import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys.constants';
import { createGuestbookEntry, fetchGuestbookEntriesPaginated } from '@/services/guestbookService';

// 방명록 무한 스크롤 조회
export const useGuestbookInfiniteEntries = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.GUESTBOOK.ALL, 'infinite', pageSize],
    queryFn: async ({ pageParam }) => {
      return fetchGuestbookEntriesPaginated(pageSize, pageParam as string | undefined);
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    initialPageParam: undefined as string | undefined,
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
      queryClient.invalidateQueries({ queryKey: [...QUERY_KEYS.GUESTBOOK.ALL, 'infinite'] });
    },
    onError: (error) => {
      console.error('방명록 작성 실패:', error);
    },
  });
};
