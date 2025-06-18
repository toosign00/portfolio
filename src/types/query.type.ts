import type { Project } from '@/types/projects.type';
import type { ProjectCardData } from '@/types/projectCard.type';

// 쿼리 결과 타입
export interface QueryResult<T> {
  data: T | undefined;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  isSuccess: boolean;
}

// 프로젝트 쿼리 결과 타입
export interface ProjectQueryResult extends QueryResult<Project> {
  data: Project | undefined;
}

export interface ProjectsQueryResult extends QueryResult<ProjectCardData[]> {
  data: ProjectCardData[];
}

// UI 상태와 결합된 프로젝트 목록 결과
export interface ProjectsWithUIResult extends ProjectsQueryResult {
  showAll: boolean;
  setShowAll: (show: boolean) => void;
  displayedProjects: ProjectCardData[];
  hasMoreProjects: boolean;
}

// 스켈레톤 로딩 상태
export interface SkeletonLoadingState {
  showSkeleton: boolean;
  isLoading: boolean;
  hasError: boolean;
  isDataComplete: boolean;
}

// 프로젝트 유효성 검사 결과
export interface ProjectValidationResult {
  isValid: boolean;
  missingFields: string[];
}
