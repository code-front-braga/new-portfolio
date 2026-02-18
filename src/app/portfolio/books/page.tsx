import { Suspense } from 'react';

import { MenuContentDesktop } from './_components/desktop/menu-content-desktop';
import { MenuContentMobile } from './_components/mobile/menu-content-mobile';

const BooksPage = () => {
	return (
		<>
			<Suspense fallback={<div className="p-4 text-white lg:hidden">Carregando...</div>}>
				<MenuContentMobile />
			</Suspense>
			<MenuContentDesktop />
		</>
	);
};

export default BooksPage;
