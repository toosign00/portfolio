import { lazy } from 'react';

// 지연 로딩할 컴포넌트들
export const LazyProjectPage = lazy(() =>
  import('@/components/ProjectModal/components/ProjectPage').then((module) => ({
    default: module.ProjectPage,
  })),
);
