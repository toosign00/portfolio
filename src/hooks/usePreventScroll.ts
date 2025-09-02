import { useEffect } from 'react';

let scrollbarWidthCache: number | null = null;

const getScrollbarWidth = (): number => {
  if (scrollbarWidthCache !== null) {
    return scrollbarWidthCache;
  }

  scrollbarWidthCache = window.innerWidth - document.documentElement.offsetWidth;
  return scrollbarWidthCache;
};

const blockBodyScroll = (): void => {
  const className = 'overflow-hidden';
  const isBlocked = document.body.classList.contains(className);

  if (isBlocked) return;

  // 필요한 경우에만 스크롤바 너비 계산
  const scrollbarWidth = getScrollbarWidth();

  if (scrollbarWidth > 0) {
    // CSS 커스텀 프로퍼티 사용으로 리플로우 최소화
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.documentElement.style.setProperty('width', `calc(100vw - var(--scrollbar-width))`);
  }

  document.body.classList.add(className);
};

const unblockBodyScroll = (): void => {
  const className = 'overflow-hidden';
  const isBlocked = document.body.classList.contains(className);

  if (!isBlocked) return;

  // 배치로 스타일 정리
  document.body.classList.remove(className);
  document.documentElement.style.removeProperty('width');
  document.documentElement.style.removeProperty('--scrollbar-width');
};

export const usePreventScroll = (shouldPrevent: boolean = true) => {
  useEffect(() => {
    if (shouldPrevent) {
      // 비동기 작업 최소화
      const timeoutId = setTimeout(() => {
        blockBodyScroll();
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        unblockBodyScroll();
      };
    }
  }, [shouldPrevent]);
};
