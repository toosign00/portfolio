import { m } from 'framer-motion';
import { headerVariants } from '@/motion/sectionHeaderAnimations';
import type { SectionHeaderProps } from '@/types/section.types';

export const SectionHeader = ({
  title,
  description,
  useAnimation = false,
  className = '',
}: SectionHeaderProps) => {
  const content = (
    <div className={`mb-12 ${className} text-center`}>
      <h2 className='mb-4 font-bold text-2xl text-blue md:text-3xl'>{title}</h2>
      {description && <p className='text-base text-white md:text-lg'>{description}</p>}
    </div>
  );

  if (!useAnimation) {
    return content;
  }

  return (
    <m.div
      variants={headerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px', amount: 0.5 }}
      className={`mb-12 ${className} text-center`}
    >
      <h2 className='mb-4 font-bold text-2xl text-blue md:text-3xl'>{title}</h2>
      {description && <p className='text-base text-white md:text-lg'>{description}</p>}
    </m.div>
  );
};
