// 📁 components/BackgroundParallax.tsx
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';

export function BackgroundParallax() {
  const { scrollYProgress } = useScroll();

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '50%']), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const motionStyle: CSSProperties = {
    willChange: 'transform',
  };

  return (
    <motion.div
      className='absolute inset-0 -z-10'
      style={{
        y: backgroundY,
        ...motionStyle,
      }}
    >
      <div className='absolute inset-0 bg-black bg-gradient-to-br' />
    </motion.div>
  );
}
