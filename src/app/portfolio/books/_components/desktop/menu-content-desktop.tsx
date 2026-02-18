'use client';

import { MenuShellDesktop } from '../../../_shared/desktop/menu-shell';
import { BOOKS_SECTIONS } from '../../constants/books-sections';
import { BooksSectionsContent } from '../books-sections/sections-content';

export const MenuContentDesktop = () => {
	return <MenuShellDesktop items={BOOKS_SECTIONS} images={[]} contentComponent={BooksSectionsContent} />;
};
