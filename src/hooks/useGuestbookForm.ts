import { GUESTBOOK_ERROR_MESSAGES } from '@/constants/guestbook.constants';
import { validateGuestbookEntry } from '@/services/guestbookService';
import type { GuestbookFormData } from '@/types/guestbook.types';
import { useCreateGuestbookEntry } from './useGuestbookQuery';
import { useNotification } from './useNotification';

export const useGuestbookForm = () => {
  const createMutation = useCreateGuestbookEntry();
  const { notification, showNotification, hideNotification } = useNotification();

  const handleSubmit = async (data: GuestbookFormData) => {
    try {
      // 클라이언트 사이드 검증
      const validationErrors = validateGuestbookEntry({
        name: data.name,
        message: data.message,
      });

      if (validationErrors.length > 0) {
        showNotification('입력 오류', validationErrors.join('\n'), 'error');
        return;
      }

      // 서버로 데이터 전송
      await createMutation.mutateAsync({
        name: data.name,
        message: data.message,
      });

      showNotification(
        '방명록 작성 완료',
        GUESTBOOK_ERROR_MESSAGES.SUCCESS.CREATE_SUCCESS,
        'success'
      );
    } catch (error) {
      console.error('방명록 작성 실패:', error);

      let errorMessage: string = GUESTBOOK_ERROR_MESSAGES.API.GENERAL_ERROR;

      if (error instanceof Error) {
        // 네트워크 에러
        if (error.message.includes('fetch')) {
          errorMessage = GUESTBOOK_ERROR_MESSAGES.API.NETWORK_ERROR;
        }
        // Supabase 에러
        else if (error.message.includes('duplicate') || error.message.includes('중복')) {
          errorMessage = GUESTBOOK_ERROR_MESSAGES.API.DUPLICATE_ERROR;
        }
        // 권한 에러
        else if (error.message.includes('permission') || error.message.includes('권한')) {
          errorMessage = GUESTBOOK_ERROR_MESSAGES.API.PERMISSION_ERROR;
        }
        // 일반적인 에러
        else {
          errorMessage = error.message;
        }
      }

      showNotification('작성 실패', errorMessage, 'error');
    }
  };

  return {
    loading: createMutation.isPending,
    handleSubmit,
    notification,
    hideNotification,
  };
};
