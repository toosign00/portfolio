import { useState } from 'react';
import { toast } from 'sonner';
import { sendContactEmail } from '@/services/emailService';
import type { ContactFormData } from '@/types/contact.types';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success('성공!', { description: '이메일이 성공적으로 전송되었습니다!' });
        return true;
      }
      toast.error('전송 실패', { description: result.error });
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
