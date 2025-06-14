import { useEffect } from 'react';

/**
 * @function usePreventScroll
 * @description 모달이 열려있는 동안 배경 스크롤을 방지하는 커스텀 훅
 */
export const usePreventScroll = () => {
  useEffect(() => {
    const currentScrollY = window.scrollY;

    const preventScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      // 모달 내부 요소가 아닌 경우에만 스크롤 방지
      if (!target.closest('[data-modal-content]')) {
        e.preventDefault();
      }
    };

    const preventKeyboardScroll = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // 모달 내부 요소가 아닌 경우에만 키보드 스크롤 방지
      if (!target.closest('[data-modal-content]')) {
        const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
        if (scrollKeys.includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    const lockScroll = () => {
      window.scrollTo(0, currentScrollY);
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyboardScroll);
    window.addEventListener('scroll', lockScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyboardScroll);
      window.removeEventListener('scroll', lockScroll);
    };
  }, []);
};
