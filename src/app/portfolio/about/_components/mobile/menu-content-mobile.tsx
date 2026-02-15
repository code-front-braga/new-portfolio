'use client';

import { AnimatePresence } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useSectionNavigation } from '../../../../../hooks/use-section-navigation';
import type { BlockSlug } from '../../types';
import { SectionsContent } from '../about-sections/sections-content';
import { MenuButton } from './menu-button';
import { MobileMenuPanel } from './menu-panel';

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
		<div className="block min-h-screen w-full bg-zinc-950 lg:hidden">
			<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 bg-zinc-950 p-4">
				<MenuButton onClick={handleClick} isMenuClicked={isMenuClicked} />

				<AnimatePresence initial={false}>
					{isMenuClicked && (
						<MobileMenuPanel
							onClose={() => setIsMenuClicked(false)}
							makeNavigate={makeNavigate}
							currentHash={currentHash}
							selectedProgramming={selectedProgramming}
						/>
					)}
				</AnimatePresence>
			</div>
			<div className="p-4">
				<SectionsContent
					makeNavigate={href => e => {
						makeNavigate(href)(e);
					}}
				/>
			</div>
		</div>
	);
};
