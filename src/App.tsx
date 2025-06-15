import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '@/assets/styles/global.css';
import { NavBar } from '@/components/NavBar';
import { Intro } from '@/components/Intro';
import { Features } from '@/components/Features';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <main>
        <Features />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
