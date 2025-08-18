export const GuestbookLoadingSkeleton = () => {
  return (
    <div
      className='bg-ui-background rounded-lg p-6 border border-white/10'
      aria-label='방명록 로딩 중'
      role='status'
    >
      <div className='space-y-4'>
        <div className='animate-pulse'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='h-4 bg-gray-600 rounded w-20' />
            <div className='h-3 bg-gray-600 rounded w-16' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 bg-gray-600 rounded w-full' />
            <div className='h-4 bg-gray-600 rounded w-3/4' />
          </div>
        </div>
        <div className='animate-pulse'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='h-4 bg-gray-600 rounded w-24' />
            <div className='h-3 bg-gray-600 rounded w-14' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 bg-gray-600 rounded w-5/6' />
            <div className='h-4 bg-gray-600 rounded w-4/5' />
          </div>
        </div>
        <div className='animate-pulse'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='h-4 bg-gray-600 rounded w-16' />
            <div className='h-3 bg-gray-600 rounded w-12' />
          </div>
          <div className='space-y-1'>
            <div className='h-4 bg-gray-600 rounded w-11/12' />
            <div className='h-4 bg-gray-600 rounded w-2/3' />
          </div>
        </div>
      </div>
    </div>
  );
};
