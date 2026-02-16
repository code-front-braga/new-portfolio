'use client';

import { useSearchParams } from 'next/navigation';

import { MenuShellMobile } from '../../../_shared/mobile/menu-shell';
import type { BlockSlug } from '../../types';
import { AboutSectionsContent } from '../about-sections/about-sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
	const searchParams = useSearchParams();
	const blockParam = searchParams.get('block') as BlockSlug;
	const selectedProgramming = blockParam === 'professional' ? true : blockParam === 'personal' ? false : null;

	return (
		<MenuShellMobile
			anchors={['#programming', '#career', '#family', '#draw', '#music']}
			contentComponent={AboutSectionsContent}
			panelComponent={MobileMenuPanel}
			panelProps={{ selectedProgramming }}
			options={{ useViewport: true, offset: 140 }}
		/>
	);
};
