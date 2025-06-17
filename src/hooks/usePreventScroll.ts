import { useEffect } from 'react';

/**
 * @function usePreventScroll
 * @description 모달이 열려있는 동안 배경 스크롤을 방지하는 커스텀 훅 (스크롤바 유지)
 */
export const usePreventScroll = () => {
  useEffect(() => {
    const currentScrollY = window.scrollY;
    const body = document.body;
    const modalContent = document.querySelector('[data-modal-content]');

    const preventScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      // 모달 내부 요소가 아닌 경우에만 스크롤 방지
      if (modalContent && !modalContent.contains(target)) {
        e.preventDefault();
      }
    };

    const preventKeyboardScroll = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // 모달 내부 요소가 아닌 경우에만 키보드 스크롤 방지
      if (modalContent && !modalContent.contains(target)) {
        const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
        if (scrollKeys.includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    // 원본 스타일 저장
    const originalPosition = body.style.position;
    const originalTop = body.style.top;
    const originalWidth = body.style.width;
    const originalOverflow = body.style.overflow;

    // body 고정으로 스크롤바는 보이지만 스크롤 기능 차단
    body.style.position = 'fixed';
    body.style.top = `-${currentScrollY}px`;
    body.style.width = '100%';
    body.style.overflowY = 'scroll';
    body.style.overflowX = 'hidden';

    // 이벤트 리스너 추가
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyboardScroll);

    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyboardScroll);

      // 스타일 복원
      body.style.position = originalPosition;
      body.style.top = originalTop;
      body.style.width = originalWidth;
      body.style.overflow = originalOverflow;

      // requestAnimationFrame을 사용하여 다음 프레임에서 스크롤 위치 복원
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
    };
  }, []);
};
