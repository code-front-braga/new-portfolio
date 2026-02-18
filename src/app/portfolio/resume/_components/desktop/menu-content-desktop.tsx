'use client';

import { DEFAULT_PROJECTS_IMAGES } from '@/app/portfolio/projects/constants/projects-sections';

import { MenuShellDesktop } from '../../../_shared/desktop/menu-shell';
import { RESUME_SECTIONS } from '../../constants/resume-sections';
import { ResumeSectionsContent } from '../resume-sections/sections-content';

export const MenuContentDesktop = () => {
	return (
		<MenuShellDesktop
			items={RESUME_SECTIONS}
			images={Array(DEFAULT_PROJECTS_IMAGES.length).fill('/resume.png')}
			contentComponent={ResumeSectionsContent}
		/>
	);
};
