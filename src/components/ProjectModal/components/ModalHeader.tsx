import * as Dialog from '@radix-ui/react-dialog';
import i18n from '@/i18n';
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
        <div
          className={`${i18n.resolvedLanguage === 'ja' ? 'break-words' : 'break-keep'} mb-1 font-semibold text-gray text-sm`}
          style={{ lineHeight: '1.5' }}
        >
          {project.summary}
        </div>
      </Dialog.Description>
      <div className='mb-7 space-y-4'>
        {project.description.split('\n\n').map((paragraph, i) => (
          <p
            key={`${project.title}-desc-${i}`}
            className={`${i18n.resolvedLanguage === 'ja' ? 'break-words' : 'break-keep'} whitespace-pre-line font-normal text-base text-white leading-relaxed`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};
