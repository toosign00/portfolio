import { m } from 'motion/react';
import { skillItemVariants } from '@/motion/skillAnimations';
import type { SkillCardProps } from '@/types/skills.types';
import { SkillIcon } from './SkillIcon';
import { Tooltip } from './Tooltip';

export const SkillCard = ({ skill, filter }: SkillCardProps) => {
  return (
    <m.div
      key={`${skill.name}-${filter}`}
      variants={skillItemVariants}
      layout
      className='flex w-full justify-center'
    >
      <Tooltip content={skill.name}>
        <m.div
          className='focus-ring flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-gray bg-ui-background backdrop-blur-md transition-all duration-300 md:h-20 md:w-20'
          whileTap={{ scale: 0.95 }}
          tabIndex={0}
        >
          <div className='text-2xl md:text-3xl'>
            <SkillIcon skill={skill} />
          </div>
        </m.div>
      </Tooltip>
    </m.div>
  );
};
