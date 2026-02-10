import { ChildrenType } from '@/@types/children-type';

const PortfolioLayout = ({ children }: ChildrenType) => {
	return (
		<main className="bg-foreground h-dvh w-full px-4">
			<div className="container mx-auto h-full">{children}</div>
		</main>
	);
};

export default PortfolioLayout;
