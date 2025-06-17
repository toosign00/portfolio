import { Button } from '@/components/common/Button';
import { PROFILE_CONSTANTS } from '@/components/Intro/constants/profile.constants';

export const ProfileActions = () => {
  return (
    <div className="flex flex-row gap-4 sm:gap-6">
      <Button
        href={PROFILE_CONSTANTS.RESUME.PATH}
        size={{ base: 'md', md: 'lg' }}
        variant="secondary"
        border={false}
        download
      >
        이력서 다운로드
      </Button>
      <Button
        href={PROFILE_CONSTANTS.SOCIAL.GITHUB}
        size={{ base: 'md', md: 'lg' }}
        variant="secondary"
        border={false}
      >
        GitHub 방문하기
      </Button>
    </div>
  );
};
