import { lazy, Suspense } from 'react';
import { Features } from '@/components/Features';
import { Intro } from '@/components/Intro';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { ContactSkeleton } from '@/components/ui/Skeleton/ContactSkeleton';
import { EducationSkeleton } from '@/components/ui/Skeleton/EducationSkeleton';

const Education = lazy(() =>
  import('@/components/Education').then((module) => ({ default: module.Education }))
);
const Contact = lazy(() =>
  import('@/components/Contact').then((module) => ({ default: module.Contact }))
);

export function HomePage() {
  return (
    <>
      <Intro />
      <Features />
      <Skills />
      <Projects />
      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
}
