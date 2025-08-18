export const GuestbookEmptyState = () => {
  return (
    <div
      className='bg-ui-background rounded-lg p-8 text-center border border-white/10'
      role='status'
      aria-label='방명록이 비어있음'
    >
      <p className='text-gray-400 mb-2'>아직 작성된 방명록이 없습니다.</p>
      <p className='text-gray-500 text-sm'>첫 번째 방명록을 남겨보세요!</p>
    </div>
  );
};
