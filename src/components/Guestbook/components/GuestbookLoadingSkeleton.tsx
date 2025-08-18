export const GuestbookLoadingSkeleton = () => {
  return (
    <div
      className='rounded-lg border border-white/10 bg-ui-background p-6'
      aria-label='방명록 로딩 중'
      role='status'
    >
      <div className='space-y-4'>
        <div className='animate-pulse'>
          <div className='mb-2 flex items-center gap-2'>
            <div className='h-4 w-20 rounded bg-gray-600' />
            <div className='h-3 w-16 rounded bg-gray-600' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 w-full rounded bg-gray-600' />
            <div className='h-4 w-3/4 rounded bg-gray-600' />
          </div>
        </div>
        <div className='animate-pulse'>
          <div className='mb-2 flex items-center gap-2'>
            <div className='h-4 w-24 rounded bg-gray-600' />
            <div className='h-3 w-14 rounded bg-gray-600' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 w-5/6 rounded bg-gray-600' />
            <div className='h-4 w-4/5 rounded bg-gray-600' />
          </div>
        </div>
        <div className='animate-pulse'>
          <div className='mb-2 flex items-center gap-2'>
            <div className='h-4 w-16 rounded bg-gray-600' />
            <div className='h-3 w-12 rounded bg-gray-600' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 w-11/12 rounded bg-gray-600' />
            <div className='h-4 w-2/3 rounded bg-gray-600' />
          </div>
        </div>
      </div>
    </div>
  );
};
