import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { Button } from '@/components/Button/Button';
import type { Project } from '@/data/projectsData';
import { ProjectCard } from './components/ProjectCard';
import { useProjects } from '@/hooks/useProjects';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProjectPath } from '@/constants/routes.constants';

export const Portfolio = () => {
  const { displayedProjects, setShowAll, hasMoreProjects } = useProjects();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = (project: Project) => {
    navigate(getProjectPath(project.id), { state: { background: location } });
  };

  return (
    <SectionLayout id="projects">
      <SectionHeader
        title="프로젝트"
        description="새로운 기술을 학습하고 구현한 주요 프로젝트입니다."
      />
      <div className="container mx-auto">
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
      </div>
    </SectionLayout>
  );
};
