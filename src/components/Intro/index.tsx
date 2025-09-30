import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import type { IntroProps } from '@/types/intro.types';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { IntroContent } from './components/IntroContent';
import { ScrollIndicator } from './components/ScrollIndicator';

export function Intro({ className }: IntroProps) {
  const scrollY = useScrollOptimized();

  return (
    <section
      id='intro'
      className={`relative flex min-h-screen items-start justify-center overflow-hidden px-8 pt-24 pb-32 md:pb-24 ${className || ''}`}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator scrollY={scrollY} />
    </section>
  );
}
