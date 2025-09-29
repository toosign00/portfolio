import type { MultiLanguageText } from '@/types/projects.types';

export interface ProjectCardProps {
  project: ProjectCardData;
  onClick: (project: ProjectCardData) => void;
}
export interface ProjectCardData {
  id: MultiLanguageText;
  title: MultiLanguageText;
  type: 'Team' | 'Personal';
  summary: MultiLanguageText;
  technologies: string[];
  thumbnail: string;
  color?: 'blue' | 'pink' | 'yellow';
}
