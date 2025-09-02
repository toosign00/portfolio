import { Button } from '@/components/Button';
import type { ErrorFallbackProps } from '@/types/error.types';

export const ErrorFallback = ({ error, onRetry, onGoHome }: ErrorFallbackProps) => {
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
        <h1 className='mb-4 font-semibold text-2xl'>문제가 발생했습니다</h1>
        <p className='mb-8 text-gray-400'>페이지를 새로고침하거나 홈으로 돌아가주세요.</p>

        <div className='flex justify-center gap-4'>
          <Button onClick={handleRetry} variant='secondary' size='md'>
            새로고침
          </Button>
          <Button onClick={handleGoHome} variant='secondary' size='md'>
            홈으로
          </Button>
        </div>
        {error && (
          <details className='mx-auto mt-8 max-w-xl text-left'>
            <summary className='cursor-pointer text-center text-red-500 hover:text-red-400'>
              에러 상세 정보 (개발용)
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
