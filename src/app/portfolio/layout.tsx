import { ChildrenType } from '@/@types/children-type';

import { HeaderContent } from './_shared/header/header-content';

const PortfolioLayout = ({ children }: ChildrenType) => {
	return (
		<main className="bg-foreground flex h-dvh w-full flex-col items-center px-4">
			<HeaderContent />
			<div className="container mx-auto h-full">{children}</div>
		</main>
	);
};

export default PortfolioLayout;
