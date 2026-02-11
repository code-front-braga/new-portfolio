'use client';

import { useIsMobile } from '@/hooks/use-mobile';

import { SearchDesktop } from './desktop/search-desktop';
import { SearchMobile } from './mobile/search-mobile';

export const SearchContent = () => {
	const isMobile = useIsMobile();
	return isMobile ? <SearchMobile /> : <SearchDesktop />;
};
