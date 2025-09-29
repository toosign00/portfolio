import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { sendContactEmail } from '@/services/emailService';
import type { ContactFormData } from '@/types/contact.types';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success(t('common.toast.email.success'), {
          description: t('common.toast.email.successDescription'),
        });
        return true;
      }
      toast.error(t('common.toast.email.error'), {
        description: t('common.toast.email.errorDescription', {
          error: result.error ?? t('common.unknownError'),
        }),
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
  };
};
