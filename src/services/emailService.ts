import emailjs from '@emailjs/browser';

interface EmailParams {
  user_name: string;
  user_email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (formData: EmailParams) => {
  try {
    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      message: formData.message,
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('이메일 전송에 실패했습니다.');
    }
  } catch (error: unknown) {
    console.error('이메일 전송 오류:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    };
  }
};
