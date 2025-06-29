import { motion } from "framer-motion";
import { IoArrowBackOutline } from "react-icons/io5";

interface ProjectPageSkeletonProps {
	onBack?: () => void;
}

export function ProjectPageSkeleton({ onBack }: ProjectPageSkeletonProps) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#0a101a]">
			<div className="w-full max-w-xl px-8 py-4">
				{/* 뒤로가기 버튼 */}
				{onBack && (
					<button
						type="button"
						className="hover:text-blue mb-8 flex cursor-pointer items-center gap-0.5 text-sm text-gray-400"
						onClick={onBack}
						aria-label="메인페이지로 돌아가기"
					>
						<IoArrowBackOutline className="text-lg" /> 메인으로 돌아가기
					</button>
				)}

				{/* 스켈레톤 내용 */}
				<article className="flex flex-col items-start gap-6">
					{/* 제목 스켈레톤 */}
					<motion.div
						className="mb-1 h-8 w-3/4 rounded bg-white/10"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>

					{/* 요약 스켈레톤 */}
					<motion.div
						className="mb-1 h-5 w-1/2 rounded bg-white/10"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
					/>

					{/* 설명 스켈레톤 */}
					<div className="mb-2 w-full space-y-2">
						<motion.div
							className="h-6 w-full rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
						/>
						<motion.div
							className="h-6 w-2/3 rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
						/>
						<motion.div
							className="h-6 w-4/5 rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
						/>
						<motion.div
							className="h-6 w-3/4 rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
						/>
						<motion.div
							className="h-6 w-5/6 rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
						/>
					</div>

					{/* 기술 스택 스켈레톤 */}
					<div className="flex flex-wrap gap-2">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<motion.div
								key={i}
								className="h-6 w-16 rounded-lg bg-white/10 px-3 py-0.5"
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: 0.7 + i * 0.1,
								}}
							/>
						))}
					</div>

					{/* 프로젝트 정보 스켈레톤 */}
					<div className="mb-8 w-full">
						<div className="flex w-full flex-col gap-3 md:flex-row md:gap-2">
							{/* 참여인원 */}
							<div className="flex flex-1 flex-col">
								<motion.div
									className="mb-1 h-3 w-16 rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
								/>
								<motion.div
									className="h-4 w-12 rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
								/>
							</div>
							{/* 기간 */}
							<div className="flex flex-1 flex-col">
								<motion.div
									className="mb-1 h-3 w-8 rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }}
								/>
								<motion.div
									className="h-4 w-20 rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
								/>
							</div>
							{/* 관련 링크 */}
							<div className="flex flex-1 flex-col">
								<motion.div
									className="mb-1 h-3 w-16 rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
								/>
								<div className="flex gap-2">
									<motion.div
										className="h-4 w-12 rounded bg-white/10"
										animate={{ opacity: [0.5, 1, 0.5] }}
										transition={{ duration: 1.5, repeat: Infinity, delay: 1.3 }}
									/>
									<motion.div
										className="h-4 w-16 rounded bg-white/10"
										animate={{ opacity: [0.5, 1, 0.5] }}
										transition={{ duration: 1.5, repeat: Infinity, delay: 1.4 }}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* 상세 내용 스켈레톤 */}
					<div className="mb-2">
						<motion.div
							className="mb-2 h-5 w-20 rounded bg-white/10"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
						/>
						<ul className="space-y-2 pl-5">
							{[1, 2, 3, 4, 5].map((i) => (
								<motion.li
									key={i}
									className="h-4 w-full rounded bg-white/10"
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										delay: 1.6 + i * 0.1,
									}}
								/>
							))}
						</ul>
					</div>

					{/* 추가 상세 내용 스켈레톤 */}
					<div className="space-y-2 pl-5">
						{[1, 2, 3, 4, 5].map((i) => (
							<motion.div
								key={i}
								className="h-4 w-full rounded bg-white/10"
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: 2.1 + i * 0.1,
								}}
							/>
						))}
					</div>

					{/* 추가 내용 스켈레톤 */}
					<div className="space-y-2 pl-5">
						{[1, 2, 3, 4, 5].map((i) => (
							<motion.div
								key={i}
								className="h-4 w-full rounded bg-white/10"
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: 2.6 + i * 0.1,
								}}
							/>
						))}
					</div>
				</article>
			</div>
		</div>
	);
}
