import { Suspense } from 'react';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

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
