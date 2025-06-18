import type { ProjectInfoProps } from '@/types/projectModal.type';

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
  // 인원/팀구성
  const memberInfo =
    project.type === 'Team' && project.teamDetail
      ? project.teamDetail
      : project.memberCount
        ? `${project.memberCount}명`
        : '';

  return (
    <div className="mb-8 w-full">
      <div className="flex w-full flex-col gap-3 md:flex-row md:gap-2">
        {/* 참여인원 */}
        <div className="flex flex-1 flex-col">
          <div className="mb-1 text-xs font-semibold text-gray-400">참여인원</div>
          <div className="text-sm font-normal text-white">{memberInfo}</div>
        </div>
        {/* 기간 */}
        <div className="flex flex-1 flex-col">
          <div className="mb-1 text-xs font-semibold text-gray-400">기간</div>
          <div className="text-sm font-normal text-white">{project.timeFrame}</div>
        </div>
        {/* 관련 링크 */}
        <div className="flex flex-1 flex-col">
          <div className="mb-1 text-xs font-semibold text-gray-400">관련 링크</div>
          <div className="text-sm font-normal text-white">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-400"
            >
              깃허브
            </a>
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 underline transition-colors hover:text-white"
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
