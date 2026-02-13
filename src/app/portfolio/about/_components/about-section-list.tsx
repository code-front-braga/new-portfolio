'use client';

import { ABOUT_SECTIONS } from '../constants/about-sections';
import { AboutSectionItem } from './about-section-item';

type AboutSectionListProps = {
	selectedProgramming: boolean | null;
};

export const AboutSectionList = ({ selectedProgramming }: AboutSectionListProps) => {
	if (selectedProgramming === null) return null;

	const filtered = ABOUT_SECTIONS.filter(s => s.isProgramming === selectedProgramming);

	return (
		<div className="grid grid-cols-1 gap-6">
			{filtered.map((item, i) => (
				<AboutSectionItem key={item.href} item={item} index={i} />
			))}
		</div>
	);
};
