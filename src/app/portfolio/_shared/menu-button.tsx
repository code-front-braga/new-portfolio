'use client';

import { ChevronRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { useCurrentRouteLabel } from '@/hooks/use-current-route';

type MenuButtonProps = {
	onClick: () => void;
	isMenuClicked: boolean;
};

export const MenuButton = ({ onClick, isMenuClicked }: MenuButtonProps) => {
	const currentPath = useCurrentRouteLabel();
	return (
		<div className="flex w-full items-center justify-between">
			<motion.button
				initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
				animate={{ opacity: 1, y: 0, scaleY: 1 }}
				exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
				transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				onClick={onClick}
				aria-expanded={isMenuClicked}
				className="font-geist-sans flex h-6 items-center gap-1 text-sm text-white transition-colors"
			>
				<span
					className={`inline-flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuClicked ? 'rotate-90' : 'rotate-0'}`}
				>
					<ChevronRightIcon size={18} />
				</span>
				<span className="font-bold">
					Menu <span className="font-light text-blue-300">(página atual)</span>
				</span>
			</motion.button>
			<span className="font-geist-mono text-blue-300">{currentPath}</span>
		</div>
	);
};
