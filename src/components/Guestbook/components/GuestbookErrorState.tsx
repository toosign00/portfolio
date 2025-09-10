import { Button } from '@/components/Button';

interface GuestbookErrorStateProps {
  onRetry?: () => void;
}

export const GuestbookErrorState = ({ onRetry }: GuestbookErrorStateProps) => {
  return (
    <div className='rounded-lg border border-white/10 bg-ui-background p-8'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className='mb-2 font-semibold text-white'>방명록 로딩 실패</h3>

        <p className='mb-6 text-gray-400 text-sm'>예상치 못한 오류가 발생했습니다.</p>

        {onRetry && (
          <Button
            onClick={onRetry}
            type='button'
            variant='primary'
            className='font-semibold'
            size='sm'
          >
            다시 시도
          </Button>
        )}
      </div>
    </div>
  );
};
