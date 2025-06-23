// import { SectionLayout } from '@/layout/SectionLayout';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { ScrollIndicator } from './components/ScrollIndicator';
import { IntroContent } from './components/IntroContent';
import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import type { IntroProps } from '@/types/intro.type';

export function Intro({ className }: IntroProps) {
  const scrollY = useScrollOptimized();

  return (
    <section
      id="intro"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-8 pb-32 md:pb-24 ${className || ''}`}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator scrollY={scrollY} />
    </section>
  );
}
