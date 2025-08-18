import type { CareerItemProps } from '@/types/career.types';
import { Badge } from './Badge';

export function CareerItem({ period, company, role, description, skills }: CareerItemProps) {
  return (
    <div className='relative border-white border-l pl-8 text-left'>
      <div className='-translate-x-[0.5625rem] absolute top-0 left-0 h-4 w-4 rounded-full border-4 border-pink bg-white' />

      <div className='mb-2 text-gray text-sm'>{period}</div>
      <h3 className='mb-1 font-semibold text-white text-xl'>{company}</h3>
      <p className='mb-4 text-pink'>{role}</p>

      <ul className='mb-4 list-inside list-disc space-y-1 text-white/80'>
        {description.map((item, i) => (
          <li key={`${item.slice(0, 20)}-${i}`}>{item}</li>
        ))}
      </ul>

      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <Badge key={skill} variant='outline' className='border-gray bg-ui-background text-gray'>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
