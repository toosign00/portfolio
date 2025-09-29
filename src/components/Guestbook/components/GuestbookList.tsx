import { useTranslation } from 'react-i18next';
import type { GuestbookListProps } from '@/types/guestbook.types';
import { GuestbookEmptyState } from './GuestbookEmptyState';
import { GuestbookEntry } from './GuestbookEntry';
import { GuestbookErrorState } from './GuestbookErrorState';
import { GuestbookSkeleton } from './GuestbookSkeleton';

export const GuestbookList = ({
  entries,
  loading,
  totalCount,
  error,
  onRetry,
}: GuestbookListProps & { totalCount?: number; error?: string | null; onRetry?: () => void }) => {
  const { t } = useTranslation();
  if (loading) {
    return <GuestbookSkeleton />;
  }

  if (error) {
    return <GuestbookErrorState onRetry={onRetry} />;
  }

  if (!entries || entries.length === 0) {
    return <GuestbookEmptyState />;
  }

  return (
    <div className='rounded-lg border border-white/10 bg-ui-background p-6'>
      <div className='mb-4 flex items-center justify-between border-white/10 border-b pb-4'>
        <h2 className='font-semibold text-white'>
          {t('guestbook.list.title', { count: totalCount ?? entries.length })}
        </h2>
      </div>

      <div>
        {entries.map((entry) => (
          <GuestbookEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};
