export interface ProjectDetail {
  title: string;
  description: string | string[];
  image?: string;
  image_alt?: string;
}

export interface Project {
  id: string;
  title: string;
  type: 'Team' | 'Personal';
  teamDetail?: string;
  summary: string;
  description: string;
  timeFrame: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
  thumbnail: string;
  memberCount?: number;
  details?: ProjectDetail[];
  color?: 'blue' | 'pink' | 'yellow';
  createdAt?: string;
  updatedAt?: string;
  isVisible?: boolean;
}
