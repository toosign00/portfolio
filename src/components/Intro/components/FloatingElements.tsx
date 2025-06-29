import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useMemo } from "react";
import { floatingVariants } from "@/motion/intoAnimations";
import type { FloatingElementConfig } from "@/types/intro.type";

const FLOATING_CONFIG: FloatingElementConfig[] = [
	{
		className:
			"from-pink/20 absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br to-purple-500/10 blur-xl",
		delay: 0,
	},
	{
		className:
			"from-blue/20 absolute right-20 bottom-20 h-40 w-40 rounded-full bg-gradient-to-br to-cyan-400/10 blur-xl",
		delay: 1,
	},
	{
		className:
			"from-yellow/15 absolute top-1/3 right-1/4 h-24 w-24 rounded-full bg-gradient-to-br to-orange-400/10 blur-lg",
		delay: 0.5,
	},
	{
		className:
			"to-pink/10 absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-purple-500/15 blur-lg",
		delay: 1.5,
	},
];

export function FloatingElements() {
	const elements = useMemo<FloatingElementConfig[]>(() => FLOATING_CONFIG, []);

	const motionStyle: CSSProperties = {
		willChange: "transform",
	};

	return (
		<>
			{elements.map((element: FloatingElementConfig, index: number) => (
				<motion.div
					key={`floating-${element.className.slice(0, 20)}-${index}`}
					className={element.className}
					variants={floatingVariants}
					initial="initial"
					animate="animate"
					transition={{ delay: element.delay }}
					style={motionStyle}
				/>
			))}
		</>
	);
}
