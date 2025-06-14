import { motion } from 'framer-motion';
import type { SkillCounterProps } from '@/types/skills.type';

export const SkillCounter = ({ count }: SkillCounterProps) => {
  return (
    <div className="mb-8 text-center">
      <motion.p
        key={count}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-gray"
      >
        {count}개의 기술 스택
      </motion.p>
    </div>
  );
};
