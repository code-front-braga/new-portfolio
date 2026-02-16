import { BlockItem } from '../../../_shared/mobile/block-item';
import type { AboutBlockItemData } from '../../types';

type AboutBlockItemProps = {
	item: AboutBlockItemData;
	isActive: boolean;
	index: number;
};

export const AboutBlockItem = ({ item, isActive, index }: AboutBlockItemProps) => {
	return (
		<BlockItem
			item={{ label: item.label, value: item.block, icon: item.icon }}
			isActive={isActive}
			index={index}
			queryKey="block"
		/>
	);
};
