import { SectionList } from '../../../_shared/mobile/section-list';
import { ABOUT_SECTIONS } from '../../constants/about-sections';

type AboutSectionListProps = {
	selectedProgramming: boolean | null;
	makeNavigate?: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
};

export const AboutSectionList = ({ selectedProgramming, makeNavigate, currentHash }: AboutSectionListProps) => {
	if (selectedProgramming === null) return null;
	const filtered = ABOUT_SECTIONS.filter(s => s.isProgramming === selectedProgramming);
	return <SectionList items={filtered} makeNavigate={makeNavigate} currentHash={currentHash} />;
};
