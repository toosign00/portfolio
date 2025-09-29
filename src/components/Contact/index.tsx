import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { useContactForm } from '@/hooks/useContactForm';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
  const { loading, handleSubmit } = useContactForm();
  const { t } = useTranslation();
  return (
    <SectionLayout>
      <SectionHeader title={t('contact.title')} description={t('contact.description')} />
      <ContactInfo />
      <ContactForm loading={loading} onSubmit={handleSubmit} />

      <div className='mt-8 flex justify-center'>
        <Button variant='primary' size='md' asChild>
          <Link to='/guestbook'>{t('contact.guestbook')}</Link>
        </Button>
      </div>
    </SectionLayout>
  );
};
