import { m } from 'motion/react';
import { headerVariants } from '@/motion/sectionHeaderAnimations';
import type { SectionHeaderProps } from '@/types/section.types';

export const SectionHeader = ({
  title,
  description,
  useAnimation = false,
  className = '',
}: SectionHeaderProps) => {
  const headerContent = (
    <>
      <h2 className='mb-4 font-bold text-2xl text-blue md:text-3xl'>{title}</h2>
      {description && (
        <p className='whitespace-pre-line break-keep text-base text-white md:text-lg'>
          {description}
        </p>
      )}
    </>
  );

  if (!useAnimation) {
    return <div className={`mb-12 ${className} text-center`}>{headerContent}</div>;
  }

  return (
    <m.div
      variants={headerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px', amount: 0.5 }}
      className={`mb-12 ${className} text-center`}
    >
      {headerContent}
    </m.div>
  );
};
