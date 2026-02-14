import { ChildrenType } from '@/@types/children-type';

import { HeaderContent } from './_shared/header/header-content';

const PortfolioLayout = ({ children }: ChildrenType) => {
	return (
		<main className="flex h-dvh w-full flex-col items-center bg-zinc-950">
			<HeaderContent />
			<section className="h-full w-full">{children}</section>
		</main>
	);
};

export default PortfolioLayout;
