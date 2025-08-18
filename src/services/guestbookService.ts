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

// 방명록 목록 조회 (공개)
export const fetchGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('id, name, message, created_at')
      .eq('is_visible', true)
      .order('created_at', { ascending: false });

    if (error) {
      throw new GuestbookServiceError(`방명록 목록 조회 실패: ${error.message}`, error.code);
    }

    return data || [];
  } catch (error) {
    console.error('방명록 목록 조회 중 오류:', error);
    if (error instanceof GuestbookServiceError) {
      throw error;
    }
    throw new GuestbookServiceError(
      error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'
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
      throw new GuestbookServiceError(`방명록 작성 실패: ${error.message}`, error.code);
    }
  } catch (error) {
    console.error('방명록 작성 중 오류:', error);
    if (error instanceof GuestbookServiceError) {
      throw error;
    }
    throw new GuestbookServiceError(
      error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'
    );
  }
};

// 입력값 검증
export const validateGuestbookEntry = (entry: CreateGuestbookEntry): string[] => {
  const errors: string[] = [];

  if (!entry.name.trim()) {
    errors.push('이름을 입력해주세요.');
  } else if (entry.name.trim().length > 50) {
    errors.push('이름은 50자 이하로 입력해주세요.');
  }

  if (!entry.message.trim()) {
    errors.push('메시지를 입력해주세요.');
  } else if (entry.message.trim().length > 1000) {
    errors.push('메시지는 1000자 이하로 입력해주세요.');
  }

  return errors;
};
