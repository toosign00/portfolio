import '@/assets/styles/global.css';
import { NavBar } from '@/components/NavBar';
import { Intro } from '@/components/Intro';
import { Features } from '@/components/Features';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Features />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
