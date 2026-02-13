'use client';

import { useEffect, useState } from 'react';

import { ABOUT_SECTIONS } from '../constants/about-sections';
import { AboutSectionItem } from './about-section-item';

type AboutSectionListProps = {
	selectedProgramming: boolean | null;
	onItemClick?: () => void;
};

export const AboutSectionList = ({ selectedProgramming, onItemClick }: AboutSectionListProps) => {
	const [currentHash, setCurrentHash] = useState<string>('');

	useEffect(() => {
		const update = () => setCurrentHash(window.location.hash);
		update();
		window.addEventListener('hashchange', update);
		return () => window.removeEventListener('hashchange', update);
	}, []);

	if (selectedProgramming === null) return null;

	const filtered = ABOUT_SECTIONS.filter(s => s.isProgramming === selectedProgramming);

	return (
		<div className="grid grid-cols-1 gap-6">
			{filtered.map((item, i) => (
				<AboutSectionItem
					key={item.href}
					item={item}
					index={i}
					onClick={onItemClick}
					isActive={item.href === currentHash}
				/>
			))}
		</div>
	);
};
