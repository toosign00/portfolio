import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProjectModal } from '@/components/ProjectModal';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ProjectPageSkeleton } from '@/components/ui/Skeleton/ProjectPageSkeleton';
import { ROUTES } from '@/constants/routes.constants';
import { ErrorBoundary } from '@/error/ErrorBoundary';
import { useProjectPageDetection } from '@/hooks/useProjectPageDetection';
import DefaultLayout from '@/layout/DefaultLayout';
import MinimalLayout from '@/layout/MinimalLayout';
import { HomePage } from '@/pages/HomePage';

// 컴포넌트 Lazy Loading, Suspense 사용
const GuestbookPage = React.lazy(() =>
  import('@/pages/GuestbookPage').then((module) => ({ default: module.GuestbookPage }))
);
const ProjectPage = React.lazy(() =>
  import('@/pages/ProjectPage').then((module) => ({ default: module.ProjectPage }))
);
const NotFoundPage = React.lazy(() =>
  import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

// Router 컴포넌트
export function Router() {
  const { hasBackground, currentLocation } = useProjectPageDetection();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <ErrorBoundary>
      <Routes location={currentLocation}>
        {/* 헤더/푸터 포함 레이아웃 */}
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Route>

        {/* MinimalLayout - 방명록, 프로젝트, 404 Pages  */}
        <Route
          element={
            <MinimalLayout>
              <Outlet />
            </MinimalLayout>
          }
        >
          <Route
            path={ROUTES.GUESTBOOK}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GuestbookPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PROJECT_DETAIL}
            element={
              <Suspense fallback={<ProjectPageSkeleton onBack={() => navigate('/')} />}>
                <ProjectPage />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>

      {/* 모달 라우트는 기존대로 */}
      {hasBackground && (
        <Routes>
          <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectModal />} />
        </Routes>
      )}

      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}
