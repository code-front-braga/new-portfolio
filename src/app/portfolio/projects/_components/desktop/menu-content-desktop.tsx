'use client';

import { MenuShellDesktop } from '../../../_shared/desktop/menu-shell';
import { DEFAULT_PROJECTS_IMAGES, PROJECTS_SECTIONS } from '../../constants/projects-sections';
import { ProjectsSectionsContent } from '../projects-sections/sections-content';

export const MenuContentDesktop = () => {
  return (
    <MenuShellDesktop items={PROJECTS_SECTIONS} images={DEFAULT_PROJECTS_IMAGES} contentComponent={ProjectsSectionsContent} />
  );
};
