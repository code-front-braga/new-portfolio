'use client';

import { useEffect, useState } from 'react';

export const useScroll = (getTarget?: () => HTMLElement | Window | null) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const target = typeof getTarget === 'function' ? getTarget() : window;
		const el = target ?? window;
		const getY = () => (el instanceof Window ? el.scrollY : (el as HTMLElement).scrollTop);
		const handleScroll = () => setIsScrolled(getY() > 0);

		handleScroll();
		const addTarget = el instanceof Window ? window : el;
		addTarget.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
		return () => {
			addTarget.removeEventListener('scroll', handleScroll);
		};
	}, [getTarget]);

	return { isScrolled };
};
