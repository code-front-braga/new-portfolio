import { SearchDesktop } from './desktop/search-desktop';
import { SearchMobile } from './mobile/search-mobile';

export const SearchContent = () => {
	return (
		<>
			<SearchMobile />
			<SearchDesktop />
		</>
	);
};
