import { SectionLayout } from '@/layout/SectionLayout';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { IntroContent } from './components/IntroContent';
import { ScrollIndicator } from './components/ScrollIndicator';
import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import { useMemo } from 'react';

interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  const scrollY = useScrollOptimized();
  const showScrollIndicator = useMemo<boolean>(() => scrollY <= 50, [scrollY]);

  return (
    <SectionLayout
      id="intro"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden ${className || ''}`}
      useAnimation={false}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator show={showScrollIndicator} />
    </SectionLayout>
  );
}
