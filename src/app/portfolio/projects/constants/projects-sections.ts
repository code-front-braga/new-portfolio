import { BoxIcon } from 'lucide-react';

import { REPOSITORIES } from './repositories';

export const PROJECTS_SECTIONS = REPOSITORIES.map((repo, idx) => {
	const slug = repo.title
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-');
	return {
		label: repo.title,
		href: `#${slug}`,
		icon: BoxIcon,
		color: ['text-blue-300', 'text-indigo-300', 'text-pink-300', 'text-violet-300'][idx % 4],
	};
});

export const DEFAULT_PROJECTS_IMAGES = REPOSITORIES.map(r => r.img);
