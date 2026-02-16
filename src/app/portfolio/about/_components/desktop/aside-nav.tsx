import { AsideNav as SharedAsideNav } from '../../../_shared/aside-nav';
import type { AboutSectionItemData } from '../../types';

type AsideNavProps = {
	items: AboutSectionItemData[];
	currentHash: string;
	makeNavigate: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const AsideNav = ({ items, currentHash, makeNavigate }: AsideNavProps) => {
	return <SharedAsideNav items={items} currentHash={currentHash} makeNavigate={makeNavigate} />;
};
