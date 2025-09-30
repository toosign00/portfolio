import { supabase } from '@/lib/supabase';
import type { CreateGuestbookEntry, GuestbookEntry } from '@/types/guestbook.types';
import { getClientIP } from '@/utils/ipUtils';

export class GuestbookServiceError extends Error {
  public readonly code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = 'GuestbookServiceError';
    this.code = code;
  }
}

// 방명록 페이지네이션 조회 (무한 스크롤)
export const fetchGuestbookEntriesPaginated = async (
  limit: number,
  cursor?: string
): Promise<{ items: GuestbookEntry[]; nextCursor?: string; totalCount: number }> => {
  try {
    let query = supabase
      .from('guestbook')
      .select('id, name, message, created_at', { count: 'exact' })
      .eq('is_visible', true)
      .order('created_at', { ascending: false })
      .limit(limit + 1);

    if (cursor) {
      query = query.lt('created_at', cursor);
    }

    const { data, error, count } = await query;

    if (error) {
      throw new GuestbookServiceError(
        `Failed to retrieve guestbook pagination: ${error.message}`,
        error.code
      );
    }

    const hasMore = (data?.length || 0) > limit;
    const items = hasMore
      ? (data as GuestbookEntry[]).slice(0, limit)
      : (data as GuestbookEntry[]) || [];
    const nextCursor = hasMore ? items[items.length - 1]?.created_at : undefined;
    return { items, nextCursor, totalCount: count ?? items.length };
  } catch (error) {
    console.error('Failed to retrieve guestbook pagination:', error);
    if (error instanceof GuestbookServiceError) {
      throw error;
    }
    throw new GuestbookServiceError(
      error instanceof Error ? error.message : 'An unknown error occurred.'
    );
  }
};

// 방명록 작성
export const createGuestbookEntry = async (entry: CreateGuestbookEntry): Promise<void> => {
  try {
    // 클라이언트 IP 주소 가져오기 (실패해도 계속 진행)
    const clientIP = await getClientIP();

    const { error } = await supabase.from('guestbook').insert([
      {
        name: entry.name.trim(),
        message: entry.message.trim(),
        ip_address: clientIP, // IP 주소 추가 (null 가능)
      },
    ]);

    if (error) {
      throw new GuestbookServiceError(
        `Failed to create guestbook entry: ${error.message}`,
        error.code
      );
    }
  } catch (error) {
    console.error('Failed to create guestbook entry:', error);
    if (error instanceof GuestbookServiceError) {
      throw error;
    }
    throw new GuestbookServiceError(
      error instanceof Error ? error.message : 'An unknown error occurred.'
    );
  }
};
