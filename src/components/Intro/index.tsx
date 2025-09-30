// import { SectionLayout } from '@/layout/SectionLayout';

import { useTranslation } from 'react-i18next';
import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import type { IntroProps } from '@/types/intro.types';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { IntroContent } from './components/IntroContent';
import { ScrollIndicator } from './components/ScrollIndicator';

export function Intro({ className }: IntroProps) {
  const { i18n } = useTranslation();
  const scrollY = useScrollOptimized();

  return (
    <section
      id='intro'
      className={`${i18n.resolvedLanguage === 'ja' || i18n.resolvedLanguage === 'en' ? 'items-start pt-24' : 'items-center'} relative flex min-h-screen justify-center overflow-hidden px-8 pb-32 md:pb-24 ${className || ''}`}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator scrollY={scrollY} />
    </section>
  );
}
