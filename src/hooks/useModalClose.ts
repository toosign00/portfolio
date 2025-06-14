import { useCallback, useState } from 'react';

/**
 * @function useModalClose
 * @description 모달 닫기 관련 로직을 처리하는 커스텀 훅
 * @param {() => void} onClose - 모달을 닫는 콜백 함수
 * @returns {Object} 모달 닫기 관련 상태와 핸들러
 */
export const useModalClose = (onClose: () => void) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose],
  );

  return {
    isClosing,
    handleClose,
    handleOverlayClick,
  };
};
