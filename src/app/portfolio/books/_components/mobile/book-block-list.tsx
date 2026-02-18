'use client';

import { BlockItem } from '../../../_shared/mobile/block-item';
import { BOOKS_BLOCK } from './constants/books-block';

export const BookBlockList = ({ selectedPractical }: { selectedPractical: boolean | null }) => {
	return (
		<div className="mb-6 grid grid-cols-1 gap-4">
			{BOOKS_BLOCK.map((item, i) => {
				const isActive = selectedPractical === (item.block === 'practical');
				return <BlockItem key={item.block} item={{ label: item.label, value: item.block, icon: item.icon }} isActive={isActive} index={i} queryKey="block" />;
			})}
		</div>
	);
};
