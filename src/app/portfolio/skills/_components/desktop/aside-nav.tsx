import { AsideNav as SharedAsideNav } from '../../../_shared/aside-nav';
import type { SkillsSectionItemData } from '../../constants/skills-sections';

type AsideNavProps = {
	items: SkillsSectionItemData[];
	currentHash: string;
	makeNavigate: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const AsideNav = ({ items, currentHash, makeNavigate }: AsideNavProps) => {
	return <SharedAsideNav items={items} currentHash={currentHash} makeNavigate={makeNavigate} />;
};
