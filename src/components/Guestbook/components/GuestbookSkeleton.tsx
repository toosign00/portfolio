export const GuestbookSkeleton = () => {
  const nameWidths = ['w-20', 'w-24', 'w-16'];
  const dateWidths = ['w-16', 'w-14', 'w-12'];
  const messageWidths = [
    ['w-full', 'w-3/4'],
    ['w-5/6', 'w-4/5'],
    ['w-11/12', 'w-2/3'],
  ];

  return (
    <div
      className='rounded-lg border border-white/10 bg-ui-background p-6'
      aria-label='방명록 로딩 중'
      role='status'
    >
      <div className='space-y-4'>
        {Array.from({ length: 10 }, (_, index) => {
          const key = `guestbook-skeleton-${index}`;
          const nameIdx = index % nameWidths.length;
          const dateIdx = index % dateWidths.length;
          const msgIdx = index % messageWidths.length;
          return (
            <div key={key} className='animate-pulse'>
              <div className='mb-2 flex items-center gap-2'>
                <div className={`h-4 ${nameWidths[nameIdx]} rounded bg-gray-600`} />
                <div className={`h-3 ${dateWidths[dateIdx]} rounded bg-gray-600`} />
              </div>
              <div className='space-y-1'>
                <div className={`h-4 ${messageWidths[msgIdx][0]} rounded bg-gray-600`} />
                <div className={`h-4 ${messageWidths[msgIdx][1]} rounded bg-gray-600`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
