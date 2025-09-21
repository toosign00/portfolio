export interface ProjectCardProps {
  project: ProjectCardData;
  onClick: (project: ProjectCardData) => void;
}

import type { ProjectThumbnail } from './projects.types';

export interface ProjectCardData {
  id: string;
  title: string;
  type: 'Team' | 'Personal';
  summary: string;
  technologies: string[];
  thumbnail: ProjectThumbnail;
  color?: 'blue' | 'pink' | 'yellow';
}
