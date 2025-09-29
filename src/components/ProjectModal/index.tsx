import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ModalSkeleton } from '@/components/ui/Skeleton/ModalSkeleton';
import { useProject } from '@/hooks/useProjectsQuery';
import { useProjectSkeletonLoading } from '@/hooks/useSkeletonLoading';
import { isNotFoundError, normalizeErrorMessage } from '@/utils/errorUtils';
import { ModalHeader } from './components/ModalHeader';
import { ProjectDetailList } from './components/ProjectDetailList';
import { ProjectInfo } from './components/ProjectInfo';
import { TechnologyStack } from './components/TechnologyStack';

export const ProjectModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // React Query를 사용한 프로젝트 데이터 조회
  const { data: project, isPending, error } = useProject(id);

  // 스켈레톤 UI 로직
  const { showSkeleton, hasError } = useProjectSkeletonLoading({
    isPending,
    project,
    error,
  });

  // 모달 상태 관리
  const [isOpen, setIsOpen] = useState(!!id);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    setIsOpen(!!id);
  }, [id]);

  const handleOpenChange = async (open: boolean) => {
    if (!open) {
      setIsOpen(false);
      setShouldNavigate(true);
    }
  };

  const handleExitComplete = async () => {
    if (shouldNavigate) {
      setShouldNavigate(false);
      await navigate(-1);
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <m.div
                className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
              />
            </Dialog.Overlay>
            <div className='fixed inset-0 z-50 flex items-center justify-center'>
              <Dialog.Content asChild forceMount>
                <m.div
                  className={`relative mx-4 overflow-y-scroll rounded-xl border border-white/10 bg-ui-background px-4 py-10 shadow-2xl sm:mx-0 sm:px-8 ${
                    hasError
                      ? 'max-h-[80vh] w-full max-w-xl overflow-hidden'
                      : 'max-h-[85vh] w-full max-w-2xl'
                  }`}
                  initial={{ opacity: 0, y: 70, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, y: 70, scale: 0.95 }}
                  transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
                >
                  {showSkeleton && (
                    <>
                      <Dialog.Title className='sr-only'>{t('projectModals.loading')}</Dialog.Title>
                      <Dialog.Description className='sr-only'>
                        {t('projectModals.loadingDescription')}
                      </Dialog.Description>
                      <ModalSkeleton onClose={() => handleOpenChange(false)} />
                    </>
                  )}
                  {hasError && (
                    <div className='text-center'>
                      <Dialog.Title className='mb-4 font-bold text-red-400 text-xl'>
                        {isNotFoundError(error)
                          ? t('projectModals.notFound')
                          : t('projectModals.error')}
                      </Dialog.Title>
                      <Dialog.Description className='mb-6 text-gray-400'>
                        {normalizeErrorMessage(error)}
                      </Dialog.Description>
                      <Dialog.Close asChild>
                        <Button type='button' variant='primary' size='md'>
                          {t('common.close')}
                        </Button>
                      </Dialog.Close>
                    </div>
                  )}
                  {project && !showSkeleton && !hasError && (
                    <>
                      <ModalHeader project={project} />
                      <TechnologyStack technologies={project.technologies} />
                      <ProjectInfo project={project} />
                      <ProjectDetailList details={project.details} />
                      <Dialog.Close asChild>
                        <button
                          type='button'
                          className='focus-ring absolute top-6 right-6 cursor-pointer text-2xl text-gray-400 hover:text-white'
                          aria-label={t('common.close')}
                        >
                          ×
                        </button>
                      </Dialog.Close>
                    </>
                  )}
                </m.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
};
