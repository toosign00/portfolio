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

      {/* ModalHeader 스켈레톤 */}
      {/* 제목 스켈레톤 */}
      <motion.div
        className='mb-2 h-7 w-3/4 rounded bg-white/10 sm:h-9'
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ lineHeight: '1.15' }}
      />

      {/* 요약 스켈레톤 */}
      <motion.div
        className='mb-1 h-5 w-1/2 rounded bg-white/10'
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        style={{ lineHeight: '1.5' }}
      />

      {/* 설명 스켈레톤 */}
      <div className='mb-7 space-y-1.5'>
        <motion.div
          className='h-5 w-full rounded bg-white/10'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          style={{ lineHeight: '1.7' }}
        />
        <motion.div
          className='h-5 w-4/5 rounded bg-white/10'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className='h-5 w-2/3 rounded bg-white/10'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
      </div>

      {/* TechnologyStack 스켈레톤 */}
      <div className='mb-7 flex flex-wrap gap-2'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className='h-6 rounded-lg bg-white/10 px-3 py-0.5'
            style={{ width: `${Math.random() * 40 + 60}px` }} // 가변 너비
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5 + i * 0.1,
            }}
          />
        ))}
      </div>

      {/* ProjectInfo 스켈레톤 */}
      <div className='mb-8 w-full'>
        <div className='flex w-full flex-col gap-3 md:flex-row md:gap-2'>
          {/* 참여인원 */}
          <div className='flex flex-1 flex-col'>
            <motion.div
              className='mb-1 h-3 w-16 rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div
              className='h-4 w-12 rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
            />
          </div>
          {/* 기간 */}
          <div className='flex flex-1 flex-col'>
            <motion.div
              className='mb-1 h-3 w-8 rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className='h-4 w-20 rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
            />
          </div>
          {/* 관련 링크 */}
          <div className='flex flex-1 flex-col'>
            <motion.div
              className='mb-1 h-3 w-16 rounded bg-white/10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }}
            />
            <div className='flex gap-4'>
              <motion.div
                className='h-4 w-12 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
              />
              <motion.div
                className='h-4 w-16 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ProjectDetailList 스켈레톤 */}
      <div className='mb-6'>
        {/* 상세 내용 제목 */}
        <motion.div
          className='mb-4 h-6 w-20 rounded bg-white/10'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.3 }}
          style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}
        />

        {/* Detail 아이템들 */}
        <div className='space-y-6'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='leading-relaxed tracking-normal'
              style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}
            >
              {/* Detail 제목 */}
              <motion.div
                className='mb-3 h-5 w-3/4 rounded bg-white/10'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 1.4 + i * 0.1,
                }}
              />

              {/* 이미지 스켈레톤 (일부 아이템에만) */}
              {i % 2 === 0 && (
                <motion.div
                  className='mb-4 h-48 w-full rounded-lg bg-white/10'
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1.45 + i * 0.1,
                  }}
                />
              )}

              {/* Detail 내용 - 리스트 형태 */}
              <div className='space-y-2 pl-5'>
                {[1, 2, 3].map((j) => (
                  <motion.div
                    key={j}
                    className='h-4 rounded bg-white/10'
                    style={{ width: `${Math.random() * 30 + 60}%` }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 1.5 + i * 0.1 + j * 0.05,
                    }}
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
