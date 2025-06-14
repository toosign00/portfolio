import { useState } from 'react';
import { sendContactEmail } from '@/services/emailService';

interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        alert('이메일이 성공적으로 전송되었습니다!');
        return true;
      } else {
        alert('전송 실패: ' + result.error);
        return false;
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
  };
};
