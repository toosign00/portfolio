import { useForm } from 'react-hook-form';
import type { ContactFormData } from '@/types/contact.type';
import xss from 'xss';

const sanitizeInput = (value: string) => {
  return xss(value, {
    whiteList: {}, // 모든 HTML 태그 제거
    stripIgnoreTag: true, // 알 수 없는 태그 제거
    stripIgnoreTagBody: ['script'], // script 태그 내용 제거
  });
};

interface ContactFormProps {
  loading: boolean;
  onSubmit: (data: ContactFormData) => Promise<boolean>;
}

export const ContactForm = ({ loading, onSubmit }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
  });

  const onSubmitForm = async (data: ContactFormData) => {
    const success = await onSubmit(data);
    if (success) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-ui-background-black mx-auto flex max-w-md flex-col gap-4 rounded-xl p-6 shadow-lg"
    >
      <div className="flex min-h-[5rem] flex-col gap-1">
        <label htmlFor="user_name" className="text-left font-semibold text-white">
          이름
        </label>
        <input
          id="user_name"
          type="text"
          {...register('user_name', {
            required: '이름을 입력해주세요',
            minLength: {
              value: 2,
              message: '이름은 2자 이상이어야 합니다',
            },
            setValueAs: (value: string) => sanitizeInput(value),
          })}
          className="focus:ring-blue rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
        />
        <span className="min-h-[1.25rem] text-sm text-red-500">{errors.user_name?.message}</span>
      </div>

      <div className="flex min-h-[5rem] flex-col gap-1">
        <label htmlFor="user_email" className="text-left font-semibold text-white">
          이메일
        </label>
        <input
          id="user_email"
          type="email"
          {...register('user_email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '유효한 이메일 주소를 입력해주세요',
            },
            setValueAs: (value: string) => sanitizeInput(value),
          })}
          className="focus:ring-blue rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
        />
        <span className="min-h-[1.25rem] text-sm text-red-500">{errors.user_email?.message}</span>
      </div>

      <div className="flex min-h-[7rem] flex-col gap-1">
        <label htmlFor="message" className="text-left font-semibold text-white">
          메시지
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', {
            required: '메시지를 입력해주세요',
            setValueAs: (value: string) => sanitizeInput(value),
          })}
          className="focus:ring-blue resize-none rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
        />
        <span className="min-h-[1.25rem] text-sm text-red-500">{errors.message?.message}</span>
      </div>

      <button
        type="submit"
        className="submit--btn bg-blue cursor-pointer rounded py-2 font-semibold text-black transition hover:opacity-80 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="mr-2 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            전송중...
          </span>
        ) : (
          <span>
            보내기 <i className="bi bi-send"></i>
          </span>
        )}
      </button>
    </form>
  );
};
