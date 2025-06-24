import { useParams, useNavigate } from 'react-router-dom';
import { TechnologyStack } from './TechnologyStack';
import { ProjectInfo } from './ProjectInfo';
import { ProjectDetailList } from './ProjectDetailList';
import { IoArrowBackOutline, IoSearch } from 'react-icons/io5';
import { Button } from '@/components/Button';
import { ProjectPageSkeleton } from '@/components/Skeleton/ProjectPageSkeleton';
import { useProject } from '@/hooks/useProjectsQuery';
import { useProjectSkeletonLoading } from '@/hooks/useSkeletonLoading';
import { normalizeErrorMessage, isNotFoundError } from '@/utils/errorUtils';
import { NotFoundPage } from '@/pages/NotFoundPage';

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
      <div className="bg-project-background flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <IoSearch className="mx-auto mb-4 text-6xl text-gray-400" />
          <h1 className="mb-4 text-2xl font-bold text-white">오류가 발생했습니다</h1>
          <p className="mb-8 text-gray-400">{errorMessage}</p>
          <Button variant="secondary" size="md" onClick={() => navigate('/')}>
            메인으로 돌아가기
          </Button>
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
    <div className="bg-project-background flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-xl px-8 py-4">
        <button
          className="hover:text-blue mb-8 flex cursor-pointer items-center gap-0.5 text-sm text-gray-400"
          onClick={() => navigate('/')}
          aria-label="메인페이지로 돌아가기"
        >
          <IoArrowBackOutline className="text-lg" /> 메인으로 돌아가기
        </button>

        <article className="flex flex-col items-start gap-6">
          <div>
            <h1 className="mb-1 text-2xl font-bold text-white sm:text-3xl">{project.title}</h1>
            <p className="text-gray text-sm">{project.summary}</p>
          </div>

          <div className="w-full space-y-2">
            <p className="text-gray text-sm leading-relaxed">{project.description}</p>
          </div>

          <TechnologyStack technologies={project.technologies} />
          <ProjectInfo project={project} />
          <ProjectDetailList details={details} />
        </article>
      </div>
    </div>
  );
};
