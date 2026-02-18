'use client';

import { MenuShellMobile } from '../../../_shared/mobile/menu-shell';
import { RESUME_SECTIONS } from '../../constants/resume-sections';
import { ResumeSectionsContent } from '../resume-sections/sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
	const anchors = RESUME_SECTIONS.map(s => s.href);
	return (
		<MenuShellMobile
			anchors={anchors}
			contentComponent={ResumeSectionsContent}
			panelComponent={MobileMenuPanel}
			options={{ useViewport: true, offset: 140 }}
		/>
	);
};
