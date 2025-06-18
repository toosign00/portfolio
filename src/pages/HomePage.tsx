import { Intro } from '@/components/Intro';
import { Features } from '@/components/Features';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

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
