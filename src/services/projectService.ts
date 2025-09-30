import { supabase } from '@/lib/supabase';
import type { ProjectCardData } from '@/types/projectCard.types';
import type { Project } from '@/types/projects.types';
import { convertProjectData, convertProjectsData } from '@/utils/caseConverter';

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
export const fetchProjects = async (): Promise<ProjectCardData[]> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('id, title, type, summary, technologies, thumbnail, color')
      .eq('is_visible', true)
      .order('created_at', { ascending: false });

    if (error) {
      throw new ProjectServiceError(
        `Failed to retrieve project list: ${error.message}`,
        error.code
      );
    }

    // snake_case를 camelCase로 변환
    const convertedData = convertProjectsData(data || []) as ProjectCardData[];

    return convertedData;
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
export const fetchProjectById = async (id: string): Promise<Project> => {
  try {
    if (!id) {
      throw new ProjectServiceError('Project ID is required.');
    }

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .eq('is_visible', true)
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

    // snake_case를 camelCase로 변환
    const convertedData = convertProjectData(data) as Project;

    return convertedData;
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
