import { motion } from 'framer-motion';
import { sectionVariants } from '@/motion/commonAnimations';
import type { SectionLayoutProps } from '@/types/section';

export const SectionLayout = ({
  children,
  className = '',
  id,
  useAnimation = true,
}: SectionLayoutProps) => {
  const content = useAnimation ? (
    <motion.div
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

  return (
    <section id={id} className={`w-full bg-black px-8 py-24 ${className}`}>
      {content}
    </section>
  );
};
