import { Button } from '@/components/Button';
import { supabase } from '@/lib/supabase';

export const ProfileActions = () => {
  const { data } = supabase.storage.from('project').getPublicUrl('documents/CV.pdf', {
    download: '노현수_이력서.pdf',
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
          이력서 다운로드
        </a>
      </Button>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href='https://github.com/toosign00' target='_blank' rel='noopener noreferrer'>
          GitHub 방문하기
        </a>
      </Button>
    </div>
  );
};
