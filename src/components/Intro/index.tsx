import { SectionLayout } from '@/layout/SectionLayout';
import { ProfileActions } from './components/ProfileActions';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, textVariants } from '@/motion/intoAnimations';
import { useEffect, useState } from 'react';

export const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            React를 기반으로 사용자 중심의 웹 애플리케이션을 개발합니다.
          </motion.span>
          <br />
          <motion.span variants={itemVariants}>
            함께 성장할 수 있는 팀에서 가치 있는 서비스를 만들어가고 싶습니다.
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

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollY > 50 ? 0 : 1,
          y: scrollY > 50 ? 20 : 0,
        }}
        transition={{
          delay: scrollY > 50 ? 0 : 2.5,
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="flex cursor-pointer flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="mb-2 text-sm text-gray-400">Scroll Down</span>
          <motion.div
            className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400"
            whileHover={{ borderColor: '#ffffff', scale: 1.1 }}
          >
            <motion.div
              className="mt-2 h-3 w-1 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};
