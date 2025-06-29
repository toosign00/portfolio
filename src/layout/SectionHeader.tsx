import { motion } from 'framer-motion';
import { headerVariants } from '@/motion/sectionHeaderAnimations';
import type { SectionHeaderProps } from '@/types/section';

export const SectionHeader = ({
  title,
  description,
  useAnimation = false,
  className = '',
}: SectionHeaderProps) => {
  const content = (
    <div className={`mb-12 ${className} text-center`}>
      <h2 className='text-blue mb-4 text-2xl font-bold md:text-3xl'>{title}</h2>
      {description && <p className='text-base text-white md:text-lg'>{description}</p>}
    </div>
  );

  if (!useAnimation) {
    return content;
  }

  return (
    <motion.div
      variants={headerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px', amount: 0.5 }}
      className={`mb-12 ${className} text-center`}
    >
      <h2 className='text-blue mb-4 text-2xl font-bold md:text-3xl'>{title}</h2>
      {description && <p className='text-base text-white md:text-lg'>{description}</p>}
    </motion.div>
  );
};
