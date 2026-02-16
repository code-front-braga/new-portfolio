'use client';

import { MenuShellMobile } from '../../../_shared/mobile/menu-shell';
import { PROJECTS_SECTIONS } from '../../constants/projects-sections';
import { ProjectsSectionsContent } from '../projects-sections/sections-content';
import { MobileMenuPanel } from './menu-panel';

export const MenuContentMobile = () => {
  const anchors = PROJECTS_SECTIONS.map(s => s.href);
  return (
    <MenuShellMobile anchors={anchors} contentComponent={ProjectsSectionsContent} panelComponent={MobileMenuPanel} options={{ useViewport: true, offset: 140 }} />
  );
};
