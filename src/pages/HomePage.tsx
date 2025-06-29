import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Features } from '@/components/Features';
import { Intro } from '@/components/Intro';
import { Portfolio } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export function HomePage() {
  return (
    <>
      <Intro />
      <Features />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
    </>
  );
}
