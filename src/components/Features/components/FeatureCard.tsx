import { useTranslation } from 'react-i18next';
import shaper01 from '@/assets/icon/shaper-01.svg';
import shaper02 from '@/assets/icon/shaper-02.svg';
import shaper03 from '@/assets/icon/shaper-03.svg';
import type { FeatureCardProps } from '@/types/feature.types';

export const FeatureCard = ({ index }: FeatureCardProps) => {
  const { t, i18n } = useTranslation();
  const cards = t('features.cards', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const icons = [shaper01, shaper02, shaper03];

  return (
    <div className='group relative flex h-full flex-col items-start justify-between gap-5 rounded-3xl border border-gray bg-ui-background p-5 backdrop-blur-md transition-all duration-300'>
      <div className='inline-flex'>
        <img
          src={icons[index]}
          alt=''
          className='h-8 w-8 transition-all group-hover:animate-spin'
        />
      </div>
      <div className='flex w-full flex-1 flex-col justify-start gap-4'>
        <h2 className='text-balance font-bold text-2xl text-white'>
          {cards?.[index]?.title ?? ''}
        </h2>
        <p
          className={`${i18n.language === 'ja' ? 'break-words' : 'break-keep'} whitespace-pre-wrap text-base text-gray leading-relaxed`}
        >
          {cards?.[index]?.desc ?? ''}
        </p>
      </div>
    </div>
  );
};
