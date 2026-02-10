import { SidebarTrigger } from '@/components/ui/sidebar';

export const NavMobile = () => {
	return (
		<nav className="flex lg:hidden">
			<SidebarTrigger />
		</nav>
	);
};
