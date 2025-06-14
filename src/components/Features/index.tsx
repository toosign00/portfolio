import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { FeatureCard } from './components/FeatureCard';
import { features } from './constants/features.constants';
import { motion } from 'framer-motion';
import { featureContainerVariants, featureItemVariants } from '@/motion/featureAnimations';
import { useViewportAmount } from '@/hooks/useViewportAmount';

export const Features = () => {
  const viewportAmount = useViewportAmount();

  return (
    <SectionLayout id="features" useAnimation={false}>
      <SectionHeader
        title="핵심 역량"
        description="소통과 협업을 중시하며 끈기로 문제를 해결하고, 팀과 함께 성장하는 프론트엔드 개발자입니다."
        useAnimation={true}
      />
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={featureContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px',
            amount: viewportAmount,
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={featureItemVariants}>
              <FeatureCard title={feature.title} desc={feature.desc} icon={feature.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
};
