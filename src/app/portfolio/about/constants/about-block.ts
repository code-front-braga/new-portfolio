import { CodeXml, UserRound } from 'lucide-react';

import type { AboutBlockItemData } from '../types';

export const ABOUT_BLOCK: AboutBlockItemData[] = [
	{
		label: 'Profissional',
		block: 'professional',
		icon: CodeXml,
	},
	{
		label: 'Pessoal',
		block: 'personal',
		icon: UserRound,
	},
];
