import { motion } from 'framer-motion';

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
      {/* 스켈레톤 내용 */}
      <div className='max-h-[80vh] pt-2'>
        {/* 제목 스켈레톤 */}
        <motion.div
          className='mb-2 h-7 w-3/4 rounded bg-white/10 sm:h-9'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* 요약 스켈레톤 */}
        <motion.div
          className='mb-1 h-5 w-1/2 rounded bg-white/10'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        />
        {/* 설명 스켈레톤 */}
        <div className='mb-7 space-y-1.5'>
          <motion.div
            className='h-7 w-full rounded bg-white/10'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className='h-7 w-2/3 rounded bg-white/10'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </div>
        {/* 기술 스택 스켈레톤 */}
        <div className='mb-7 flex flex-wrap gap-2'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className='h-6 w-16 rounded-lg bg-white/10 px-3 py-0.5'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4 + i * 0.1,
              }}
            />
          ))}
        </div>
        {/* 프로젝트 정보 스켈레톤 */}
        <div className='mb-8 w-full'>
          <div className='flex w-full flex-col gap-2 md:flex-row md:gap-2'>
            {/* 참여인원 */}
            <div className='flex flex-1 flex-col'>
              <motion.div
                className='mb-1 h-3 w-16 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className='h-4 w-12 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </div>
            {/* 기간 */}
            <div className='flex flex-1 flex-col'>
              <motion.div
                className='mb-1 h-3 w-8 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
              />
              <motion.div
                className='h-4 w-20 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              />
            </div>
            {/* 관련 링크 */}
            <div className='flex flex-1 flex-col'>
              <motion.div
                className='mb-1 h-3 w-16 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
              />
              <div className='flex gap-2'>
                <motion.div
                  className='h-4 w-12 rounded bg-white/10'
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }}
                />
                <motion.div
                  className='h-4 w-16 rounded bg-white/10'
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 상세 내용 스켈레톤 */}
        <div className='mb-2'>
          <motion.div
            className='mb-2 h-5 w-20 rounded bg-white/10'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
          />
          <ul className='space-y-1.5 pl-5'>
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.li
                key={i}
                className='h-4 w-full rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 1.3 + i * 0.1,
                }}
              />
            ))}
          </ul>
        </div>
        {/* 추가 내용 스켈레톤 */}
        <div className='space-y-1.5 pb-4 pl-5'>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className='h-4 w-full rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1.8 + i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
