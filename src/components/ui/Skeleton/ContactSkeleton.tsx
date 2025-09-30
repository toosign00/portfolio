import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';

export function ContactSkeleton() {
  return (
    <SectionLayout>
      <SectionHeader title='Contact' description='' />

      {/* ContactInfo Skeleton */}
      <div className='mb-12 flex flex-col items-center gap-2 text-center'>
        <div className='flex w-[15.625rem] items-center justify-center gap-2'>
          <div className='h-5 w-5 animate-pulse rounded bg-white/10' />
          <div className='h-5 w-36 animate-pulse rounded bg-white/10' />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <div className='h-5 w-5 animate-pulse rounded bg-white/10' />
          <div className='h-5 w-48 animate-pulse rounded bg-white/10' />
        </div>
      </div>

      {/* ContactForm Skeleton */}
      <div className='mx-auto flex max-w-md flex-col gap-4 rounded-xl bg-ui-background-black p-6 shadow-lg'>
        {/* Name field */}
        <div className='flex min-h-[5rem] flex-col gap-1'>
          <div className='h-5 w-12 animate-pulse rounded bg-white/10' />
          <div className='h-12 w-full animate-pulse rounded border border-gray-700 bg-ui-background-gray' />
          <div className='min-h-[1.25rem]' />
        </div>

        {/* Email field */}
        <div className='flex min-h-[5rem] flex-col gap-1'>
          <div className='h-5 w-14 animate-pulse rounded bg-white/10' />
          <div className='h-12 w-full animate-pulse rounded border border-gray-700 bg-ui-background-gray' />
          <div className='min-h-[1.25rem]' />
        </div>

        {/* Message field */}
        <div className='flex min-h-[7rem] flex-col gap-1'>
          <div className='h-5 w-16 animate-pulse rounded bg-white/10' />
          <div className='h-[7.5rem] w-full animate-pulse rounded border border-gray-700 bg-ui-background-gray' />
          <div className='min-h-[1.25rem]' />
        </div>

        {/* Submit button */}
        <div className='h-11 w-full animate-pulse rounded-lg bg-white/10' />
      </div>

      {/* Guestbook button */}
      <div className='mt-8 flex justify-center'>
        <div className='h-11 w-32 animate-pulse rounded-lg bg-white/10' />
      </div>
    </SectionLayout>
  );
}
