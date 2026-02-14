'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import type { BlockSlug } from '../../types';
import { ProgrammingMainContent } from '../about-sections/programming/programming-main-content';
import { useSectionNavigation } from '../desktop/use-section-navigation';
import { AboutBlockList } from './about-block-list';
import { AboutSectionList } from './about-section-list';
import { MenuButton } from './menu-button';

export const MenuContentMobile = () => {
	const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const blockParam = searchParams.get('block') as BlockSlug;
	const selectedProgramming = blockParam === 'professional' ? true : blockParam === 'personal' ? false : null;
	const { currentHash, makeNavigate } = useSectionNavigation(
		['#programming', '#career', '#family', '#draw', '#music'],
		{ useViewport: true, offset: 140 },
	);

	const handleClick = () => setIsMenuClicked(prev => !prev);

	return (
		<div className="block min-h-screen w-full bg-zinc-900 p-4 lg:hidden">
			<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 border-b border-b-zinc-700 bg-zinc-900 p-4">
				<MenuButton onClick={handleClick} isMenuClicked={isMenuClicked} />

				<AnimatePresence initial={false}>
					{isMenuClicked && (
						<motion.div
							key="panel"
							initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
							animate={{ opacity: 1, y: 0, scaleY: 1 }}
							exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
							transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
							className="custom-scrollbar h-screen w-full overflow-y-auto bg-zinc-900 px-1"
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
							<AboutSectionList
								selectedProgramming={selectedProgramming}
								makeNavigate={href => e => {
									makeNavigate(href)(e);
									setIsMenuClicked(false);
								}}
								currentHash={currentHash}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<ProgrammingMainContent
				makeNavigate={href => e => {
					makeNavigate(href)(e);
				}}
			/>
		</div>
	);
};
