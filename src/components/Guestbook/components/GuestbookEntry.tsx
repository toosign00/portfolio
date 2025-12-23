import { useRelativeTime } from '@/hooks/useRelativeTime';
import type { GuestbookEntryProps } from '@/types/guestbook.types';

export const GuestbookEntry = ({ entry }: GuestbookEntryProps) => {
  const formatRelativeTime = useRelativeTime();
  return (
    <div className='mb-4 border-white/5 border-b pb-4 last:mb-0 last:border-b-0 last:pb-0'>
      <div className='mb-2 flex items-center gap-2'>
        <span className='font-semibold text-sm text-white'>{entry.name}</span>
        <span className='text-gray-400 text-xs'>{formatRelativeTime(entry.created_at)}</span>
      </div>

      {/* 메시지 */}
      <div className='wrap-break-word whitespace-pre-wrap text-gray-200 text-sm leading-relaxed'>
        {entry.message}
      </div>
    </div>
  );
};
