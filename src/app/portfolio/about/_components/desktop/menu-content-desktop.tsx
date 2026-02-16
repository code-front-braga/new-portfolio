'use client';

import { MenuShellDesktop } from '../../../_shared/desktop/menu-shell';
import { ABOUT_SECTIONS } from '../../constants/about-sections';
import { AboutSectionsContent } from '../about-sections/about-sections-content';
import { DEFAULT_GALLERY_IMAGES } from './constants/gallery-assets';

export const MenuContentDesktop = () => {
	return (
		<MenuShellDesktop items={ABOUT_SECTIONS} images={DEFAULT_GALLERY_IMAGES} contentComponent={AboutSectionsContent} />
	);
};
