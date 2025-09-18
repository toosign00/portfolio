import { Button } from '@/components/Button';
import { PROFILE_CONSTANTS } from '@/constants/profile.constants';

export const ProfileActions = () => {
  return (
    <div className='flex flex-row gap-4 sm:gap-6'>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href={PROFILE_CONSTANTS.RESUME.PATH} download>
          이력서 다운로드
        </a>
      </Button>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href={PROFILE_CONSTANTS.SOCIAL.GITHUB} target='_blank'>
          GitHub 방문하기
        </a>
      </Button>
    </div>
  );
};
