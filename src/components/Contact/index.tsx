import { useNavigate } from 'react-router-dom';
import { NotificationModal } from '@/components/NotificationModal';
import { contactInfo } from '@/data/contact.data';
import { useContactForm } from '@/hooks/useContactForm';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
  const navigate = useNavigate();
  const { loading, handleSubmit, notification, hideNotification } = useContactForm();

  const handleGuestbookNavigation = async () => {
    await navigate('/guestbook');
  };

  return (
    <>
      <SectionLayout>
        <SectionHeader
          title='감사합니다.'
          description='궁금한 점이 있으시다면 아래의 연락처로 연락 부탁드립니다.'
        />
        <ContactInfo info={contactInfo} />
        <ContactForm loading={loading} onSubmit={handleSubmit} />

        <div className='mt-8 flex justify-center'>
          <button
            type='button'
            onClick={handleGuestbookNavigation}
            aria-label='방명록 페이지로 이동'
            className='mt-8 bg-blue cursor-pointer rounded px-4 py-2 font-semibold text-black transition hover:opacity-80 disabled:opacity-60'
          >
            방명록 남기기
          </button>
        </div>
      </SectionLayout>

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
