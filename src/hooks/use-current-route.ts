'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function useCurrentRouteLabel(): string {
	const pathname = usePathname();
	return useMemo(() => {
		if (!pathname) return '';
		const MAP: Record<string, string> = {
			'/portfolio/home': 'Início',
			'/portfolio/about': 'Sobre',
			'/portfolio/skils': 'Skills',
			'/portfolio/projects': 'Projetos',
			'/portfolio/resume': 'Currículo',
		};
		if (MAP[pathname]) return MAP[pathname];
		const segments = pathname.split('/').filter(Boolean);
		const last = segments[segments.length - 1] ?? '';
		const formatted = last.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || pathname;
		return formatted;
	}, [pathname]);
}
