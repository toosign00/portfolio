import { IoArrowBackOutline } from 'react-icons/io5';

interface ProjectPageSkeletonProps {
  onBack?: () => void;
}

export function ProjectPageSkeleton({ onBack }: ProjectPageSkeletonProps) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#0a101a]'>
      <div className='w-full max-w-xl px-8 py-4'>
        {/* 뒤로가기 버튼 */}
        {onBack && (
          <button
            type='button'
            className='mb-8 flex cursor-pointer items-center gap-0.5 text-gray-400 text-sm hover:text-blue'
            onClick={onBack}
            aria-label='메인페이지로 돌아가기'
          >
            <IoArrowBackOutline className='text-lg' /> 메인으로 돌아가기
          </button>
        )}

        {/* 스켈레톤 내용 */}
        <article className='flex flex-col items-start gap-6'>
          {/* 제목 스켈레톤 */}
          <div className='mb-1 h-8 w-3/4 animate-pulse rounded bg-white/10' />

          {/* 요약 스켈레톤 */}
          <div className='mb-1 h-5 w-1/2 animate-pulse rounded bg-white/10' />

          {/* 설명 스켈레톤 */}
          <div className='mb-2 w-full space-y-2'>
            {['w-full', 'w-2/3', 'w-4/5', 'w-3/4', 'w-5/6', 'w-3/5', 'w-9/10'].map((width) => (
              <div
                key={`description-${width}`}
                className={`h-6 ${width} animate-pulse rounded bg-white/10`}
              />
            ))}
          </div>

          {/* 기술 스택 스켈레톤 */}
          <div className='flex flex-wrap gap-2'>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={`tech-stack-${num}`}
                className='h-6 w-16 animate-pulse rounded-lg bg-white/10 px-3 py-0.5'
              />
            ))}
          </div>

          {/* 프로젝트 정보 스켈레톤 */}
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
                <div className='flex gap-2'>
                  <div className='h-4 w-12 animate-pulse rounded bg-white/10' />
                  <div className='h-4 w-16 animate-pulse rounded bg-white/10' />
                </div>
              </div>
            </div>
          </div>

          {/* 상세 내용 스켈레톤 */}
          <div className='mb-2 w-full'>
            <div className='mb-2 h-5 w-20 animate-pulse rounded bg-white/10' />
            <ul className='w-full space-y-2 pl-2'>
              {['w-full', 'w-4/5', 'w-5/6', 'w-3/4', 'w-2/3'].map((width) => (
                <li
                  key={`detail-list-${width}`}
                  className={`h-4 ${width} animate-pulse rounded bg-white/10`}
                />
              ))}
            </ul>
          </div>

          {/* 추가 상세 내용 스켈레톤 */}
          <div className='space-y-2 pl-5'>
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={`detail-content-${num}`}
                className='h-4 w-full animate-pulse rounded bg-white/10'
              />
            ))}
          </div>

          {/* 추가 내용 스켈레톤 */}
          <div className='space-y-2 pl-5'>
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={`additional-content-${num}`}
                className='h-4 w-full animate-pulse rounded bg-white/10'
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
