import { useState, useEffect, useCallback, useRef } from 'react';
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
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  const calculateActiveSection = useCallback(() => {
    // 네비게이션 중이면 스크롤 기반 활성화 무시
    if (isNavigatingRef.current) {
      return;
    }

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

  // 수동으로 active 상태를 설정하는 함수 (버튼 클릭 시 사용)
  const setActiveManual = useCallback(
    (label: string) => {
      // 즉시 상태 변경
      setActive(label);

      // 네비게이션 플래그 설정
      isNavigatingRef.current = true;

      // 기존 타이머 정리
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      // 스크롤 애니메이션 완료 후 플래그 해제
      navigationTimeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
        // 플래그 해제 후 현재 위치 기준으로 다시 계산
        calculateActiveSection();
      }, 1200); // 스크롤 애니메이션 시간보다 약간 길게
    },
    [calculateActiveSection],
  );

  useEffect(() => {
    const throttledHandleScroll = throttle(calculateActiveSection, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    calculateActiveSection();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      throttledHandleScroll.cancel();
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [calculateActiveSection]);

  return {
    active,
    setActive: setActiveManual,
    isNavigating: isNavigatingRef.current,
  };
};
