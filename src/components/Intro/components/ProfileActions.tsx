import { Button } from '@/components/Button';

export const ProfileActions = () => {
  return (
    <div className='flex flex-row gap-4 sm:gap-6'>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href='/assets/documents/CV.pdf' download='노현수_이력서.pdf'>
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
