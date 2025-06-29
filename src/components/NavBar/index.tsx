import { motion } from "framer-motion";
import { useScrollSection } from "@/hooks/useScrollSection";
import { type NavItem, navItems } from "../../constants/navigation.constants";

export const NavBar = () => {
	const { active, setActive, isNavigating } = useScrollSection(navItems);

	const handleClick = (e: React.MouseEvent, item: NavItem) => {
		e.preventDefault();

		// 즉시 활성 상태 변경 (클릭한 아이템으로)
		setActive(item.label);

		let targetId = item.sectionIds[0];
		if (item.label === "이력" && item.sectionIds.length > 1) {
			targetId = item.sectionIds[1];
		}

		const el = document.getElementById(targetId);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header className="sticky top-4 z-50 w-full sm:w-auto">
			<div className="flex justify-center">
				<motion.nav
					className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1.5 shadow-lg backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2"
					aria-label="메인 네비게이션"
					initial={{ y: -20, opacity: 0, scale: 0.9 }}
					animate={{ y: 0, opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 20,
						mass: 0.8,
						delay: 0.1,
					}}
				>
					<motion.div
						className="mr-1 flex items-center gap-0.5 sm:mr-2 sm:gap-1"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 15,
							mass: 0.5,
							delay: 0.3,
						}}
					>
						<motion.span
							className="bg-blue block h-2 w-2 rounded-full sm:h-3 sm:w-3"
							whileHover={{ scale: 1.3, rotate: 10 }}
							transition={{ type: "spring", stiffness: 600, damping: 12 }}
						/>
						<motion.span
							className="bg-pink block h-2 w-2 rounded-full sm:h-3 sm:w-3"
							whileHover={{ scale: 1.3, rotate: -10 }}
							transition={{ type: "spring", stiffness: 600, damping: 12 }}
						/>
						<motion.span
							className="bg-yellow block h-2 w-2 rounded-full sm:h-3 sm:w-3"
							whileHover={{ scale: 1.3, rotate: 10 }}
							transition={{ type: "spring", stiffness: 600, damping: 12 }}
						/>
					</motion.div>
					<div className="flex items-center gap-1 sm:gap-2">
						{navItems.map((item) => (
							<motion.div
								key={item.label}
								className="relative"
								initial={false}
								animate={{
									scale: active === item.label ? 1 : 0.95,
								}}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 30,
								}}
							>
								<a
									href={`#${item.sectionIds[0]}`}
									onClick={(e) => handleClick(e, item)}
									className={`focus:ring-blue relative flex cursor-pointer items-center justify-center rounded-full px-2 py-0.5 text-xs font-normal whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 sm:px-3 sm:text-sm md:text-base ${
										active === item.label
											? "text-white"
											: "text-gray-300 hover:text-white"
									}`}
									aria-current={active === item.label ? "page" : undefined}
									tabIndex={0}
								>
									{item.label}
								</a>
								{active === item.label && (
									<motion.div
										className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#0E1623]"
										layoutId="activeNavItem"
										transition={{
											type: "spring",
											stiffness: isNavigating ? 250 : 400,
											damping: isNavigating ? 25 : 30,
											mass: isNavigating ? 0.8 : 1,
										}}
										style={{ willChange: "transform" }}
									/>
								)}
							</motion.div>
						))}
					</div>
				</motion.nav>
			</div>
		</header>
	);
};
