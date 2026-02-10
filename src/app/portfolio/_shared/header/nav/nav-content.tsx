import { NavDesktop } from './desktop/nav-desktop';
import { NavMobile } from './mobile/nav-mobile';

export const NavContent = () => {
	return (
		<>
			<NavDesktop />
			<NavMobile />
		</>
	);
};
