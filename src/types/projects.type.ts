interface Image {
  url: string;
  alt: string;
}

interface Link {
  url: string;
  ariaLabel?: string;
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
  github: Link;
  deploy?: Link;
  thumbnail: string;
  images: Image[];
  memberCount?: number;
  period?: string;
  blogLink?: string;
  details?: ProjectDetail[];
  color?: 'blue' | 'pink' | 'yellow';
}
