import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { GuestbookForm, GuestbookList } from '@/components/Guestbook';
import { NotificationModal } from '@/components/NotificationModal';
import { useGuestbookForm } from '@/hooks/useGuestbookForm';
import { useGuestbookInfiniteEntries } from '@/hooks/useGuestbookQuery';

export const GuestbookPage = () => {
  const navigate = useNavigate();
  const infinite = useGuestbookInfiniteEntries(10);
  const { loading, handleSubmit, notification, hideNotification } = useGuestbookForm();

  const flatInfiniteItems = infinite.data?.pages.flatMap((p) => p.items) ?? [];
  const totalCount = infinite.data?.pages[0]?.totalCount ?? 0;

  // 에러 메시지 처리
  const errorMessage = infinite.error?.message || null;

  // 재시도 함수
  const handleRetry = () => {
    infinite.refetch();
  };

  return (
    <>
      <div className='flex min-h-screen flex-col bg-primary'>
        {/* 헤더 */}
        <div className='border-white/10 border-b p-6'>
          <div className='mx-auto flex max-w-4xl items-center justify-between'>
            <h1 className='font-bold text-2xl text-white'>방명록</h1>
            <Button variant='secondary' size='sm' onClick={() => navigate('/')}>
              메인으로 돌아가기
            </Button>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className='flex-1 p-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='mb-6'>
              <p className='text-center text-gray-400 text-sm'>
                저에게 하고 싶은 말씀을 자유롭게 남겨주세요!
              </p>
            </div>

            {/* 방명록 작성 폼 */}
            <GuestbookForm onSubmit={handleSubmit} loading={loading} />

            {/* 방명록 목록 */}
            <GuestbookList
              entries={flatInfiniteItems}
              loading={infinite.isLoading}
              totalCount={totalCount}
              error={errorMessage}
              onRetry={handleRetry}
            />
            <div className='mt-4 flex justify-center'>
              {infinite.hasNextPage && !errorMessage && (
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => infinite.fetchNextPage()}
                  disabled={infinite.isFetchingNextPage}
                >
                  {infinite.isFetchingNextPage ? '불러오는 중...' : '더 보기'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 알림 모달 */}
      <NotificationModal
        isOpen={notification.isOpen}
        onClose={hideNotification}
        title={notification.title}
        message={notification.message}
        type={notification.type}
        autoClose={notification.type !== 'error'}
      />
    </>
  );
};
