import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useViewportAmount } from '@/hooks/useViewportAmount';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import { featureContainerVariants, featureItemVariants } from '@/motion/featureAnimations';
import { FeatureCard } from './components/FeatureCard';

export const Features = () => {
  const viewportAmount = useViewportAmount();
  const { t } = useTranslation();
  return (
    <SectionLayout id='features' useAnimation={false}>
      <SectionHeader
        title={t('features.title')}
        description={t('features.description')}
        useAnimation={true}
      />
      <div className='mx-auto max-w-6xl'>
        <m.div
          variants={featureContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{
            once: true,
            margin: '-50px',
            amount: viewportAmount,
          }}
          className='grid gap-6 md:grid-cols-3'
        >
          {[0, 1, 2].map((index) => (
            <m.div key={`feature-${index}`} variants={featureItemVariants}>
              <FeatureCard index={index} />
            </m.div>
          ))}
        </m.div>
      </div>
    </SectionLayout>
  );
};
