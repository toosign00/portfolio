import { useState, useRef, useEffect } from 'react';
import { throttle } from 'es-toolkit';

type ThrottledFunction = {
  (): void;
  cancel(): void;
};

export const useScrollOptimized = (): number => {
  const [scrollY, setScrollY] = useState<number>(0);
  const throttledScrollRef = useRef<ThrottledFunction | null>(null);

  useEffect(() => {
    throttledScrollRef.current = throttle(() => {
      setScrollY(window.scrollY);
    }, 16) as ThrottledFunction;

    const handleScroll = (): void => {
      throttledScrollRef.current?.();
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: false,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttledScrollRef.current && 'cancel' in throttledScrollRef.current) {
        throttledScrollRef.current.cancel();
      }
    };
  }, []);

  return scrollY;
};
