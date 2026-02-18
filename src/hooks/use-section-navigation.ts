'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

export function useSectionNavigation(hrefs: string[], options?: { useViewport?: boolean; offset?: number }) {
	const contentRef = useRef<HTMLDivElement>(null);
	const [currentHash, setCurrentHash] = useState<string>('');
	const useViewport = options?.useViewport ?? false;
	const offset = options?.offset ?? 0;

	const navigateTo = useCallback(
		(href: string) => {
			const container = contentRef.current;
			const target = (
				useViewport ? document.querySelector(href) : container?.querySelector(href)
			) as HTMLElement | null;
			if (!target) return;
			if (useViewport) {
				const top = target.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top, behavior: 'smooth' });
			} else if (container) {
				const top =
					target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - offset;
				container.scrollTo({ top, behavior: 'smooth' });
			}
			setCurrentHash(href);
		},
		[useViewport, offset],
	);

	const makeNavigate = useCallback(
		(href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			navigateTo(href);
		},
		[navigateTo],
	);

	useEffect(() => {
		const container = contentRef.current;

		const targets = (
			useViewport ? hrefs.map(h => document.querySelector(h)) : hrefs.map(h => container?.querySelector(h))
		).filter(Boolean) as HTMLElement[];

		const ratios = new Map<string, number>();
		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					const id = '#' + (entry.target as HTMLElement).id;
					ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
				}
				let best = '';
				let max = 0;
				for (const href of hrefs) {
					const r = ratios.get(href) ?? 0;
					if (r > max) {
						max = r;
						best = href;
					}
				}
				if (best) setCurrentHash(best);
			},
			{ root: useViewport ? null : container, threshold: [0, 0.25, 0.5, 0.75, 1] },
		);

		targets.forEach(t => observer.observe(t));

		return () => observer.disconnect();
	}, [hrefs, useViewport]);

	React.useEffect(() => {
		const initial = typeof window !== 'undefined' ? window.location.hash : '';
		if (initial) {
			setCurrentHash(initial);
			const run = () => navigateTo(initial);
			if (typeof window !== 'undefined') {
				if ('requestAnimationFrame' in window) window.requestAnimationFrame(run);
				else setTimeout(run, 0);
			}
		}
	}, [navigateTo]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		if (currentHash) window.history.replaceState(null, '', currentHash);
	}, [currentHash]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const onHashChange = () => {
			const h = window.location.hash;
			if (h) {
				setCurrentHash(h);
				navigateTo(h);
			}
		};
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, [navigateTo]);

	return { contentRef, currentHash, navigateTo, makeNavigate };
}
