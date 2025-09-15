import { throttle } from 'es-toolkit';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { NavItem } from '@/types/navigation.types';

interface SectionPosition {
  top: number;
  bottom: number;
  label: string;
}

const SCROLL_ANIMATION_TIMEOUT = 1200; // 스크롤 애니메이션 시간보다 약간 길게
const SCROLL_THROTTLE_INTERVAL = 100; // 100ms

export const useScrollSection = (navItems: NavItem[]) => {
  const [active, setActive] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigationTimeoutRef = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);
  const sectionPositionsRef = useRef<SectionPosition[]>([]);
  const isInitializedRef = useRef(false);

  // 섹션 위치 캐싱 - resize나 초기 로딩 시에만 재계산
  const updateSectionPositions = useCallback(() => {
    const scrollPosition = window.scrollY;
    sectionPositionsRef.current = navItems.flatMap((item) => {
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
    isInitializedRef.current = true;
  }, [navItems]);

  const calculateActiveSection = useCallback(() => {
    if (isNavigatingRef.current) {
      return;
    }

    // 초기화되지 않은 경우에만 섹션 위치 계산
    if (!isInitializedRef.current) {
      updateSectionPositions();
    }

    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const viewportCenter = scrollPosition + viewportHeight / 2;

    const sectionPositions = sectionPositionsRef.current;

    // 현재 뷰포트에 보이는 섹션이 있는지 확인
    const visibleSections = sectionPositions.filter(
      (section) => section.top <= viewportCenter && section.bottom >= viewportCenter
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
  }, [updateSectionPositions]);

  // 수동으로 active 상태를 설정하는 함수 (버튼 클릭 시 사용)
  const setActiveManual = useCallback(
    (label: string) => {
      // 즉시 상태 변경
      setActive(label);

      // 네비게이션 플래그 설정
      setIsNavigating(true);
      isNavigatingRef.current = true;

      // 기존 타이머 정리
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      // 스크롤 애니메이션 완료 후 플래그 해제
      navigationTimeoutRef.current = window.setTimeout(() => {
        setIsNavigating(false);
        isNavigatingRef.current = false;
        // 플래그 해제 직후 현재 위치 기준으로 다시 계산 (ref 기반으로 최신 상태 반영)
        calculateActiveSection();
      }, SCROLL_ANIMATION_TIMEOUT);
    },
    [calculateActiveSection]
  );

  useEffect(() => {
    const throttledHandleScroll = throttle(calculateActiveSection, SCROLL_THROTTLE_INTERVAL);
    const throttledHandleResize = throttle(updateSectionPositions, 250);

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', throttledHandleResize, { passive: true });

    // 초기 계산
    updateSectionPositions();
    calculateActiveSection();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', throttledHandleResize);
      throttledHandleScroll.cancel();
      throttledHandleResize.cancel();
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [calculateActiveSection, updateSectionPositions]);

  return {
    active,
    setActive: setActiveManual,
    isNavigating, // 이제 반응형 상태값 반환
  };
};
