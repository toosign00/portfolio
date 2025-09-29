import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';

export const ProfileActions = () => {
  const { t } = useTranslation();
  const { data } = supabase.storage.from('project').getPublicUrl('documents/CV.pdf', {
    download: t('intro.fileName'),
  });

  // IOS, iPadOS의 Safari 브라우저 확인
  const isIOSSafari =
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)) &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome') &&
    !navigator.userAgent.includes('CriOS');
  // console.log(isIOSSafari);
  // console.log(navigator.userAgent);

  return (
    <div className='flex flex-row gap-4 sm:gap-6'>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a
          href={data.publicUrl}
          rel='noopener noreferrer'
          target={isIOSSafari ? '_blank' : '_self'}
        >
          {t('intro.actions.downloadResume')}
        </a>
      </Button>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href='https://github.com/toosign00' target='_blank' rel='noopener noreferrer'>
          {t('intro.actions.visitGithub')}
        </a>
      </Button>
    </div>
  );
};
