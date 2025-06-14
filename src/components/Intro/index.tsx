import { SectionLayout } from '@/layout/SectionLayout';
import { ProfileActions } from './components/ProfileActions';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, textVariants } from '@/motion/intoAnimations';

export const Intro = () => {
  return (
    <SectionLayout id="intro" className="flex min-h-screen items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-center text-4xl leading-tight font-extrabold text-white md:text-5xl"
          variants={textVariants}
        >
          <motion.span variants={itemVariants}>안녕하세요,</motion.span>
          <br />
          <motion.span variants={itemVariants} className="text-pink">
            프론트엔드 개발자
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="text-blue">
            노현수
          </motion.span>
          <motion.span variants={itemVariants}>입니다.</motion.span>
        </motion.h1>
        <motion.p className="text-gray mb-8 text-center text-lg md:text-xl" variants={textVariants}>
          <motion.span variants={itemVariants}>
            React와 Next.js를 중심으로 웹 프론트엔드를 개발합니다.
          </motion.span>
          <br />
          <motion.span variants={itemVariants}>
            함께 제품을 만들고 성장시킬 분을 찾고 있습니다.
          </motion.span>
        </motion.p>
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="transform-gpu"
        >
          <ProfileActions />
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};
