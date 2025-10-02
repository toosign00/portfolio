import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { headerVariants } from '@/motion/sectionHeaderAnimations';
import type { SectionHeaderProps } from '@/types/section.types';

export const SectionHeader = ({
  title,
  description,
  useAnimation = false,
  className = '',
}: SectionHeaderProps) => {
  const { i18n } = useTranslation();
  const headerContent = (
    <>
      <h2 className='mb-4 font-bold text-2xl text-blue md:text-3xl'>{title}</h2>
      {description && (
        <p
          className={`${i18n.resolvedLanguage === 'ja' ? 'break-words' : 'break-keep'} mx-auto max-w-2xl whitespace-pre-line text-base text-white md:text-lg`}
        >
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
