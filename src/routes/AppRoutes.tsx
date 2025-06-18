import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorBoundary } from '@/routes/ErrorBoundary';
import { LazyProjectPage } from '@/routes/lazyComponents';
import { ProjectModal } from '@/components/ProjectModal';
import { useProjectPageDetection } from '@/hooks/useProjectPageDetection';
import { ROUTES } from '@/constants/routes.constants';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export function AppRoutes() {
  const { hasBackground, currentLocation } = useProjectPageDetection();

  return (
    <ErrorBoundary>
      <main>
        <Routes location={currentLocation}>
          <Route
            path={ROUTES.HOME}
            element={
              <>
                <NavBar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path={ROUTES.PROJECT_DETAIL}
            element={
              <Suspense
                fallback={
                  <div className="flex min-h-screen items-center justify-center bg-black text-white">
                    로딩 중...
                  </div>
                }
              >
                <LazyProjectPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* 모달 라우트 */}
        {hasBackground && (
          <Routes>
            <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectModal />} />
          </Routes>
        )}
      </main>

      {/* Analytics는 항상 렌더링하되 내부에서 처리 */}
      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}
