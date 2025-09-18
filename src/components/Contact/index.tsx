import { Link } from 'react-router-dom';
import { contactInfo } from '@/data/contact.data';
import { useContactForm } from '@/hooks/useContactForm';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
  const { loading, handleSubmit } = useContactForm();

  return (
    <SectionLayout>
      <SectionHeader
        title='감사합니다.'
        description='궁금한 점이 있으시다면 아래의 연락처로 연락 부탁드립니다.'
      />
      <ContactInfo info={contactInfo} />
      <ContactForm loading={loading} onSubmit={handleSubmit} />

      <div className='mt-8 flex justify-center'>
        <Link
          to='/guestbook'
          className='focus-ring relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md border border-blue/10 bg-blue px-4 py-2 text-center font-semibold text-base text-black backdrop-blur-md transition-all duration-300 hover:opacity-80'
        >
          방명록 남기기
        </Link>
      </div>
    </SectionLayout>
  );
};
