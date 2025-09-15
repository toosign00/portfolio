import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // 초기값 설정
    setMatches(mediaQueryList.matches);

    // 미디어 쿼리 변경 감지 핸들러
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 이벤트 리스너 등록
    mediaQueryList.addEventListener('change', handleChange);

    // 클린업 함수
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

// 현재 화면이 모바일 크기인지 확인
export const useIsMobile = (breakpoint: number = 768) => {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
};
