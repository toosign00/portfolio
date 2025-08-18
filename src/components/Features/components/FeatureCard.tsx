import type { FeatureCardProps } from '@/types/feature.types';

export const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className='group relative flex h-full flex-col items-start justify-between gap-6 rounded-3xl border border-gray bg-ui-background p-6 backdrop-blur-md transition-all duration-300'>
      <div className='inline-flex'>
        <img src={icon} alt='' className='h-8 w-8 transition-all group-hover:animate-spin' />
      </div>
      <div className='flex flex-1 flex-col justify-between gap-4'>
        <h2 className='font-bold text-2xl text-white'>{title}</h2>
        <p className='break-keep text-base text-gray'>{desc}</p>
      </div>
    </div>
  );
};
