import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import xss from 'xss';
import type { z } from 'zod';
import { Button } from '@/components/Button';
import { contactFormSchema } from '@/schemas/contact.schema';
import type { ContactFormProps } from '@/types/contact.types';

const sanitizeInput = (value: string) => {
  return xss(value, {
    whiteList: {}, // 모든 HTML 태그 제거
    stripIgnoreTag: true, // 알 수 없는 태그 제거
    stripIgnoreTagBody: ['script'], // script 태그 내용 제거
  });
};

export const ContactForm = ({ loading, onSubmit }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  const onSubmitForm = async (data: z.infer<typeof contactFormSchema>) => {
    const dataWithTime = {
      ...data,
      sent_time: new Date().toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
    };
    const success = await onSubmit(dataWithTime);
    if (success) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className='mx-auto flex max-w-md flex-col gap-4 rounded-xl bg-ui-background-black p-6 shadow-lg'
    >
      <div className='flex min-h-[5rem] flex-col gap-1'>
        <label htmlFor='from_name' className='text-left font-semibold text-white'>
          이름
        </label>
        <input
          id='from_name'
          type='text'
          {...register('from_name', { setValueAs: (value: string) => sanitizeInput(value) })}
          className={`rounded border border-gray-700 bg-[#23272f] p-3 text-white ${
            errors.from_name ? 'focus-ring-error' : 'focus-ring'
          }`}
        />
        <span className='min-h-[1.25rem] text-red-400 text-sm'>{errors.from_name?.message}</span>
      </div>

      <div className='flex min-h-[5rem] flex-col gap-1'>
        <label htmlFor='from_email' className='text-left font-semibold text-white'>
          이메일
        </label>
        <input
          id='from_email'
          type='email'
          {...register('from_email', { setValueAs: (value: string) => sanitizeInput(value) })}
          className={`rounded border border-gray-700 bg-[#23272f] p-3 text-white ${
            errors.from_email ? 'focus-ring-error' : 'focus-ring'
          }`}
        />
        <span className='min-h-[1.25rem] text-red-400 text-sm'>{errors.from_email?.message}</span>
      </div>

      <div className='flex min-h-[7rem] flex-col gap-1'>
        <label htmlFor='message' className='text-left font-semibold text-white'>
          메시지
        </label>
        <textarea
          id='message'
          rows={5}
          {...register('message', { setValueAs: (value: string) => sanitizeInput(value) })}
          className={`rounded border border-gray-700 bg-[#23272f] p-3 text-white ${
            errors.message ? 'focus-ring-error' : 'focus-ring'
          }`}
        />
        <span className='min-h-[1.25rem] text-red-400 text-sm'>{errors.message?.message}</span>
      </div>

      <Button type='submit' variant='primary' size='md' disabled={loading}>
        {loading ? (
          <span className='flex items-center justify-center gap-2'>
            <svg
              className='mr-2 h-5 w-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              aria-label='로딩 중'
            >
              <title>로딩 스피너</title>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8z' />
            </svg>
            전송중...
          </span>
        ) : (
          <span>보내기</span>
        )}
      </Button>
    </form>
  );
};
