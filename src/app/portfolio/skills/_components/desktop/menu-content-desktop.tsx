'use client';

import { MenuShellDesktop } from '../../../_shared/desktop/menu-shell';
import { SKILLS_SECTIONS } from '../../constants/skills-sections';
import { SkillsSectionsContent } from '../skills-sections/sections-content';
import { DEFAULT_SKILLS_IMAGES } from './constants/skills-assets';

export const MenuContentDesktop = () => {
	return (
		<MenuShellDesktop items={SKILLS_SECTIONS} images={DEFAULT_SKILLS_IMAGES} contentComponent={SkillsSectionsContent} />
	);
};
