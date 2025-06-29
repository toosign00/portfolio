import type { TechnologyStackProps } from '@/types/projectModal.type';

export const TechnologyStack = ({ technologies }: TechnologyStackProps) => {
  return (
    <div className='mb-7 flex flex-wrap gap-2'>
      {technologies.map((tech) => (
        <span
          key={tech}
          className='rounded-lg bg-[#2d3442] px-3 py-0.5 text-xs font-medium tracking-wide text-white shadow-sm'
          style={{ letterSpacing: '0.04em' }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
