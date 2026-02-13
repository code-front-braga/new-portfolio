'use client';

import { useSearchParams } from 'next/navigation';

import { ABOUT_BLOCK } from '../constants/about-block';
import { AboutBlockItem } from './about-block-item';

export const AboutBlockList = () => {
	const searchParams = useSearchParams();
	const blockParam = searchParams.get('block');

	return (
		<div className="mb-6 grid grid-cols-1 gap-4 px-1">
			{ABOUT_BLOCK.map((item, i) => {
				const isActive = blockParam === item.block;
				return <AboutBlockItem key={item.block} item={item} isActive={isActive} index={i} />;
			})}
		</div>
	);
};
