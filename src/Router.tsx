import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ProjectModal } from '@/components/ProjectModal';
import { ProjectPage } from '@/components/ProjectModal/components/ProjectPage';
import { ROUTES } from '@/constants/routes.constants';
import { ErrorBoundary } from '@/error/ErrorBoundary';
import { useProjectPageDetection } from '@/hooks/useProjectPageDetection';
import DefaultLayout from '@/layout/DefaultLayout';
import MinimalLayout from '@/layout/MinimalLayout';
import { GuestbookPage } from '@/pages/GuestbookPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function Router() {
  const { hasBackground, currentLocation } = useProjectPageDetection();

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
          <Route path={ROUTES.GUESTBOOK} element={<GuestbookPage />} />
          <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectPage />} />
          <Route path='*' element={<NotFoundPage />} />
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
