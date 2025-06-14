import { useState } from 'react';
import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { Button } from '@/components/common/Button';
import { ProjectModal } from '../ProjectModal';
import type { Project } from '@/data/projectsData';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard } from './components/ProjectCard';
import { useProjects } from '@/hooks/useProjects';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { displayedProjects, setShowAll, hasMoreProjects } = useProjects();

  const handleCloseModal = () => {
    setTimeout(() => setSelectedProject(null), 50);
  };

  return (
    <SectionLayout id="portfolio">
      <SectionHeader
        title="프로젝트 포트폴리오"
        description="다양한 기술 스택과 도메인에서의 프로젝트 경험을 소개합니다."
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
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
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </SectionLayout>
  );
};
