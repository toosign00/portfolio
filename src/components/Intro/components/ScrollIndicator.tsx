import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { ScrollIndicatorProps } from '@/types/intro.type';

export function ScrollIndicator({ show }: ScrollIndicatorProps) {
  if (!show) return null;

  const motionStyle: CSSProperties = {
    willChange: 'transform, opacity',
  };

  const transformStyle: CSSProperties = {
    willChange: 'transform',
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 2.5, duration: 0.5, ease: 'easeInOut' }}
      style={motionStyle}
    >
      <motion.div
        className="group flex cursor-pointer flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'reverse',
        }}
        style={transformStyle}
      >
        <motion.span
          className="mb-3 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 transition-colors duration-300 group-hover:border-white"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="mt-2 h-3 w-1 rounded-full bg-gray-400 transition-colors duration-300 group-hover:bg-white"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
