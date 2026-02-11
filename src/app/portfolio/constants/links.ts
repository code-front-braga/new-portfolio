import { BoxesIcon, FileUserIcon, ZapIcon } from 'lucide-react';

export const LINKS = [
	{
		label: 'Início',
		href: '/portfolio/home',
	},
	{
		label: 'Sobre',
		href: '/portfolio/about',
	},
	{
		label: 'Skills',
		href: '/portfolio/skills',
	},
	{
		label: 'Projetos',
		href: '/portfolio/projects',
	},
];

export const COMMAND_LINKS = [
	{
		label: 'Projetos',
		href: '/portfolio/projects',
		icon: BoxesIcon,
	},
	{
		label: 'Skills',
		href: '/portfolio/skills',
		icon: ZapIcon,
	},
	{
		label: 'Currículo',
		href: '/portfolio/resume',
		icon: FileUserIcon,
	},
];
