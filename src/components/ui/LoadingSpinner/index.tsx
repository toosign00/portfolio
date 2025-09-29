import type { LoadingSpinnerProps } from '@/types/loadingSpinner.types';

export function LoadingSpinner({ size = 'md', message = 'Loading...' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center gap-4 bg-black`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-white/20 border-t-blue`}
      />
      {message && <p className='font-medium text-gray text-sm'>{message}</p>}
    </div>
  );
}
