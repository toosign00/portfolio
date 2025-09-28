import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

export const useScrollTracking = () => {
  const trackedMilestones = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // 25%, 50%, 75%, 100% 지점에서 추적
      const milestones = [25, 50, 75, 100];

      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          ReactGA.event('scroll', {
            percent_scrolled: milestone,
            page_location: window.location.pathname,
          });
        }
      });
    };

    // 스크롤 이벤트 리스너 등록
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // 페이지 변경 시 추적된 마일스톤 초기화
  useEffect(() => {
    trackedMilestones.current.clear();
  }, []);
};
