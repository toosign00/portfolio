import type { ModalHeaderProps } from "@/types/projectModal.type";

export const ModalHeader = ({ project, onClose }: ModalHeaderProps) => {
	return (
		<>
			<button
				type="button"
				onClick={onClose}
				className="absolute top-6 right-6 cursor-pointer text-2xl text-gray-400 hover:text-white"
				aria-label="모달 닫기"
			>
				×
			</button>
			<h2
				className="mb-2 text-xl leading-tight font-extrabold tracking-tight text-white sm:text-2xl"
				style={{ lineHeight: "1.15" }}
			>
				{project.title}
			</h2>
			<div
				className="text-gray mb-1 text-sm font-semibold"
				style={{ lineHeight: "1.5" }}
			>
				{project.summary}
			</div>
			<div
				className="mb-7 text-base font-normal text-white"
				style={{ lineHeight: "1.7" }}
			>
				{project.description}
			</div>
		</>
	);
};
