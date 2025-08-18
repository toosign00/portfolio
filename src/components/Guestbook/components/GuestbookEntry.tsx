import type { GuestbookEntryProps } from '@/types/guestbook.types';
import { formatRelativeTime } from '@/utils/timeUtils';

export const GuestbookEntry = ({ entry }: GuestbookEntryProps) => {
  return (
    <div className='border-b border-white/5 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0'>
      <div className='flex items-center gap-2 mb-2'>
        <span className='font-semibold text-white text-sm'>{entry.name}</span>
        <span className='text-xs text-gray-400'>{formatRelativeTime(entry.created_at)}</span>
      </div>

      {/* 메시지 */}
      <div className='text-gray-200 leading-relaxed text-sm whitespace-pre-wrap break-words'>
        {entry.message}
      </div>
    </div>
  );
};
