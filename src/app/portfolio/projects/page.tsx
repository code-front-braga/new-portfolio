import type { Metadata } from 'next';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

export const metadata: Metadata = {
	title: 'Projetos',
	description: 'Galeria de projetos desenvolvidos, focados em performance, UX e tecnologias modernas.',
};

const ProjectsPage = () => {
	return (
		<>
			<MenuContentMobile />
			<MenuContentDesktop />
		</>
	);
};

export default ProjectsPage;
