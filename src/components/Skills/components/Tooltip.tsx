import { AnimatePresence, m } from 'motion/react';
import { useState } from 'react';
import type { TooltipProps } from '@/types/skills.types';

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-describedby={isVisible ? 'tooltip-content' : undefined}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='-bottom-8.5 -translate-x-1/2 absolute left-1/2 z-50 transform'
          >
            <div
              id='tooltip-content'
              role='tooltip'
              className='relative rounded-lg border border-white/10 bg-black px-2 py-1 text-center shadow-xl'
            >
              <div className='whitespace-nowrap font-medium text-white text-xs'>{content}</div>
              <div className='-top-1 -translate-x-1/2 absolute left-1/2 h-2 w-2 rotate-45 border-white/10 border-t border-l bg-black/80' />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
