import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { TooltipProps } from '@/types/skills.type';

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-describedby='tooltip-content'
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='absolute -bottom-8 left-1/2 z-50 -translate-x-1/2 transform'
          >
            <div className='relative rounded-lg border border-white/10 bg-black/80 px-2 py-1 text-center shadow-xl backdrop-blur-md'>
              <div className='text-xs font-medium whitespace-nowrap text-white'>{content}</div>
              <div className='absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-black/80' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
