import type { CSSProperties } from 'react';
import { useScrollOptimized } from '@/hooks/useScrollOptimized';

export function BackgroundParallax() {
  const scrollY = useScrollOptimized();

  const style: CSSProperties = {
    transform: `translateY(${scrollY * 0.3}px)`,
    willChange: 'transform',
  };

  return (
    <div className='-z-10 absolute inset-0' style={style}>
      <div className='absolute inset-0 bg-black bg-gradient-to-br' />
    </div>
  );
}
