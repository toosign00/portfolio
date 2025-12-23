import { useEffect, useRef, useState } from 'react';
import type { NavItem } from '@/types/navigation.types';

interface VisibleSection {
  navId: string;
  element: Element;
}

const SCROLL_ANIMATION_TIMEOUT = 1200; // 스크롤 애니메이션 시간보다 약간 길게

export const useScrollSection = (navItems: NavItem[]) => {
  const [active, setActive] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigationTimeoutRef = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);
  const visibleSectionsRef = useRef<Map<string, VisibleSection>>(new Map());
  const rafRef = useRef<number | null>(null);

  const updateActiveSection = () => {
    if (isNavigatingRef.current) {
      return;
    }

    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const viewportCenter = scrollPosition + viewportHeight / 2;

    const visibleSections = Array.from(visibleSectionsRef.current.values());

    // 보이는 섹션이 없으면 null 반환
    if (visibleSections.length === 0) {
      setActive(null);
      return;
    }

    let closestNavId = null;
    let minDistance = Infinity;

    visibleSections.forEach((section) => {
      const rect = section.element.getBoundingClientRect();
      const sectionCenter = rect.top + scrollPosition + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestNavId = section.navId;
      }
    });

    setActive(closestNavId);
  };

  // 수동으로 active 상태를 설정하는 함수 (버튼 클릭 시 사용)
  const setActiveManual = (id: string) => {
    // 즉시 상태 변경
    setActive(id);

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
      // 플래그 해제 직후 현재 위치 기준으로 다시 계산
      updateActiveSection();
    }, SCROLL_ANIMATION_TIMEOUT);
  };

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    navItems.forEach((item) => {
      item.sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                visibleSectionsRef.current.set(sectionId, {
                  navId: item.id,
                  element: entry.target,
                });
              } else {
                visibleSectionsRef.current.delete(sectionId);
              }
            });
            updateActiveSection();
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0,
          }
        );

        observer.observe(element);
        observers.set(sectionId, observer);
      });
    });

    // 스크롤 이벤트 핸들러 (requestAnimationFrame으로 최적화)
    const handleScroll = () => {
      if (rafRef.current) {
        return;
      }
      rafRef.current = requestAnimationFrame(() => {
        updateActiveSection();
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 초기 계산
    updateActiveSection();

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [navItems, updateActiveSection]);

  return {
    active,
    setActive: setActiveManual,
    isNavigating,
  };
};
