import { supabase } from '@/lib/supabase';
import type { ProjectCardData } from '@/types/projectCard.types';
import type {
  LanguageCode,
  Project,
  ProjectDetailResponse,
  ProjectWithTranslations,
} from '@/types/projects.types';

// 에러 타입 정의
export class ProjectServiceError extends Error {
  public readonly code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = 'ProjectServiceError';
    this.code = code;
  }
}

// 프로젝트 목록 조회 (기본 정보만)
export const fetchProjects = async (languageCode: LanguageCode): Promise<ProjectCardData[]> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        id,
        type,
        technologies,
        thumbnail,
        color,
        project_translations!inner(
          title,
          summary
        )
      `)
      .eq('is_visible', true)
      .eq('project_translations.language_code', languageCode)
      .order('created_at', { ascending: false });

    if (error) {
      throw new ProjectServiceError(
        `Failed to retrieve project list: ${error.message}`,
        error.code
      );
    }

    if (!data) {
      return [];
    }

    // 데이터 변환
    const flattenedData = data.map((project: ProjectWithTranslations) => {
      const translation = Array.isArray(project.project_translations)
        ? project.project_translations[0]
        : project.project_translations;

      return {
        id: project.id,
        type: project.type,
        title: translation?.title || '',
        summary: translation?.summary || '',
        technologies: project.technologies,
        thumbnail: project.thumbnail,
        color: project.color,
      };
    });

    return flattenedData;
  } catch (error) {
    console.error('Failed to retrieve project list:', error);
    if (error instanceof ProjectServiceError) {
      throw error;
    }
    throw new ProjectServiceError(
      error instanceof Error ? error.message : 'An unknown error occurred.'
    );
  }
};

// 개별 프로젝트 상세 조회
export const fetchProjectById = async (
  id: string,
  languageCode: LanguageCode
): Promise<Project> => {
  try {
    if (!id) {
      throw new ProjectServiceError('Project ID is required.');
    }

    const { data, error } = await supabase
      .from('projects')
      .select(`
        id,
        type,
        time_frame,
        technologies,
        github_url,
        deploy_url,
        member_count,
        color,
        thumbnail,
        is_visible,
        created_at,
        updated_at,
        project_translations!inner(
          title,
          summary,
          description,
          team_detail,
          details
        )
      `)
      .eq('id', id)
      .eq('is_visible', true)
      .eq('project_translations.language_code', languageCode)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new ProjectServiceError(`Project not found: ${id}`, 'NOT_FOUND');
      }
      throw new ProjectServiceError(
        `Failed to retrieve project detail: ${error.message}`,
        error.code
      );
    }

    if (!data) {
      throw new ProjectServiceError(`Project not found: ${id}`, 'NOT_FOUND');
    }

    // 데이터 변환
    const projectData = data as ProjectDetailResponse;
    const translation = Array.isArray(projectData.project_translations)
      ? projectData.project_translations[0]
      : projectData.project_translations;
    const timeFrame = projectData.time_frame?.[languageCode] || '';

    const flattenedData: Project = {
      id: projectData.id,
      type: projectData.type,
      title: translation.title,
      summary: translation.summary,
      description: translation.description || '',
      teamDetail: translation.team_detail,
      timeFrame,
      technologies: projectData.technologies,
      githubUrl: projectData.github_url,
      deployUrl: projectData.deploy_url,
      memberCount: projectData.member_count,
      color: projectData.color,
      thumbnail: projectData.thumbnail,
      details: translation.details,
      isVisible: projectData.is_visible,
      createdAt: projectData.created_at,
      updatedAt: projectData.updated_at,
    };

    return flattenedData;
  } catch (error) {
    console.error('Failed to retrieve project detail:', { projectId: id }, error);
    if (error instanceof ProjectServiceError) {
      throw error;
    }
    throw new ProjectServiceError(
      error instanceof Error ? error.message : 'An unknown error occurred.'
    );
  }
};
