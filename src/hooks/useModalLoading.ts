import { useState, useEffect } from 'react';

export function useModalLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 컴포넌트가 마운트되면 로딩 상태를 false로 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 최소 100ms는 스켈레톤을 보여줌

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
