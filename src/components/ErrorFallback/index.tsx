import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Button';
import type { ErrorFallbackProps } from '@/types/error.types';

export const ErrorFallback = ({ error, onRetry, onGoHome }: ErrorFallbackProps) => {
  const { t } = useTranslation();
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-black text-white'>
      <div className='p-8 text-center'>
        <h1 className='mb-4 font-semibold text-2xl'>{t('common.errorFallback.title')}</h1>
        <p className='mb-8 text-gray-400'>{t('common.errorFallback.description')}</p>

        <div className='flex justify-center gap-4'>
          <Button onClick={handleRetry} variant='secondary' size='md'>
            {t('common.refresh')}
          </Button>
          <Button onClick={handleGoHome} variant='secondary' size='md'>
            {t('common.home')}
          </Button>
        </div>
        {error && (
          <details className='mx-auto mt-8 max-w-xl text-left'>
            <summary className='cursor-pointer text-center text-red-500 hover:text-red-400'>
              {t('common.details')}
            </summary>
            <pre className='mt-3 max-h-64 overflow-auto whitespace-pre-wrap rounded bg-gray-900 p-4 text-gray-300 text-xs'>
              {error.message}
              {'\n'}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};
