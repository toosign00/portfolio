import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { GuestbookForm, GuestbookList } from '@/components/Guestbook';
import { NotificationModal } from '@/components/NotificationModal';
import { useGuestbookForm } from '@/hooks/useGuestbookForm';
import { useGuestbookEntries } from '@/hooks/useGuestbookQuery';

export const GuestbookPage = () => {
  const navigate = useNavigate();
  const { data: entries = [], isLoading } = useGuestbookEntries();
  const { loading, handleSubmit, notification, hideNotification } = useGuestbookForm();

  return (
    <>
      <div className='min-h-screen bg-primary flex flex-col'>
        {/* 헤더 */}
        <div className='p-6 border-b border-white/10'>
          <div className='max-w-4xl mx-auto flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-white'>방명록</h1>
            <Button variant='secondary' size='sm' onClick={() => navigate('/')}>
              메인으로 돌아가기
            </Button>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className='flex-1 p-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='mb-6'>
              <p className='text-gray-400 text-center text-sm'>
                저에게 하고 싶은 말씀을 자유롭게 남겨주세요!
              </p>
            </div>

            {/* 방명록 작성 폼 */}
            <GuestbookForm onSubmit={handleSubmit} loading={loading} />

            {/* 방명록 목록 */}
            <GuestbookList entries={entries} loading={isLoading} />
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
