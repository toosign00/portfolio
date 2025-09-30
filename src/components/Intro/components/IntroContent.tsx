import { m } from 'motion/react';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import {
  buttonContainerVariants,
  containerVariants,
  descriptionVariants,
  titleLineVariants,
  titleVariants,
} from '@/motion/intoAnimations';
import { ProfileActions } from './ProfileActions';

export function IntroContent() {
  const { t, i18n } = useTranslation();
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
          {t('intro.greeting')}
        </m.h1>
        <m.h1
          className='font-extrabold text-4xl text-white leading-tight sm:text-[42px] md:text-5xl lg:text-5xl'
          variants={titleLineVariants}
        >
          {i18n.resolvedLanguage === 'en' ? (
            <>
              <span className='text-white'>{t('intro.rolePrefix')} </span>
              <span className='bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent'>
                {t('intro.role')}
              </span>
            </>
          ) : (
            <span className='bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent'>
              {t('intro.role')}
            </span>
          )}
        </m.h1>
        <m.h1
          className='font-extrabold text-4xl text-white leading-tight sm:text-[42px] md:text-5xl lg:text-5xl'
          variants={titleLineVariants}
        >
          <span
            className={`bg-gradient-to-r ${i18n.resolvedLanguage === 'en' ? 'from-pink to-purple-500' : 'from-blue to-cyan-400'} bg-clip-text text-transparent`}
          >
            {t('intro.name')}
          </span>
          <span className='text-white'>{t('intro.description')}</span>
        </m.h1>
      </m.div>

      <m.p
        className={`${i18n.resolvedLanguage === 'ja' ? 'break-words' : 'break-keep'} mb-8 max-w-3xl whitespace-pre-line text-center text-base text-gray-300 leading-relaxed md:mb-12 md:text-lg lg:text-xl`}
        variants={descriptionVariants}
      >
        {t('intro.about')}
      </m.p>

      <m.div variants={buttonContainerVariants} className='transform-gpu' style={transformStyle}>
        <ProfileActions />
      </m.div>
    </m.div>
  );
}
