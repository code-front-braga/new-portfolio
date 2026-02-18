'use client';

import { useSearchParams } from 'next/navigation';

import { MenuShellMobile } from '../../../_shared/mobile/menu-shell';
import { BOOKS_SECTIONS } from '../../constants/books-sections';
import { BlockSlug } from '../../types';
import { BooksSectionsContent } from '../books-sections/sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
	const searchParams = useSearchParams();
	const blockParam = searchParams.get('block') as BlockSlug;
	const selectedPractical = blockParam === 'practical' ? true : blockParam === 'inspirational' ? false : null;

	return (
		<MenuShellMobile
			anchors={BOOKS_SECTIONS.map(s => s.href)}
			contentComponent={BooksSectionsContent}
			panelComponent={MobileMenuPanel}
			panelProps={{ selectedPractical }}
			options={{ useViewport: true, offset: 140 }}
		/>
	);
};
