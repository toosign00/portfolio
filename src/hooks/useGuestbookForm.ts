import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useCreateGuestbookEntry } from '@/hooks/useGuestbookQuery';
import type { GuestbookFormData } from '@/types/guestbook.types';

export const useGuestbookForm = () => {
  const { t } = useTranslation();
  const createMutation = useCreateGuestbookEntry();

  const handleSubmit = async (data: GuestbookFormData) => {
    try {
      await createMutation.mutateAsync({
        name: data.name,
        message: data.message,
      });

      toast.success(t('common.toast.guestbook.success'), {
        description: t('common.toast.guestbook.successDescription'),
      });
    } catch (error) {
      console.error('Guestbook creation failed:', error);

      toast.error(t('common.toast.guestbook.error'), {
        description: t('common.toast.guestbook.errorDescription'),
      });
    }
  };

  return {
    loading: createMutation.isPending,
    handleSubmit,
  };
};
