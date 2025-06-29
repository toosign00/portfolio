import { useEffect, useState } from 'react';
import { useProjectValidation } from '@/hooks/useProjectsQuery';
import type { Project } from '@/types/projects.type';

interface UseProjectSkeletonLoadingProps {
  isPending: boolean;
  project: Project | undefined;
  error?: Error | null;
  minDuration?: number; // 최소 스켈레톤 표시 시간 (ms)
}

export function useProjectSkeletonLoading({
  isPending,
  project,
  error,
  minDuration = 1000,
}: UseProjectSkeletonLoadingProps) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  // 프로젝트 데이터 유효성 검사
  const { isValid: isProjectDataComplete } = useProjectValidation(project);

  // 스켈레톤 표시 조건 - 에러가 있으면 스켈레톤을 표시하지 않음
  const shouldShowSkeleton = (isPending || !isProjectDataComplete) && !error;

  useEffect(() => {
    if (shouldShowSkeleton) {
      // 로딩 시작 시점 기록
      if (!loadingStartTime) {
        setLoadingStartTime(Date.now());
      }
      setShowSkeleton(true);
    } else {
      // 데이터 로딩 완료 또는 에러 발생
      if (loadingStartTime) {
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, minDuration - elapsedTime);

        if (remainingTime > 0 && !error) {
          // 최소 표시 시간이 남아있고 에러가 없으면 타이머 설정
          const timer = setTimeout(() => {
            setShowSkeleton(false);
            setLoadingStartTime(null);
          }, remainingTime);
          return () => clearTimeout(timer);
        }
        // 최소 표시 시간이 지났거나 에러가 있으면 즉시 숨김
        setShowSkeleton(false);
        setLoadingStartTime(null);
      } else {
        // 캐시된 데이터이거나 에러인 경우 즉시 표시
        setShowSkeleton(false);
      }
    }
  }, [shouldShowSkeleton, loadingStartTime, minDuration, error]);

  return {
    showSkeleton,
    isLoading: isPending,
    hasError: !!error,
    isDataComplete: isProjectDataComplete,
  };
}
