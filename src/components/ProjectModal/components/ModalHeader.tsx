import * as Dialog from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';
import { useLocalizedText } from '@/i18n/hooks/useLocalizedText';
import type { ModalHeaderProps } from '@/types/projectModal.types';

export const ModalHeader = ({ project }: ModalHeaderProps) => {
  const { i18n } = useTranslation();
  const getLocalizedText = useLocalizedText();

  const localizedTitle = getLocalizedText(project.title);
  const localizedSummary = getLocalizedText(project.summary);
  const localizedDescription = getLocalizedText(project.description);

  return (
    <>
      <Dialog.Title asChild>
        <h2
          className='mb-2 font-extrabold text-white text-xl leading-tight tracking-tight sm:text-2xl'
          style={{ lineHeight: '1.15' }}
        >
          {localizedTitle}
        </h2>
      </Dialog.Title>
      <Dialog.Description asChild>
        <div className='mb-1 font-semibold text-gray text-sm' style={{ lineHeight: '1.5' }}>
          {localizedSummary}
        </div>
      </Dialog.Description>
      <div className='mb-7 space-y-4'>
        {localizedDescription.split('\n\n').map((paragraph, _i) => (
          <p
            key={`${localizedTitle}-desc-${paragraph}`}
            className={`${i18n.language === 'ja' ? 'break-words' : 'break-keep'} whitespace-pre-line break-keep font-normal text-base text-white leading-relaxed`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};
