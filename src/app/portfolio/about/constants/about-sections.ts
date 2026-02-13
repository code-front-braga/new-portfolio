import { CodeXmlIcon, GuitarIcon, HeartIcon, PaletteIcon } from 'lucide-react';

export const ABOUT_SECTIONS = [
	{
		label: 'Programação',
		href: '#programming',
		icon: CodeXmlIcon,
		color: 'text-cyan-400',
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
