'use client';

import { motion } from 'motion/react';

import { HyperText } from '@/components/ui/hyper-text';
import { TypingAnimation as InlineTyping } from '@/components/ui/typing-animation';

export const HomeMobileText = () => {
	return (
		<motion.div
			className="absolute top-140 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center gap-2 lg:hidden"
			initial={{ opacity: 0, x: 12 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
		>
			<div className="flex items-center gap-1">
				<HyperText
					className="font-geist-sans text-center text-3xl font-semibold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]"
					duration={900}
				>
					Leonardo
				</HyperText>
				<HyperText
					className="font-geist-sans text-center text-3xl font-semibold text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]"
					duration={900}
				>
					Braga
				</HyperText>
			</div>

			<InlineTyping className="font-geist-mono text-base text-zinc-300" delay={500}>
				Desenvolvedor Web
			</InlineTyping>
		</motion.div>
	);
};
