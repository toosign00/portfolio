import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Button';
import { guestbookFormSchema } from '@/schemas/guestbook.schema';
import type { GuestbookFormData, GuestbookFormProps } from '@/types/guestbook.types';
export const GuestbookForm = ({ onSubmit, loading }: GuestbookFormProps) => {
  const { t } = useTranslation();
  const schema = guestbookFormSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<GuestbookFormData>({
    mode: 'onSubmit',
    shouldFocusError: true,
    resolver: zodResolver(schema),
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
            {...register('name')}
            type='text'
            className={`w-full resize-none rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-white placeholder-gray-400 transition-all ${errors.name ? 'focus-ring-error' : 'focus-ring'}`}
            placeholder={t('guestbook.form.namePlaceholder')}
            disabled={loading}
            aria-label={t('guestbook.form.nameLabel')}
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
            {...register('message')}
            rows={4}
            className={`w-full resize-none rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-white placeholder-gray-400 transition-all ${errors.message ? 'focus-ring-error' : 'focus-ring'}`}
            placeholder={t('guestbook.form.messagePlaceholder')}
            disabled={loading}
            aria-label={t('guestbook.form.messageLabel')}
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
              {message?.length || 0}/1000
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
              {t('guestbook.form.resetButton')}
            </Button>
            <Button type='submit' variant='primary' size='sm' disabled={loading}>
              {loading ? t('guestbook.form.submittingButton') : t('guestbook.form.submitButton')}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
