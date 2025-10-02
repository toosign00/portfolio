import { useEffect, useState } from 'react';
import type { IntroProps } from '@/types/intro.types';
import { BackgroundParallax } from './components/BackgroundParallax';
import { FloatingElements } from './components/FloatingElements';
import { IntroContent } from './components/IntroContent';
import { ScrollIndicator } from './components/ScrollIndicator';

export function Intro({ className }: IntroProps) {
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 80px 이상이면 인디케이터 숨김
      setIsIndicatorVisible(window.scrollY < 80);
    };

    // 초기 상태 확인
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id='intro'
      className={`relative flex min-h-screen items-start justify-center overflow-hidden px-8 pt-24 pb-32 md:pb-24 ${className || ''}`}
    >
      <BackgroundParallax />
      <FloatingElements />
      <IntroContent />
      <ScrollIndicator isVisible={isIndicatorVisible} />
    </section>
  );
}
