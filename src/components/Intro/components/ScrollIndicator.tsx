import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import { useMemo } from 'react';

interface ScrollIndicatorProps {
  /** 현재 스크롤 위치(px) */
  scrollY: number;
}

/**
 * 스크롤을 유도하는 애니메이션 인디케이터 컴포넌트
 */
export const ScrollIndicator = React.memo(function ScrollIndicator({
  scrollY,
}: ScrollIndicatorProps) {
  /** 100px 이하일 때만 인디케이터 표시 */
  const isVisible = scrollY <= 100;

  /** 컨테이너 애니메이션 variants */
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
    [],
  );

  /** 플로팅 애니메이션 variants */
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
    [],
  );

  /** 마우스 휠 내부 점 애니메이션 variants */
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
    [],
  );

  /** 텍스트 페이드 인 애니메이션 variants */
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
    [],
  );

  return (
    <motion.div
      className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 transform"
      variants={containerVariants}
      initial="initial"
      animate={isVisible ? 'visible' : 'hidden'}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div
        className="flex flex-col items-center"
        variants={floatingVariants}
        animate="animate"
        style={{ willChange: 'transform' }}
      >
        <motion.span
          className="mb-3 text-sm font-light tracking-wide text-gray-400"
          variants={textVariants}
          initial="initial"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Scroll Down
        </motion.span>

        <motion.div
          className="relative flex h-12 w-7 justify-center rounded-full border-2 border-gray-400/60 bg-transparent"
          whileHover={{
            scale: 1.1,
            borderColor: 'rgb(156 163 175)',
            transition: { duration: 0.2 },
          }}
          style={{ willChange: 'transform' }}
        >
          <motion.div
            className="absolute top-2 h-2 w-1.5 rounded-full bg-gray-400"
            variants={dotVariants}
            animate="animate"
            style={{ willChange: 'transform, opacity' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
