import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { GUESTBOOK_CONSTANTS, GUESTBOOK_ERROR_MESSAGES } from '@/constants/guestbook.constants';
import type { GuestbookFormData, GuestbookFormProps } from '@/types/guestbook.types';

export const GuestbookForm = ({ onSubmit, loading }: GuestbookFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<GuestbookFormData>({
    mode: 'onChange',
  });

  const message = watch('message');

  const handleFormSubmit = (data: GuestbookFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className='mb-8 rounded-lg border border-white/10 bg-ui-background p-6'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-4'>
        {/* 이름 입력란 */}
        <div>
          <input
            {...register('name', {
              required: GUESTBOOK_ERROR_MESSAGES.VALIDATION.NAME_REQUIRED,
              maxLength: {
                value: GUESTBOOK_CONSTANTS.VALIDATION.NAME_MAX_LENGTH,
                message: GUESTBOOK_ERROR_MESSAGES.VALIDATION.NAME_TOO_LONG,
              },
            })}
            type='text'
            className='w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-400 focus:outline-none'
            placeholder='이름을 입력하세요'
            disabled={loading}
            aria-label='이름 입력'
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id='name-error' className='mt-2 text-red-400 text-sm' role='alert'>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* 메시지 입력란 */}
        <div>
          <textarea
            {...register('message', {
              required: GUESTBOOK_ERROR_MESSAGES.VALIDATION.MESSAGE_REQUIRED,
              maxLength: {
                value: GUESTBOOK_CONSTANTS.VALIDATION.MESSAGE_MAX_LENGTH,
                message: GUESTBOOK_ERROR_MESSAGES.VALIDATION.MESSAGE_TOO_LONG,
              },
            })}
            rows={GUESTBOOK_CONSTANTS.UI.FORM_ROWS}
            className='w-full resize-none rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-blue-400 focus:outline-none'
            placeholder='방명록에 남길 메시지를 작성해주세요'
            disabled={loading}
            aria-label='메시지 입력'
            aria-describedby={errors.message ? 'message-error' : 'message-counter'}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id='message-error' className='text-red-400 text-sm' role='alert'>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span id='message-counter' className='text-gray-400 text-sm' aria-live='polite'>
              {message?.length || 0}/{GUESTBOOK_CONSTANTS.VALIDATION.MESSAGE_MAX_LENGTH}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              type='button'
              variant='secondary'
              size='sm'
              onClick={() => reset()}
              disabled={loading}
            >
              초기화
            </Button>
            <Button
              type='submit'
              variant='primary'
              className='font-semibold'
              size='sm'
              disabled={!isValid || loading}
            >
              {loading ? '작성 중...' : '방명록 작성'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
