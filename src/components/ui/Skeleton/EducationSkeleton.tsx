import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';

export function EducationSkeleton() {
  return (
    <SectionLayout id='education'>
      <SectionHeader title='Education' useAnimation={false} />
      <div className='mx-auto max-w-3xl'>
        <ul className='space-y-20'>
          {[1, 2].map((num) => (
            <li key={`education-skeleton-${num}`}>
              <div className='relative'>
                <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='h-10 w-10 animate-pulse rounded-full bg-white/10' />
                    <div className='space-y-2'>
                      <div className='h-6 w-32 animate-pulse rounded bg-white/10' />
                      <div className='h-4 w-24 animate-pulse rounded bg-white/10' />
                    </div>
                  </div>
                  <div className='h-6 w-24 animate-pulse rounded-full bg-white/10' />
                </div>
                <div className='mt-4 border-white/5 border-t pt-4'>
                  <ul className='space-y-2'>
                    {[1, 2, 3].map((item) => (
                      <li key={`desc-${num}-${item}`}>
                        <div className='h-5 w-full animate-pulse rounded bg-white/10' />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
