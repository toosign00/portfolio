import * as Dialog from '@radix-ui/react-dialog';
import type { ModalHeaderProps } from '@/types/projectModal.types';

export const ModalHeader = ({ project }: ModalHeaderProps) => {
  return (
    <>
      <Dialog.Title asChild>
        <h2
          className='mb-2 font-extrabold text-white text-xl leading-tight tracking-tight sm:text-2xl'
          style={{ lineHeight: '1.15' }}
        >
          {project.title}
        </h2>
      </Dialog.Title>
      <Dialog.Description asChild>
        <div className='mb-1 font-semibold text-gray text-sm' style={{ lineHeight: '1.5' }}>
          {project.summary}
        </div>
      </Dialog.Description>
      <div
        className='mb-7 whitespace-pre-line break-keep font-normal text-base text-white'
        style={{ lineHeight: '1.7' }}
      >
        {project.description}
      </div>
    </>
  );
};
