import type { Project } from '@/data/projectsData';

export interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}
