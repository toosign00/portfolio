import { AnimatePresence, motion } from 'framer-motion';
import { skillContainerVariants } from '@/motion/skillAnimations';
import type { SkillGridProps } from '@/types/skills.type';
import { SkillCard } from './SkillCard';

export const SkillGrid = ({ skills, filter }: SkillGridProps) => {
  return (
    <div className='relative mx-auto min-h-[20rem] max-w-[19rem] sm:max-w-[24rem] md:min-h-[18rem] md:max-w-[36.25rem] lg:max-w-[44rem]'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={filter}
          className='grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 md:gap-5 lg:grid-cols-7 lg:gap-6'
          variants={skillContainerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {skills.map((skill) => (
            <SkillCard key={`${skill.name}-${filter}`} skill={skill} filter={filter} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
