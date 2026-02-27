import type { Metadata } from 'next';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

export const metadata: Metadata = {
	title: 'Currículo',
	description: 'Minha trajetória profissional, formação acadêmica e experiências no desenvolvimento de software.',
};

const ResumePage = () => {
	return (
		<>
			<MenuContentMobile />
			<MenuContentDesktop />
		</>
	);
};

export default ResumePage;
