import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Intro } from '@/components/Intro';
import { Features } from '@/components/Features';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';
import { ProjectPage } from '@/components/ProjectModal/components/ProjectPage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function AppRoutes() {
  const location = useLocation();
  const state = location.state as { background?: Location };
  const isProjectPage = (state?.background || location).pathname.startsWith('/projects/');

  return (
    <>
      {!isProjectPage && <NavBar />}
      <main>
        <Routes location={state?.background || location}>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Features />
                <Skills />
                <Portfolio />
                <Education />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        {state?.background && (
          <Routes>
            <Route path="/projects/:id" element={<ProjectModal />} />
          </Routes>
        )}
      </main>
      {!isProjectPage && <Footer />}
      {!isProjectPage && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
