import { BookOpenIcon,BoxesIcon, FileUserIcon, ZapIcon } from 'lucide-react';

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
		label: 'Livros',
		href: '/portfolio/books',
	},
	{
		label: 'Skills',
		href: '/portfolio/skills',
	},
	{
		label: 'Projetos',
		href: '/portfolio/projects',
	},
	{
		label: 'Currículo',
		href: '/portfolio/resume',
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
		label: 'Livros',
		href: '/portfolio/books',
		icon: BookOpenIcon,
	},
	{
		label: 'Currículo',
		href: '/portfolio/resume',
		icon: FileUserIcon,
	},
];
