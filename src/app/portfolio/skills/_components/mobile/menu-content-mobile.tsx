'use client';

import { MenuShellMobile } from '../../../_shared/mobile/menu-shell';
import { SkillsSectionsContent } from '../skills-sections/sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
	return (
		<MenuShellMobile
			anchors={['#hard', '#soft']}
			contentComponent={SkillsSectionsContent}
			panelComponent={MobileMenuPanel}
			options={{ useViewport: true, offset: 140 }}
		/>
	);
};
