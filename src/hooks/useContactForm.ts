import { useState } from 'react';
import { sendContactEmail } from '@/services/emailService';
import type { ContactFormData } from '@/types/contact.types';
import { useNotification } from './useNotification';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { notification, showNotification, hideNotification } = useNotification();

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        showNotification('성공!', '이메일이 성공적으로 전송되었습니다!', 'success');
        return true;
      }
      showNotification('전송 실패', `${result.error}`, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
    notification,
    hideNotification,
  };
};
