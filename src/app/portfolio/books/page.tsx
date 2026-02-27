import type { Metadata } from 'next';
import { Suspense } from 'react';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

export const metadata: Metadata = {
	title: 'Livros',
	description: 'Uma lista de leituras que influenciaram minha carreira e visão de mundo tecnológica.',
};

const BooksPage = () => {
	return (
		<>
			<Suspense>
				<MenuContentMobile />
			</Suspense>
			<MenuContentDesktop />
		</>
	);
};

export default BooksPage;
