'use client';

import { BrainIcon, CodeXmlIcon, XIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

type MobileMenuPanelProps = {
	onClose: () => void;
	makeNavigate: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const MobileMenuPanel = ({ onClose, makeNavigate }: MobileMenuPanelProps) => {
	return (
		<motion.div
			key="skills-panel"
			initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
			animate={{ opacity: 1, y: 0, scaleY: 1 }}
			exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
			transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
			className="custom-scrollbar h-screen w-full overflow-y-auto bg-zinc-950 px-1"
		>
			<div className="mb-4 flex items-center justify-between">
				<p className="font-geist-sans text-muted-foreground text-xs">Escolha uma categoria</p>
				<button
					aria-label="Fechar"
					onClick={onClose}
					className="group rounded-md bg-zinc-800 p-2 text-white transition-colors hover:bg-zinc-700"
				>
					<motion.span
						initial={{ rotate: 0 }}
						whileHover={{ rotate: 90 }}
						transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						className="flex items-center justify-center"
					>
						<XIcon size={16} className="text-white" />
					</motion.span>
				</button>
			</div>

			<div className="grid grid-cols-1 gap-4">
				<motion.div
					initial={{ opacity: 0, y: 10, scale: 0.98 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
					whileHover={{ scale: 1.06, rotate: 0.5 }}
					whileTap={{ scale: 0.97 }}
					className="group relative flex items-center gap-3 text-left"
				>
					<Link
						href="#hard"
						onClick={e => {
							makeNavigate('#hard')(e);
							onClose();
						}}
						className="flex h-full w-full items-center gap-2 rounded-md bg-zinc-800 p-3 text-white transition-colors hover:bg-zinc-700"
					>
						<span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950">
							<CodeXmlIcon size={18} className="text-blue-300" />
						</span>
						<span className="font-geist-sans text-sm">Hard Skills</span>
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10, scale: 0.98 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
					whileHover={{ scale: 1.06, rotate: 0.5 }}
					whileTap={{ scale: 0.97 }}
					className="group relative flex items-center gap-3 text-left"
				>
					<Link
						href="#soft"
						onClick={e => {
							makeNavigate('#soft')(e);
							onClose();
						}}
						className="flex h-full w-full items-center gap-2 rounded-md bg-zinc-800 p-3 text-white transition-colors hover:bg-zinc-700"
					>
						<span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950">
							<BrainIcon size={18} className="text-pink-300" />
						</span>
						<span className="font-geist-sans text-sm">Soft Skills</span>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};
