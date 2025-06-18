export interface ProjectCardProps {
  project: ProjectCardData;
  onClick: (project: ProjectCardData) => void;
}

export interface ProjectCardData {
  id: string;
  title: string;
  type: 'Team' | 'Personal';
  summary: string;
  technologies: string[];
  thumbnail: string;
  color?: 'blue' | 'pink' | 'yellow';
}
