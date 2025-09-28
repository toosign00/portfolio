import ReactGA from 'react-ga4';
import type { ProjectInfoProps } from '@/types/projectModal.types';

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
  // 인원/팀구성
  const memberInfo =
    project.type === 'Team' && project.teamDetail
      ? project.teamDetail
      : project.memberCount
        ? `${project.memberCount}명`
        : '';

  const handleGithubClick = () => {
    ReactGA.event('click', {
      link_id: 'project_github',
      link_url: project.githubUrl,
      project_name: project.title,
      outbound: true,
    });
  };

  const handleDeployClick = () => {
    ReactGA.event('click', {
      link_id: 'project_deploy',
      link_url: project.deployUrl,
      project_name: project.title,
      outbound: true,
    });
  };

  return (
    <div className='mb-8 w-full'>
      <div className='flex w-full flex-col gap-3 md:flex-row md:gap-2'>
        {/* 참여인원 */}
        <div className='flex flex-1 flex-col'>
          <div className='mb-1 font-semibold text-gray-400 text-xs'>참여인원</div>
          <div className='font-normal text-sm text-white'>{memberInfo}</div>
        </div>
        {/* 기간 */}
        <div className='flex flex-1 flex-col'>
          <div className='mb-1 font-semibold text-gray-400 text-xs'>기간</div>
          <div className='font-normal text-sm text-white'>{project.timeFrame}</div>
        </div>
        {/* 관련 링크 */}
        <div className='flex flex-1 flex-col'>
          <div className='mb-1 font-semibold text-gray-400 text-xs'>관련 링크</div>
          <div className='font-normal text-sm text-white'>
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='focus-ring focus-ring underline transition-colors hover:text-blue'
              onClick={handleGithubClick}
            >
              깃허브
            </a>
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='focus-ring focus-ring ml-4 underline transition-colors hover:text-blue'
                onClick={handleDeployClick}
              >
                배포 사이트
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
