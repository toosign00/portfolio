export type LanguageCode = 'ko' | 'en' | 'ja';

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

// Supabase 응답 타입
export interface ProjectTranslationResponse {
  title: string;
  summary: string;
  description?: string;
  team_detail?: string;
  details?: ProjectDetail[];
}

export interface ProjectWithTranslations {
  id: string;
  type: 'Team' | 'Personal';
  technologies: string[];
  thumbnail: string;
  color?: 'blue' | 'pink' | 'yellow';
  project_translations: ProjectTranslationResponse | ProjectTranslationResponse[];
}

export interface ProjectDetailResponse
  extends Omit<ProjectWithTranslations, 'project_translations'> {
  time_frame?: Record<LanguageCode, string>;
  github_url: string;
  deploy_url?: string;
  member_count?: number;
  is_visible?: boolean;
  created_at?: string;
  updated_at?: string;
  project_translations: ProjectTranslationResponse | ProjectTranslationResponse[];
}
