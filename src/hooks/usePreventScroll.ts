import { useEffect } from 'react';

/**
 * 스크롤바 너비를 계산하는 함수
 */
const getScrollbarWidth = (): number => {
  return window.innerWidth - document.documentElement.offsetWidth;
};

/**
 * body 스크롤을 차단하는 함수
 */
const blockBodyScroll = (): void => {
  const className = 'overflow-hidden';
  const isBlocked = document.body.classList.contains(className);

  if (isBlocked) return;

  const scrollbarWidth = getScrollbarWidth();

  if (scrollbarWidth > 0) {
    document.documentElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }

  document.body.classList.add(className);
};

/**
 * body 스크롤 차단을 해제하는 함수
 */
const unblockBodyScroll = (): void => {
  const className = 'overflow-hidden';
  const isBlocked = document.body.classList.contains(className);

  if (!isBlocked) return;

  document.body.classList.remove(className);
  document.documentElement.style.removeProperty('width');
};

/**
 * @function usePreventScroll
 * @description 모달이 열려있는 동안 배경 스크롤을 방지하는 커스텀 훅 (레이아웃 시프트 방지)
 */
export const usePreventScroll = () => {
  useEffect(() => {
    blockBodyScroll();
    return () => {
      unblockBodyScroll();
    };
  }, []);
};
