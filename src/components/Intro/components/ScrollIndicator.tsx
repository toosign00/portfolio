import { cubicBezier, m } from 'motion/react';
import React, { useMemo } from 'react';

interface ScrollIndicatorProps {
  scrollY: number;
}

export const ScrollIndicator = React.memo(function ScrollIndicator({
  scrollY,
}: ScrollIndicatorProps) {
  const isVisible = scrollY <= 50;

  const containerVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        y: 30,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: 2.5,
          duration: 0.8,
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9,
        transition: {
          duration: 0.4,
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
        },
      },
    }),
    []
  );

  const floatingVariants = useMemo(
    () => ({
      animate: {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: cubicBezier(0.445, 0.05, 0.55, 0.95),
          repeatType: 'loop' as const,
        },
      },
    }),
    []
  );

  const dotVariants = useMemo(
    () => ({
      animate: {
        y: [0, 16, 0],
        opacity: [1, 1, 0.3, 1],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
          times: [0, 0.5, 0.8, 1],
          repeatType: 'loop' as const,
        },
      },
    }),
    []
  );

  const textVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      visible: {
        opacity: 0.7,
        y: 0,
        transition: {
          delay: 3.2,
          duration: 0.6,
        },
      },
      hidden: {
        opacity: 0,
        y: 5,
        transition: {
          duration: 0.3,
        },
      },
    }),
    []
  );

  return (
    <m.div
      className='scroll-indicator -translate-x-1/2 pointer-events-none fixed left-1/2 transform'
      style={{
        willChange: 'transform, opacity',
      }}
      variants={containerVariants}
      initial='initial'
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <m.div
        className='flex flex-col items-center'
        variants={floatingVariants}
        animate='animate'
        style={{ willChange: 'transform' }}
      >
        <m.span
          className='mb-3 font-light text-gray-400 text-sm tracking-wide'
          variants={textVariants}
          initial='initial'
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Scroll Down
        </m.span>

        <m.div
          className='relative flex h-10 w-6 justify-center rounded-full border-2 border-gray-400/60 bg-transparent'
          whileHover={{
            scale: 1.1,
            borderColor: 'rgb(156 163 175)',
            transition: { duration: 0.2 },
          }}
          style={{ willChange: 'transform' }}
        >
          <m.div
            className='absolute top-1.5 h-1.5 w-1 rounded-full bg-gray-400'
            variants={dotVariants}
            animate='animate'
            style={{ willChange: 'transform, opacity' }}
          />
        </m.div>
      </m.div>
    </m.div>
  );
});
