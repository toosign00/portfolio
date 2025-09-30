import emailjs from '@emailjs/browser';

interface EmailParams {
  from_name: string;
  from_email: string;
  message: string;
  sent_time: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (formData: EmailParams) => {
  try {
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message,
      sent_time: formData.sent_time,
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    if (response.status === 200) {
      return { success: true };
    }
    throw new Error('Failed to send email.');
  } catch (error: unknown) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      error:
        typeof error === 'object' && error !== null && 'text' in error
          ? (error as { text: string }).text
          : error instanceof Error
            ? error.message
            : 'An unknown error occurred.',
    };
  }
};
