import Link from 'next/link';

import { MyLogo } from '@/app/_shared/my-logo';

import { NavContent } from './nav/nav-content';

export const HeaderContent = () => {
	return (
		<header className="max-w-8xl bg-foreground sticky top-0 z-10 w-full p-4 backdrop-blur-md">
			<div className="flex w-full items-center justify-between">
				<Link href="#hero" prefetch={true}>
					<MyLogo />
				</Link>
				<NavContent />
			</div>
		</header>
	);
};
