import { BriefcaseBusinessIcon, CodeXmlIcon, SparklesIcon, TargetIcon, UsersIcon, WorkflowIcon } from 'lucide-react';

import type { BookSectionItemData } from '../types';

export const BOOKS_SECTIONS: BookSectionItemData[] = [
	{
		label: 'Produtividade',
		href: '#productivity',
		icon: TargetIcon,
		color: 'text-amber-300',
		isPractical: true,
	},
	{
		label: 'Hábitos',
		href: '#habits',
		icon: WorkflowIcon,
		color: 'text-cyan-300',
		isPractical: false,
	},
	{
		label: 'Negócios/Startup',
		href: '#business',
		icon: BriefcaseBusinessIcon,
		color: 'text-indigo-300',
		isPractical: true,
	},
	{
		label: 'Experiência do Cliente',
		href: '#customer',
		icon: UsersIcon,
		color: 'text-blue-300',
		isPractical: true,
	},
	{
		label: 'Desenvolvimento',
		href: '#developer',
		icon: CodeXmlIcon,
		color: 'text-green-300',
		isPractical: true,
	},
	{
		label: 'Inspiração',
		href: '#inspiration',
		icon: SparklesIcon,
		color: 'text-pink-300',
		isPractical: false,
	},
];
