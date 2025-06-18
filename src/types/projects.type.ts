interface Image {
  url: string;
  alt: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  type: 'Team' | 'Personal';
  teamDetail?: string;
  role: string;
  summary: string;
  description: string;
  duration: string;
  technologies: string[];
  githubUrl: string;
  githubAriaLabel?: string;
  deployUrl?: string;
  deployAriaLabel?: string;
  thumbnail: string;
  images: Image[];
  memberCount?: number;
  period?: string;
  blogLink?: string;
  details?: ProjectDetail[];
  color?: 'blue' | 'pink' | 'yellow';
  createdAt?: string;
  updatedAt?: string;
}
