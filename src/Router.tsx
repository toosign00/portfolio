import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useTranslation } from 'react-i18next';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ProjectPageSkeleton } from '@/components/ui/Skeleton/ProjectPageSkeleton';
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
const ProjectModal = React.lazy(() =>
  import('@/components/ProjectModal').then((module) => ({ default: module.ProjectModal }))
);

// 언어 설정 컴포넌트
function LanguageWrapper({ lang }: { lang: string }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // pathname이 '/'일 때만 리다이렉트 로직 실행
    if (location.pathname !== '/') {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
      return;
    }

    // 한국어 루트 경로에서만 브라우저 언어 체크
    if (lang === 'ko') {
      const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
      if (browserLang === 'en' || browserLang === 'ja') {
        void navigate(`/${browserLang}`, { replace: true });
        return;
      }
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, location.pathname, navigate]);

  return <Outlet />;
}

// 라우트 구성 함수
function createLanguageRoutes(langPrefix: string, lang: string) {
  const basePath = langPrefix === '' ? '' : `/${langPrefix}`;

  return (
    <Route key={lang} path={basePath} element={<LanguageWrapper lang={lang} />}>
      {/* 헤더/푸터 포함 레이아웃 */}
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route index element={<HomePage />} />
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
          path='guestbook'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GuestbookPage />
            </Suspense>
          }
        />
        <Route
          path='projects/:id'
          element={
            <Suspense fallback={<ProjectPageSkeleton onBack={() => window.history.back()} />}>
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
    </Route>
  );
}

// Router 컴포넌트
export function Router() {
  const { hasBackground, currentLocation } = useProjectPageDetection();
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <ErrorBoundary>
      <Routes location={currentLocation}>
        {/* 한국어 - 기본 경로 */}
        {createLanguageRoutes('', 'ko')}

        {/* 일본어 */}
        {createLanguageRoutes('ja', 'ja')}

        {/* 영어 */}
        {createLanguageRoutes('en', 'en')}
      </Routes>

      {/* 모달 라우트 */}
      {hasBackground && (
        <Routes>
          <Route
            path='/projects/:id'
            element={
              <Suspense fallback={null}>
                <ProjectModal />
              </Suspense>
            }
          />
          <Route
            path='/ja/projects/:id'
            element={
              <Suspense fallback={null}>
                <ProjectModal />
              </Suspense>
            }
          />
          <Route
            path='/en/projects/:id'
            element={
              <Suspense fallback={null}>
                <ProjectModal />
              </Suspense>
            }
          />
        </Routes>
      )}

      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}
