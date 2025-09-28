interface ModalSkeletonProps {
  onClose?: () => void;
}

export function ModalSkeleton({ onClose }: ModalSkeletonProps) {
  return (
    <>
      {/* 닫기 버튼: 실제 모달과 동일하게 최상위 컨테이너 기준 */}
      {onClose && (
        <button
          type='button'
          onClick={onClose}
          className='absolute top-6 right-6 cursor-pointer text-2xl text-gray-400 hover:text-white'
          aria-label='모달 닫기'
        >
          ×
        </button>
      )}

      {/* ModalHeader 스켈레톤 */}
      {/* 제목 스켈레톤 */}
      <div
        className='mb-2 h-7 w-3/4 animate-pulse rounded bg-white/10 sm:h-9'
        style={{ lineHeight: '1.15' }}
      />

      {/* 요약 스켈레톤 */}
      <div
        className='mb-1 h-5 w-1/2 animate-pulse rounded bg-white/10'
        style={{ lineHeight: '1.5' }}
      />

      {/* 설명 스켈레톤 */}
      <div className='mb-7 space-y-1.5'>
        <div
          className='h-5 w-full animate-pulse rounded bg-white/10'
          style={{ lineHeight: '1.7' }}
        />
        <div className='h-5 w-4/5 animate-pulse rounded bg-white/10' />
        <div className='h-5 w-2/3 animate-pulse rounded bg-white/10' />
      </div>

      {/* TechnologyStack 스켈레톤 */}
      <div className='mb-7 flex flex-wrap gap-2'>
        {['w-16-1', 'w-20', 'w-14', 'w-18', 'w-12', 'w-16-2'].map((key) => {
          const width = key.includes('-') ? key.split('-')[0] : key;
          return (
            <div
              key={`tech-${key}`}
              className={`h-6 ${width} animate-pulse rounded-lg bg-white/10 px-3 py-0.5`}
            />
          );
        })}
      </div>

      {/* ProjectInfo 스켈레톤 */}
      <div className='mb-8 w-full'>
        <div className='flex w-full flex-col gap-3 md:flex-row md:gap-2'>
          {/* 참여인원 */}
          <div className='flex flex-1 flex-col'>
            <div className='mb-1 h-3 w-16 animate-pulse rounded bg-white/10' />
            <div className='h-4 w-12 animate-pulse rounded bg-white/10' />
          </div>
          {/* 기간 */}
          <div className='flex flex-1 flex-col'>
            <div className='mb-1 h-3 w-8 animate-pulse rounded bg-white/10' />
            <div className='h-4 w-20 animate-pulse rounded bg-white/10' />
          </div>
          {/* 관련 링크 */}
          <div className='flex flex-1 flex-col'>
            <div className='mb-1 h-3 w-16 animate-pulse rounded bg-white/10' />
            <div className='flex gap-4'>
              <div className='h-4 w-12 animate-pulse rounded bg-white/10' />
              <div className='h-4 w-16 animate-pulse rounded bg-white/10' />
            </div>
          </div>
        </div>
      </div>

      {/* ProjectDetailList 스켈레톤 */}
      <div className='mb-6'>
        {/* 상세 내용 제목 */}
        <div
          className='mb-4 h-6 w-20 animate-pulse rounded bg-white/10'
          style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}
        />

        {/* Detail 아이템들 */}
        <div className='space-y-6'>
          {[1, 2, 3, 4].map((num) => (
            <div
              key={`detail-${num}`}
              className='leading-relaxed tracking-normal'
              style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}
            >
              {/* Detail 제목 */}
              <div className='mb-3 h-5 w-3/4 animate-pulse rounded bg-white/10' />

              {/* 이미지 스켈레톤 (짝수 아이템에만) */}
              {num % 2 === 0 && (
                <div className='mb-4 h-48 w-full animate-pulse rounded-lg bg-white/10' />
              )}

              {/* Detail 내용 - 리스트 형태 */}
              <div className='space-y-2 pl-5'>
                {['w-4/5', 'w-3/5', 'w-4/6'].map((width) => (
                  <div
                    key={`detail-content-${num}-${width}`}
                    className={`h-4 ${width} animate-pulse rounded bg-white/10`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
