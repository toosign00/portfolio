import { useEffect, useState } from 'react';

interface ViewportBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface ViewportAmounts {
  mobile: number;
  tablet: number;
  desktop: number;
}

const defaultBreakpoints: ViewportBreakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1024,
};

const defaultAmounts: ViewportAmounts = {
  mobile: 0.3,
  tablet: 0.5,
  desktop: 0.8,
};

export const useViewportAmount = (
  breakpoints: ViewportBreakpoints = defaultBreakpoints,
  amounts: ViewportAmounts = defaultAmounts
) => {
  const [viewportAmount, setViewportAmount] = useState(amounts.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoints.mobile) {
        setViewportAmount(amounts.mobile);
      } else if (window.innerWidth < breakpoints.tablet) {
        setViewportAmount(amounts.tablet);
      } else {
        setViewportAmount(amounts.desktop);
      }
    };

    // 초기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 클린업
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints, amounts]);

  return viewportAmount;
};
