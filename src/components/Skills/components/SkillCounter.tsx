import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import type { SkillCounterProps } from '@/types/skills.types';

export const SkillCounter = ({ count }: SkillCounterProps) => {
  const { t } = useTranslation();
  return (
    <div className='mb-8 text-center'>
      <m.p
        key={count}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-gray text-sm'
      >
        {t('skills.count', { count })}
      </m.p>
    </div>
  );
};
