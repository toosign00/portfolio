import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QUERY_KEYS } from '@/constants/queryKeys.constants';
import { fetchProjectById, fetchProjects, ProjectServiceError } from '@/services/projectService';
import type { LanguageCode, Project } from '@/types/projects.types';

// 기본 프로젝트 목록 조회 훅 (화면에 표시할 기본 정보만)
export const useProjects = () => {
  const { i18n } = useTranslation();
  const languageCode = (i18n.resolvedLanguage || 'ko') as LanguageCode;

  return useQuery({
    queryKey: [...QUERY_KEYS.PROJECTS.ALL, languageCode],
    queryFn: () => fetchProjects(languageCode),
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
  const { i18n } = useTranslation();
  const languageCode = (i18n.resolvedLanguage || 'ko') as LanguageCode;

  return useQuery({
    queryKey: [...QUERY_KEYS.PROJECTS.DETAIL(id || ''), languageCode],
    queryFn: () => {
      if (!id) {
        throw new ProjectServiceError('프로젝트 ID가 필요합니다.');
      }
      return fetchProjectById(id, languageCode);
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
  const { t } = useTranslation();
  const { data: projects = [], isLoading: loading, error } = useProjects();
  const [showAll, setShowAll] = useState(false);

  // 누적 방식: showAll이 false면 처음 3개, true면 전체
  const displayedProjects = projects.slice(0, showAll ? projects.length : 3);

  const hasMoreProjects = !showAll && projects.length > 3;

  // 에러 메시지 정규화
  const normalizedError = !error
    ? null
    : error instanceof ProjectServiceError
      ? error.message
      : error.message || t('common.unknownError');

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
};
