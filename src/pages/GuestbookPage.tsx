import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GuestbookForm, GuestbookList } from '@/components/Guestbook';
import { Button } from '@/components/ui/Button';
import { useGuestbookForm } from '@/hooks/useGuestbookForm';
import { useGuestbookInfiniteEntries } from '@/hooks/useGuestbookQuery';

export const GuestbookPage = () => {
  const { t } = useTranslation();
  const infinite = useGuestbookInfiniteEntries(10);
  const { loading, handleSubmit } = useGuestbookForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flatInfiniteItems = infinite.data?.pages.flatMap((p) => p.items) ?? [];
  const totalCount = infinite.data?.pages[0]?.totalCount ?? 0;

  // 에러 메시지 처리
  const errorMessage = infinite.error?.message || null;

  // 재시도 함수
  const handleRetry = () => {
    infinite.refetch();
  };

  return (
    <div className='flex min-h-screen flex-col bg-primary'>
      {/* 헤더 */}
      <div className='border-white/10 border-b p-6'>
        <div className='mx-auto flex max-w-4xl items-center justify-between'>
          <h1 className='font-bold text-2xl text-white'>{t('guestbook.title')}</h1>
          <Button variant='secondary' size='sm' asChild>
            <Link to='/'>{t('guestbook.backToMain')}</Link>
          </Button>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className='flex-1 p-6'>
        <div className='mx-auto max-w-3xl'>
          <div className='mb-6'>
            <p className='text-center text-gray-400 text-sm'>{t('guestbook.description')}</p>
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
                {infinite.isFetchingNextPage ? t('guestbook.loading') : t('guestbook.loadMore')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
