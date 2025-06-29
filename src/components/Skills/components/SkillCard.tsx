import { motion } from 'framer-motion';
import { skillItemVariants } from '@/motion/skillAnimations';
import type { SkillCardProps } from '@/types/skills.type';
import { SkillIcon } from './SkillIcon';
import { Tooltip } from './Tooltip';

export const SkillCard = ({ skill, filter }: SkillCardProps) => {
  return (
    <motion.div
      key={`${skill.name}-${filter}`}
      variants={skillItemVariants}
      layout
      className='flex w-full justify-center'
    >
      <Tooltip content={skill.name}>
        <motion.div
          className='border-gray bg-ui-background flex h-16 w-16 flex-col items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-300 md:h-20 md:w-20'
          whileTap={{ scale: 0.95 }}
          role='img'
          aria-label={`${skill.name} 기술 스택`}
          aria-roledescription='기술 스택 아이콘'
        >
          <div className='text-2xl md:text-3xl'>
            <SkillIcon skill={skill} />
          </div>
        </motion.div>
      </Tooltip>
    </motion.div>
  );
};
