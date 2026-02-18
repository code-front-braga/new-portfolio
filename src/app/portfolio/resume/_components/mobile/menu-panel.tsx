'use client';

import { XIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { SectionList } from '../../../_shared/mobile/section-list';
import { RESUME_SECTIONS } from '../../constants/resume-sections';

type MobileMenuPanelProps = {
	onClose: () => void;
	makeNavigate: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
};

export const MobileMenuPanel = ({ onClose, makeNavigate, currentHash }: MobileMenuPanelProps) => {
	return (
		<motion.div
			key="panel"
			initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
			animate={{ opacity: 1, y: 0, scaleY: 1 }}
			exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
			transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
			className="custom-scrollbar h-screen w-full overflow-y-auto bg-zinc-950 px-1"
		>
			<div className="mb-4 flex items-center justify-between">
				<p className="font-geist-sans text-muted-foreground text-xs">Navegue pelo currículo</p>
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

			<SectionList
				items={RESUME_SECTIONS}
				makeNavigate={href => e => {
					makeNavigate(href)(e);
					onClose();
				}}
				currentHash={currentHash}
				title="Escolha uma seção"
			/>
		</motion.div>
	);
};
