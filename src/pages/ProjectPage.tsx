import { IoArrowBackOutline } from 'react-icons/io5';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProjectDetailList } from '@/components/ProjectModal/components/ProjectDetailList';
import { ProjectInfo } from '@/components/ProjectModal/components/ProjectInfo';
import { TechnologyStack } from '@/components/ProjectModal/components/TechnologyStack';
import { ProjectPageSkeleton } from '@/components/Skeleton/ProjectPageSkeleton';
import { useProject } from '@/hooks/useProjectsQuery';
import { useProjectSkeletonLoading } from '@/hooks/useSkeletonLoading';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { isNotFoundError, normalizeErrorMessage } from '@/utils/errorUtils';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // React Query를 사용한 프로젝트 데이터 조회
  const { data: project, isPending, error } = useProject(id);

  // 스켈레톤 UI 로직
  const { showSkeleton, hasError } = useProjectSkeletonLoading({
    isPending,
    project,
    error,
  });

  // 에러 상태 - NOT_FOUND 에러인 경우 NotFoundPage 렌더링
  if (hasError) {
    const isNotFound = isNotFoundError(error);

    if (isNotFound) {
      return <NotFoundPage />;
    }

    const errorMessage = normalizeErrorMessage(error);

    return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-project-background'>
        <div className='flex flex-col items-center'>
          <h1 className='mb-4 font-bold text-2xl text-white'>오류가 발생했습니다</h1>
          <p className='mb-8 text-gray-400'>{errorMessage}</p>
          <Link
            to='/'
            className='focus-ring relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-center font-normal text-base text-gray backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white'
          >
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 로딩 상태
  if (showSkeleton) {
    return <ProjectPageSkeleton onBack={() => navigate('/')} />;
  }

  // 프로젝트가 없는 경우 메인으로 리다이렉트
  if (!project) {
    return;
  }

  const details = project.details;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-project-background'>
      <div className='w-full max-w-xl px-8 py-4'>
        <Link
          to='/'
          className='focus-ring mb-8 flex w-fit cursor-pointer items-center gap-0.5 text-gray-400 text-sm hover:text-blue'
          aria-label='메인페이지로 돌아가기'
        >
          <IoArrowBackOutline className='text-lg' /> 메인으로 돌아가기
        </Link>

        <article className='flex flex-col items-start gap-6'>
          <div>
            <h1 className='mb-1 font-bold text-2xl text-white sm:text-3xl'>{project.title}</h1>
            <p className='text-gray text-sm'>{project.summary}</p>
          </div>

          <div className='w-full space-y-2'>
            <p className='whitespace-pre-line text-gray text-md leading-relaxed'>
              {project.description}
            </p>
          </div>

          <TechnologyStack technologies={project.technologies} />
          <ProjectInfo project={project} />
          <ProjectDetailList details={details} />
        </article>
      </div>
    </div>
  );
};
