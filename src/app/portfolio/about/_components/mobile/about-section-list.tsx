'use client';

import React, { useState } from 'react';

import { AboutSectionItem } from './about-section-item';
import { ABOUT_SECTIONS } from './constants/about-sections';

type AboutSectionListProps = {
	selectedProgramming: boolean | null;
	makeNavigate?: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	currentHash?: string;
};

export const AboutSectionList = ({ selectedProgramming, makeNavigate, currentHash }: AboutSectionListProps) => {
	const [hashState, setHashState] = useState<string>(currentHash ?? '');

	React.useEffect(() => {
		setHashState(currentHash ?? '');
	}, [currentHash]);

	if (selectedProgramming === null) return null;

	const filtered = ABOUT_SECTIONS.filter(s => s.isProgramming === selectedProgramming);

	return (
		<div className="grid grid-cols-1 gap-6">
			{filtered.map((item, i) => (
				<AboutSectionItem
					key={item.href}
					item={item}
					index={i}
					onClick={makeNavigate ? makeNavigate(item.href) : undefined}
					isActive={item.href === hashState}
				/>
			))}
		</div>
	);
};
