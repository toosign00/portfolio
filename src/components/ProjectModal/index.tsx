import type { Project } from '@/data/projectsData';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ModalHeader } from './components/ModalHeader';
import { TechnologyStack } from './components/TechnologyStack';
import { ProjectInfo } from './components/ProjectInfo';
import { ProjectDetails } from './components/ProjectDetails';
import { useModalClose } from '@/hooks/useModalClose';
import { usePreventScroll } from '@/hooks/usePreventScroll';

/**
 * @interface ProjectModalProps
 * @description 프로젝트 모달 컴포넌트의 props 타입 정의
 * @property {Project} project - 표시할 프로젝트 정보
 * @property {() => void} onClose - 모달을 닫는 콜백 함수
 */
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * @component ProjectModal
 * @description 프로젝트 상세 정보를 보여주는 모달 컴포넌트
 * @param {ProjectModalProps} props - 컴포넌트 props
 * @returns {JSX.Element} 프로젝트 모달 컴포넌트
 */
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const details = project.details;
  const modalRef = useRef<HTMLDivElement>(null);
  const { isClosing, handleClose, handleOverlayClick } = useModalClose(onClose);

  // 스크롤 방지 훅 사용
  usePreventScroll();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <motion.div
        ref={modalRef}
        className="bg-ui-background relative mx-4 max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-xl border border-white/10 px-4 py-10 shadow-2xl sm:mx-0 sm:px-8"
        tabIndex={-1}
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        animate={{
          opacity: isClosing ? 0 : 1,
          y: isClosing ? 70 : 0,
          scale: isClosing ? 0.95 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 40,
          duration: 0.2,
        }}
      >
        <ModalHeader project={project} onClose={handleClose} />
        <TechnologyStack technologies={project.technologies} />
        <ProjectInfo project={project} />
        <ProjectDetails details={details} />
      </motion.div>
    </motion.div>
  );
};
