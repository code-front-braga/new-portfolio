'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import type { BlockSlug } from '../../types';
import { AboutBlockList } from './about-block-list';
import { AboutSectionList } from './about-section-list';
import { MenuButton } from './menu-button';

export const MenuContent = () => {
	const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const blockParam = searchParams.get('block') as BlockSlug;
	const selectedProgramming = blockParam === 'professional' ? true : blockParam === 'personal' ? false : null;

	const handleClick = () => setIsMenuClicked(prev => !prev);

	return (
		<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 border-b border-b-zinc-700 p-4 md:hidden">
			<MenuButton onClick={handleClick} isMenuClicked={isMenuClicked} />

			<AnimatePresence initial={false}>
				{isMenuClicked && (
					<motion.div
						key="panel"
						initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
						animate={{ opacity: 1, y: 0, scaleY: 1 }}
						exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
						transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
						className="h-screen w-full overflow-y-auto bg-zinc-950 px-1"
					>
						<div className="mb-4 flex items-center justify-between">
							<p className="font-geist-sans text-muted-foreground text-xs">Escolha um tópico</p>
							<button
								aria-label="Fechar"
								onClick={() => setIsMenuClicked(false)}
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

						<AboutBlockList />
						<AboutSectionList selectedProgramming={selectedProgramming} onItemClick={() => setIsMenuClicked(false)} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
