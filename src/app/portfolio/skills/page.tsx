import type { Metadata } from 'next';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

export const metadata: Metadata = {
	title: 'Habilidades',
	description: 'Competências técnicas em Front-end, Back-end, Design e ferramentas de desenvolvimento.',
};

const SkillsPage = () => {
	return (
		<>
			<MenuContentMobile />
			<MenuContentDesktop />
		</>
	);
};

export default SkillsPage;
