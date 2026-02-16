'use client';

import React, { useState } from 'react';

import type { NavItemData } from '../aside-nav';
import { SectionItem } from './section-item';

type SectionListProps<T extends NavItemData> = {
	items: T[];
	makeNavigate?: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
	title?: string;
};

export const SectionList = <T extends NavItemData>({
	items,
	makeNavigate,
	currentHash,
	title = 'Escolha uma seção',
}: SectionListProps<T>) => {
	const [hashState, setHashState] = useState<string>(currentHash ?? '');

	React.useEffect(() => {
		setHashState(currentHash ?? '');
	}, [currentHash]);

	return (
		<div className="space-y-4">
			<p className="font-geist-sans text-muted-foreground text-xs">{title}</p>
			<div className="grid grid-cols-1 gap-6">
				{items.map((item, i) => (
					<SectionItem
						key={item.href}
						item={item}
						index={i}
						onClick={makeNavigate ? makeNavigate(item.href) : undefined}
						isActive={item.href === hashState}
					/>
				))}
			</div>
		</div>
	);
};
