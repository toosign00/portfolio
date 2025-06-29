import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { QUERY_KEYS } from '@/lib/queryClient';
import { fetchProjectById, fetchProjects, ProjectServiceError } from '@/services/projectService';
import type { Project } from '@/types/projects.type';

// 기본 프로젝트 목록 조회 훅 (화면에 표시할 기본 정보만)
export const useProjects = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROJECTS.ALL,
    queryFn: fetchProjects,
    retry: (failureCount, error) => {
      // ProjectServiceError의 경우 재시도하지 않음
      if (error instanceof ProjectServiceError && error.code === 'NOT_FOUND') {
        return false;
      }
      return failureCount < 2;
    },
  });
};

// 개별 프로젝트 상세 조회 훅 (모달에서 사용)
export const useProject = (id: string | undefined) => {
  return useQuery({
    queryKey: QUERY_KEYS.PROJECTS.DETAIL(id || ''),
    queryFn: () => {
      if (!id) {
        throw new ProjectServiceError('프로젝트 ID가 필요합니다.');
      }
      return fetchProjectById(id);
    },
    enabled: !!id, // id가 있을 때만 실행
    retry: (failureCount, error) => {
      // ProjectServiceError의 경우 재시도하지 않음
      if (error instanceof ProjectServiceError && error.code === 'NOT_FOUND') {
        return false;
      }
      return failureCount < 2;
    },
  });
};

// 프로젝트 목록 + UI 상태 관리 훅
export const useProjectsWithUI = () => {
  const { data: projects = [], isLoading: loading, error } = useProjects();
  const [showAll, setShowAll] = useState(false);

  // 메모이제이션을 통한 성능 최적화
  const displayedProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 3);
  }, [projects, showAll]);

  const hasMoreProjects = useMemo(() => {
    return !showAll && projects.length > 3;
  }, [projects.length, showAll]);

  // 에러 메시지 정규화
  const normalizedError = useMemo(() => {
    if (!error) return null;

    if (error instanceof ProjectServiceError) {
      return error.message;
    }

    return error.message || '알 수 없는 오류가 발생했습니다.';
  }, [error]);

  return {
    projects,
    loading,
    error: normalizedError,
    showAll,
    setShowAll,
    displayedProjects,
    hasMoreProjects,
  };
};

// 프로젝트 데이터 유효성 검사 훅
export const useProjectValidation = (project: Project | undefined) => {
  return useMemo(() => {
    if (!project) return { isValid: false, missingFields: [] };

    const requiredFields = ['title', 'description', 'technologies', 'details'] as const;

    const missingFields = requiredFields.filter((field) => {
      if (field === 'technologies') {
        return !project.technologies || project.technologies.length === 0;
      }
      if (field === 'details') {
        return !project.details || project.details.length === 0;
      }
      return !project[field];
    });

    return {
      isValid: missingFields.length === 0,
      missingFields,
    };
  }, [project]);
};
