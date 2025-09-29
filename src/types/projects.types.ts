export interface MultiLanguageText {
  ko: string;
  en?: string;
  ja?: string;
}

export interface ProjectDetail {
  title: MultiLanguageText;
  description: {
    ko: string[];
    en?: string[];
    ja?: string[];
  };
  image?: string;
  image_alt?: MultiLanguageText | null;
}

export interface Project {
  id: string;
  title: MultiLanguageText;
  type: 'Team' | 'Personal';
  teamDetail?: MultiLanguageText | null;
  summary: MultiLanguageText;
  description: MultiLanguageText;
  timeFrame: MultiLanguageText;
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
