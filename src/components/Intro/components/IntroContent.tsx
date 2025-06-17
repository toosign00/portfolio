import { motion } from 'framer-motion';
import { ProfileActions } from './ProfileActions';
import type { CSSProperties } from 'react';
import {
  containerVariants,
  titleVariants,
  titleLineVariants,
  descriptionVariants,
  buttonContainerVariants,
} from '@/motion/intoAnimations';

export function IntroContent() {
  const transformStyle: CSSProperties = {
    willChange: 'transform',
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-6 text-center" variants={titleVariants}>
        <motion.h1
          className="text-4xl leading-tight font-extrabold text-white md:text-5xl"
          variants={titleLineVariants}
        >
          안녕하세요,
        </motion.h1>
        <motion.h1
          className="text-4xl leading-tight font-extrabold text-white md:text-5xl"
          variants={titleLineVariants}
        >
          <span className="from-pink bg-gradient-to-r to-purple-500 bg-clip-text text-transparent">
            프론트엔드 개발자
          </span>
        </motion.h1>
        <motion.h1
          className="text-4xl leading-tight font-extrabold text-white md:text-5xl"
          variants={titleLineVariants}
        >
          <span className="from-blue bg-gradient-to-r to-cyan-400 bg-clip-text text-transparent">
            노현수
          </span>
          <span className="text-white"> 입니다.</span>
        </motion.h1>
      </motion.div>

      <motion.p
        className="mb-12 max-w-2xl text-center text-lg leading-relaxed text-gray-300 md:text-xl"
        variants={descriptionVariants}
      >
        React를 기반으로 사용자 중심의 웹 애플리케이션을 개발합니다.
        <br className="hidden md:block" />
        함께 성장할 수 있는 팀에서 가치 있는 서비스를 만들어가고 싶습니다.
      </motion.p>

      <motion.div
        variants={buttonContainerVariants}
        className="transform-gpu"
        style={transformStyle}
      >
        <ProfileActions />
      </motion.div>
    </motion.div>
  );
}
