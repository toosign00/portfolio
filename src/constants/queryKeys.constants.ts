// React Query 키 상수들
export const QUERY_KEYS = {
  GUESTBOOK: {
    ALL: ['guestbook'] as const,
    DETAIL: (id: number) => ['guestbook', id] as const,
  },
} as const;
