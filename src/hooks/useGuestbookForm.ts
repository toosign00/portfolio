import type { GuestbookFormData } from '@/types/guestbook.types';
import { useCreateGuestbookEntry } from './useGuestbookQuery';
import { useNotification } from './useNotification';

export const useGuestbookForm = () => {
  const createMutation = useCreateGuestbookEntry();
  const { notification, showNotification, hideNotification } = useNotification();

  const handleSubmit = async (data: GuestbookFormData) => {
    try {
      // 서버로 데이터 전송
      await createMutation.mutateAsync({
        name: data.name,
        message: data.message,
      });

      showNotification('방명록 작성 완료', '소중한 메시지를 남겨주셔서 감사합니다!', 'success');
    } catch (error) {
      console.error('방명록 작성 실패:', error);

      let errorMessage: string = '방명록 작성 중 오류가 발생했습니다.';

      if (error instanceof Error) {
        // 네트워크 에러
        if (error.message.includes('fetch')) {
          errorMessage = '네트워크 연결을 확인해주세요.';
        }
        // 중복 에러
        else if (error.message.includes('duplicate') || error.message.includes('중복')) {
          errorMessage = '이미 등록된 내용입니다. 잠시 후 다시 시도해주세요.';
        }
        // 권한 에러
        else if (error.message.includes('permission') || error.message.includes('권한')) {
          errorMessage = '접근 권한이 없습니다. 페이지를 새로고침 후 다시 시도해주세요.';
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
