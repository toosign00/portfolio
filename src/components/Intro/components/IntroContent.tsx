import { m } from 'framer-motion';
import type { CSSProperties } from 'react';
import {
  buttonContainerVariants,
  containerVariants,
  descriptionVariants,
  titleLineVariants,
  titleVariants,
} from '@/motion/intoAnimations';
import { ProfileActions } from './ProfileActions';

export function IntroContent() {
  const transformStyle: CSSProperties = {
    willChange: 'transform',
  };

  return (
    <m.div
      className='flex flex-col items-center px-4 md:px-0'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <m.div className='mb-4 text-center md:mb-6' variants={titleVariants}>
        <m.h1
          className='font-extrabold text-4xl text-white leading-tight sm:text-[42px] md:text-5xl lg:text-5xl'
          variants={titleLineVariants}
        >
          안녕하세요,
        </m.h1>
        <m.h1
          className='font-extrabold text-4xl text-white leading-tight sm:text-[42px] md:text-5xl lg:text-5xl'
          variants={titleLineVariants}
        >
          <span className='bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent'>
            프론트엔드 개발자
          </span>
        </m.h1>
        <m.h1
          className='font-extrabold text-4xl text-white leading-tight sm:text-[42px] md:text-5xl lg:text-5xl'
          variants={titleLineVariants}
        >
          <span className='bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent'>
            노현수
          </span>
          <span className='text-white'> 입니다.</span>
        </m.h1>
      </m.div>

      <m.p
        className='mb-8 max-w-2xl break-keep text-center text-base text-gray-300 leading-relaxed md:mb-12 md:text-lg lg:text-xl'
        variants={descriptionVariants}
      >
        React를 기반으로 사용자 중심의 웹 애플리케이션을 개발합니다.&nbsp;
        <br className='hidden sm:block' />
        함께 성장할 수 있는 팀에서 가치 있는 서비스를 만들어가고 싶습니다.
      </m.p>

      <m.div variants={buttonContainerVariants} className='transform-gpu' style={transformStyle}>
        <ProfileActions />
      </m.div>
    </m.div>
  );
}
