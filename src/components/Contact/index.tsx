import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { useContactForm } from '@/hooks/useContactForm';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { contactInfo } from '@/data/contact.data';

export const Contact = () => {
  const { loading, handleSubmit } = useContactForm();

  return (
    <SectionLayout>
      <SectionHeader
        title="감사합니다."
        description="궁금한 점이 있으시다면 아래의 연락처로 연락 부탁드립니다."
      />
      <ContactInfo info={contactInfo} />
      <ContactForm loading={loading} onSubmit={handleSubmit} />
    </SectionLayout>
  );
};
