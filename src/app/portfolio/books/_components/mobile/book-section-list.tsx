import { SectionList } from '../../../_shared/mobile/section-list';
import { BOOKS_SECTIONS } from '../../constants/books-sections';

export const BookSectionList = ({
	selectedPractical,
	makeNavigate,
	currentHash,
}: {
	selectedPractical: boolean | null;
	makeNavigate?: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
}) => {
	if (selectedPractical === null) return null;
	const filtered = BOOKS_SECTIONS.filter(s => s.isPractical === selectedPractical);
	return <SectionList items={filtered} makeNavigate={makeNavigate} currentHash={currentHash} />;
};
