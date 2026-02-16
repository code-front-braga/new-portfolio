'use client';

import { AnimatePresence } from 'motion/react';
import type { MouseEvent } from 'react';
import { useState } from 'react';

import { MenuButton } from '@/app/portfolio/about/_components/mobile/menu-button';

import { useSectionNavigation } from '../../../../../hooks/use-section-navigation';
import { SkillsSectionsContent } from '../skills-sections/sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
	const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
	const { makeNavigate } = useSectionNavigation(['#hard', '#soft'], { useViewport: true, offset: 140 });

	const handleClick = () => setIsMenuClicked(prev => !prev);

	return (
		<div className="block min-h-screen w-full bg-zinc-950 lg:hidden">
			<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 bg-zinc-950 p-4">
				<MenuButton onClick={handleClick} isMenuClicked={isMenuClicked} />

				<AnimatePresence initial={false}>
					{isMenuClicked && (
						<MobileMenuPanel
							onClose={() => setIsMenuClicked(false)}
							makeNavigate={(href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
								makeNavigate(href)(e);
							}}
						/>
					)}
				</AnimatePresence>
			</div>
			<div className="p-4">
				<SkillsSectionsContent
					makeNavigate={(href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
						makeNavigate(href)(e);
					}}
				/>
			</div>
		</div>
	);
};
