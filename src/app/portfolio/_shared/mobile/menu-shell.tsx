'use client';

import { AnimatePresence } from 'motion/react';
import type { MouseEvent } from 'react';
import { useState } from 'react';

import { useSectionNavigation } from '../../../../hooks/use-section-navigation';
import { MenuButton } from '../menu-button';
import type { NavigateFn } from '../section';

type BasePanelProps = {
	onClose: () => void;
	makeNavigate: (href: string) => (e: MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
};

type MobileMenuShellProps<P extends Record<string, unknown> = Record<string, unknown>> = {
	anchors: string[];
	contentComponent: React.ComponentType<{ makeNavigate?: NavigateFn; sectionClassName?: string }>;
	panelComponent: React.ComponentType<BasePanelProps & P>;
	panelProps?: P;
	options?: { useViewport?: boolean; offset?: number };
};

export const MenuShellMobile = <P extends Record<string, unknown> = Record<string, unknown>>({
	anchors,
	contentComponent: Content,
	panelComponent: Panel,
	panelProps,
	options,
}: MobileMenuShellProps<P>) => {
	const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
	const { currentHash, makeNavigate } = useSectionNavigation(anchors, options ?? { useViewport: true, offset: 140 });

	const handleClick = () => setIsMenuClicked(prev => !prev);

	return (
		<div className="block min-h-screen w-full bg-zinc-950 lg:hidden">
			<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 bg-zinc-950 p-4">
				<MenuButton onClick={handleClick} isMenuClicked={isMenuClicked} />

				<AnimatePresence initial={false}>
					{isMenuClicked && (
						<Panel
							onClose={() => setIsMenuClicked(false)}
							makeNavigate={(href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
								makeNavigate(href)(e);
							}}
							currentHash={currentHash}
							{...(panelProps ?? ({} as P))}
						/>
					)}
				</AnimatePresence>
			</div>
			<div className="pt-32 p-4">
				<Content
					makeNavigate={(href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
						makeNavigate(href)(e);
					}}
				/>
			</div>
		</div>
	);
};
