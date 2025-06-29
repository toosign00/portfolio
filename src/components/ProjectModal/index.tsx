import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModalSkeleton } from "@/components/Skeleton/ModalSkeleton";
import { useModalClose } from "@/hooks/useModalClose";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import { useProject } from "@/hooks/useProjectsQuery";
import { useProjectSkeletonLoading } from "@/hooks/useSkeletonLoading";
import { isNotFoundError, normalizeErrorMessage } from "@/utils/errorUtils";
import { ModalHeader } from "./components/ModalHeader";
import { ProjectDetailList } from "./components/ProjectDetailList";
import { ProjectInfo } from "./components/ProjectInfo";
import { TechnologyStack } from "./components/TechnologyStack";

/**
 * @component ProjectModal
 * @description 프로젝트 상세 정보를 보여주는 모달 컴포넌트
 * @param {ProjectModalProps} props - 컴포넌트 props
 * @returns {JSX.Element} 프로젝트 모달 컴포넌트
 */
export const ProjectModal = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const modalRef = useRef<HTMLDivElement>(null);

	// React Query를 사용한 프로젝트 데이터 조회
	const { data: project, isPending, error } = useProject(id);

	// 스켈레톤 UI 로직
	const { showSkeleton, hasError } = useProjectSkeletonLoading({
		isPending,
		project,
		error,
	});

	const handleClose = () => {
		navigate(-1);
	};

	const { isClosing, handleOverlayClick } = useModalClose(handleClose);

	// 스크롤 방지 훅 사용
	usePreventScroll();

	// 로딩 상태
	if (showSkeleton) {
		return (
			<motion.div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
			>
				<motion.div
					ref={modalRef}
					data-modal-content
					className="bg-ui-background relative mx-4 max-h-[80vh] w-full max-w-xl overflow-y-scroll rounded-xl border border-white/10 px-4 py-10 shadow-2xl sm:mx-0 sm:px-8"
					tabIndex={-1}
					initial={{ opacity: 0, y: 70, scale: 0.95 }}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
					}}
					transition={{
						type: "spring",
						stiffness: 600,
						damping: 40,
						duration: 0.2,
					}}
				>
					<ModalSkeleton onClose={handleClose} />
				</motion.div>
			</motion.div>
		);
	}

	// 에러 상태
	if (hasError) {
		const isNotFound = isNotFoundError(error);
		const errorMessage = normalizeErrorMessage(error);

		return (
			<motion.div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
				onClick={handleOverlayClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: isClosing ? 0 : 1 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
			>
				<motion.div
					ref={modalRef}
					data-modal-content
					className="bg-ui-background relative mx-4 max-h-[80vh] w-full max-w-xl overflow-y-scroll rounded-xl border border-white/10 px-4 py-10 shadow-2xl sm:mx-0 sm:px-8"
					tabIndex={-1}
					initial={{ opacity: 0, y: 70, scale: 0.95 }}
					animate={{
						opacity: isClosing ? 0 : 1,
						y: isClosing ? 70 : 0,
						scale: isClosing ? 0.95 : 1,
					}}
					transition={{
						type: "spring",
						stiffness: 600,
						damping: 40,
						duration: 0.2,
					}}
				>
					<div className="text-center">
						<h2 className="mb-4 text-xl font-bold text-white">
							{isNotFound
								? "프로젝트를 찾을 수 없습니다"
								: "오류가 발생했습니다"}
						</h2>
						<p className="mb-6 text-gray-400">{errorMessage}</p>
						<button
							type="button"
							onClick={handleClose}
							className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
						>
							닫기
						</button>
					</div>
				</motion.div>
			</motion.div>
		);
	}

	if (!project) {
		return null;
	}

	const details = project.details;

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
			onClick={handleOverlayClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: isClosing ? 0 : 1 }}
			transition={{ duration: 0.2, ease: "easeInOut" }}
		>
			<motion.div
				ref={modalRef}
				data-modal-content
				className="bg-ui-background relative mx-4 max-h-[80vh] w-full max-w-xl overflow-y-scroll rounded-xl border border-white/10 px-4 py-10 shadow-2xl sm:mx-0 sm:px-8"
				tabIndex={-1}
				initial={{ opacity: 0, y: 70, scale: 0.95 }}
				animate={{
					opacity: isClosing ? 0 : 1,
					y: isClosing ? 70 : 0,
					scale: isClosing ? 0.95 : 1,
				}}
				transition={{
					type: "spring",
					stiffness: 600,
					damping: 40,
					duration: 0.2,
				}}
			>
				<ModalHeader project={project} onClose={handleClose} />
				<TechnologyStack technologies={project.technologies} />
				<ProjectInfo project={project} />
				<ProjectDetailList details={details} />
			</motion.div>
		</motion.div>
	);
};
