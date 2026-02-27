import type { Metadata } from 'next';
import { Suspense } from 'react';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

export const metadata: Metadata = {
	title: 'Sobre Mim',
	description: 'Conheça mais sobre minha trajetória, experiências e paixão por tecnologia e design.',
};

const AboutPage = () => {
	return (
		<>
			<Suspense fallback={null}>
				<MenuContentMobile />
			</Suspense>
			<MenuContentDesktop />
		</>
	);
};

export default AboutPage;
