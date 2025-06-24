import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { Button } from '@/components/Button';
import type { ProjectCardData } from '@/types/projectCard.type';
import { ProjectCard } from './components/ProjectCard';
import { useProjectsWithUI } from '@/hooks/useProjectsQuery';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectPath } from '@/constants/routes.constants';
import { IoReload } from 'react-icons/io5';

export const Portfolio = () => {
  const { displayedProjects, setShowAll, hasMoreProjects, loading, error } = useProjectsWithUI();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = (project: ProjectCardData) => {
    navigate(getProjectPath(project.id), { state: { background: location } });
  };

  return (
    <SectionLayout id="projects">
      <SectionHeader
        title="프로젝트"
        description="새로운 기술을 학습하고 구현한 주요 프로젝트입니다."
      />
      <div className="container mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <IoReload className="mb-4 animate-spin text-4xl text-gray-400" />
            <p className="text-gray-400">프로젝트를 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="mb-4 text-red-500">프로젝트를 불러오는데 실패했습니다</p>
            <p className="text-sm text-gray-400">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
            {hasMoreProjects && (
              <div className="mt-12 text-center">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setShowAll(true)}
                  className="mx-auto"
                >
                  더 많은 프로젝트 보기
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </SectionLayout>
  );
};
