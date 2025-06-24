import { useState } from 'react';
import { sendContactEmail } from '@/services/emailService';
import type { ContactFormData } from '@/types/contact.type';

interface NotificationState {
  isOpen: boolean;
  title: string;
  message: string;
  type: 'success' | 'error';
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showNotification = (
    title: string,
    message: string,
    type: 'success' | 'error' = 'success',
  ) => {
    setNotification({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        showNotification('성공!', '이메일이 성공적으로 전송되었습니다!', 'success');
        return true;
      } else {
        showNotification('전송 실패', `${result.error}`, 'error');
        return false;
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
    notification,
    hideNotification,
    showNotification,
  };
};
