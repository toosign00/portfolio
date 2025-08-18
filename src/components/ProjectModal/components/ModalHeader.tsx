import type { ModalHeaderProps } from '@/types/projectModal.types';

export const ModalHeader = ({ project, onClose }: ModalHeaderProps) => {
  return (
    <>
      <button
        type='button'
        onClick={onClose}
        className='absolute top-6 right-6 cursor-pointer text-2xl text-gray-400 hover:text-white'
        aria-label='모달 닫기'
      >
        ×
      </button>
      <h2
        className='mb-2 font-extrabold text-white text-xl leading-tight tracking-tight sm:text-2xl'
        style={{ lineHeight: '1.15' }}
      >
        {project.title}
      </h2>
      <div className='mb-1 font-semibold text-gray text-sm' style={{ lineHeight: '1.5' }}>
        {project.summary}
      </div>
      <div
        className='mb-7 whitespace-pre-line break-keep font-normal text-base text-white'
        style={{ lineHeight: '1.7' }}
      >
        {project.description}
      </div>
    </>
  );
};
