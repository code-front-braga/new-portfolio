import { SectionItem } from '../../../_shared/mobile/section-item';
import type { AboutSectionItemData } from '../../types';

type AboutSectionItemProps = {
	item: AboutSectionItemData;
	index: number;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	isActive?: boolean;
};

export const AboutSectionItem = ({ item, index, onClick, isActive }: AboutSectionItemProps) => {
	return <SectionItem item={item} index={index} onClick={onClick} isActive={isActive} />;
};
