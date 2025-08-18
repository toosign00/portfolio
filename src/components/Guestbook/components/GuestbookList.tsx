import type { GuestbookListProps } from '@/types/guestbook.types';
import { GuestbookEmptyState } from './GuestbookEmptyState';
import { GuestbookEntry } from './GuestbookEntry';
import { GuestbookLoadingSkeleton } from './GuestbookLoadingSkeleton';

export const GuestbookList = ({ entries, loading }: GuestbookListProps) => {
  if (loading) {
    return <GuestbookLoadingSkeleton />;
  }

  if (!entries || entries.length === 0) {
    return <GuestbookEmptyState />;
  }

  return (
    <div className='bg-ui-background rounded-lg p-6 border border-white/10'>
      <div className='mb-4 flex items-center justify-between border-b border-white/10 pb-4'>
        <h2 className='font-semibold text-white'>방명록 {entries.length}개</h2>
      </div>

      <div>
        {entries.map((entry) => (
          <GuestbookEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};
