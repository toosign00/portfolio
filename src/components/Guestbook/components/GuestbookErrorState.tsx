import { Button } from '@/components/Button';
import { useTranslation } from 'react-i18next';

interface GuestbookErrorStateProps {
  onRetry?: () => void;
}

export const GuestbookErrorState = ({ onRetry }: GuestbookErrorStateProps) => {
  const { t } = useTranslation();
  return (
    <div className='rounded-lg border border-white/10 bg-ui-background p-8'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className='mb-2 font-semibold text-white'>{t('guestbook.error.title')}</h3>

        <p className='mb-6 text-gray-400 text-sm'>{t('guestbook.error.message')}</p>

        {onRetry && (
          <Button
            onClick={onRetry}
            type='button'
            variant='primary'
            className='font-semibold'
            size='sm'
          >
            {t('guestbook.error.retryButton')}
          </Button>
        )}
      </div>
    </div>
  );
};
