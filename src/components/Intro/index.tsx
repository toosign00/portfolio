// import { SectionLayout } from '@/layout/SectionLayout';

import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import type { IntroProps } from '@/types/intro.type';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { IntroContent } from './components/IntroContent';
import { ScrollIndicator } from './components/ScrollIndicator';

export function Intro({ className }: IntroProps) {
  const scrollY = useScrollOptimized();

  return (
    <section
      id='intro'
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-8 pb-32 md:pb-24 ${className || ''}`}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator scrollY={scrollY} />
    </section>
  );
}
