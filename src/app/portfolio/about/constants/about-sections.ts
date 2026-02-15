import { BriefcaseBusinessIcon, CodeXmlIcon, GuitarIcon, HeartIcon, PaletteIcon } from 'lucide-react';

import type { AboutSectionItemData } from '../types';

export const ABOUT_SECTIONS: AboutSectionItemData[] = [
	{
		label: 'Programação',
		href: '#programming',
		icon: CodeXmlIcon,
		color: 'text-cyan-400',
		isProgramming: true,
	},
	{
		label: 'Carreira',
		href: '#career',
		icon: BriefcaseBusinessIcon,
		color: 'text-indigo-400',
		isProgramming: true,
	},
	{
		label: 'Família',
		href: '#family',
		icon: HeartIcon,
		color: 'text-pink-400',
		isProgramming: false,
	},
	{
		label: 'Desenho',
		href: '#draw',
		icon: PaletteIcon,
		color: 'text-violet-400',
		isProgramming: false,
	},
	{
		label: 'Música',
		href: '#music',
		icon: GuitarIcon,
		color: 'text-blue-400',
		isProgramming: false,
	},
];
