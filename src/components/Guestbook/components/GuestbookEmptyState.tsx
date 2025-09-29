import { useTranslation } from 'react-i18next';
export const GuestbookEmptyState = () => {
  const { t } = useTranslation();
  return (
    <div
      className='rounded-lg border border-white/10 bg-ui-background p-8 text-center'
      role='status'
      aria-label={t('guestbook.empty.ariaLabel')}
    >
      <p className='mb-2 text-gray-400'>{t('guestbook.empty.message')}</p>
      <p className='text-gray-500 text-sm'>{t('guestbook.empty.subMessage')}</p>
    </div>
  );
};
