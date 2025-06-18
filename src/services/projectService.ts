import { supabase } from '@/lib/supabase';
import type { Project } from '@/data/projects.data';
import type { ProjectCardData } from '@/types/projectCard.type';

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
    console.log('📦 프로젝트 목록 조회 시작');

    const { data, error } = await supabase
      .from('projects')
      .select('id, title, type, summary, technologies, thumbnail, color')
      .order('created_at', { ascending: false });

    if (error) {
      throw new ProjectServiceError(`프로젝트 목록 조회 실패: ${error.message}`, error.code);
    }

    console.log(`✅ 프로젝트 목록 조회 완료: ${data?.length || 0}개`);
    return data || [];
  } catch (error) {
    console.error('❌ 프로젝트 목록 조회 중 오류:', error);
    if (error instanceof ProjectServiceError) {
      throw error;
    }
    throw new ProjectServiceError(
      error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    );
  }
};

// 개별 프로젝트 상세 조회
export const fetchProjectById = async (id: string): Promise<Project> => {
  try {
    if (!id) {
      throw new ProjectServiceError('프로젝트 ID가 필요합니다.');
    }

    console.log(`📦 프로젝트 상세 조회 시작: ${id}`);

    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new ProjectServiceError(`프로젝트를 찾을 수 없습니다: ${id}`, 'NOT_FOUND');
      }
      throw new ProjectServiceError(`프로젝트 상세 조회 실패: ${error.message}`, error.code);
    }

    if (!data) {
      throw new ProjectServiceError(`프로젝트를 찾을 수 없습니다: ${id}`, 'NOT_FOUND');
    }

    console.log(`✅ 프로젝트 상세 조회 완료: ${id}`);
    return data;
  } catch (error) {
    console.error(`❌ 프로젝트 상세 조회 중 오류 (${id}):`, error);
    if (error instanceof ProjectServiceError) {
      throw error;
    }
    throw new ProjectServiceError(
      error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    );
  }
};
