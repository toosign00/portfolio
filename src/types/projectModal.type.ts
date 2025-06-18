import type { Project, ProjectDetail } from '@/types/projects.type';

export interface ModalHeaderProps {
  project: Project;
  onClose: () => void;
}

export interface ProjectDetailListProps {
  details: ProjectDetail[] | undefined;
}

export interface ProjectInfoProps {
  project: Project;
}

export interface TechnologyStackProps {
  technologies: string[];
}
