import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'es-toolkit';

interface SectionPosition {
  top: number;
  bottom: number;
  label: string;
}

interface NavItem {
  label: string;
  sectionIds: string[];
}

export const useScrollSection = (navItems: NavItem[]) => {
  const [active, setActive] = useState<string | null>(null);

  const calculateActiveSection = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const viewportCenter = scrollPosition + viewportHeight / 2;

    const sectionPositions: SectionPosition[] = navItems.flatMap((item) => {
      return item.sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            top: rect.top + scrollPosition,
            bottom: rect.top + rect.height + scrollPosition,
            label: item.label,
          };
        })
        .filter(Boolean) as SectionPosition[];
    });

    // 현재 뷰포트에 보이는 섹션이 있는지 확인
    const visibleSections = sectionPositions.filter(
      (section) => section.top <= viewportCenter && section.bottom >= viewportCenter,
    );

    // 보이는 섹션이 없으면 null 반환
    if (visibleSections.length === 0) {
      setActive(null);
      return;
    }

    let closestSection = null;
    let minDistance = Infinity;

    visibleSections.forEach((section) => {
      const sectionCenter = (section.top + section.bottom) / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section.label;
      }
    });

    setActive(closestSection);
  }, [navItems]);

  useEffect(() => {
    const throttledHandleScroll = throttle(calculateActiveSection, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    calculateActiveSection();
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [calculateActiveSection]);

  return { active, setActive };
};
