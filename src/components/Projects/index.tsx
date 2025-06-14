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
    <SectionLayout id="projects">
      <SectionHeader
        title="프로젝트"
        description="새로운 기술을 학습하고 구현한 주요 프로젝트입니다."
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
