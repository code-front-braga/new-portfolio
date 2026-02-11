import Link from 'next/link';

import { MyLogo } from '@/app/_shared/my-logo';
import { HyperText } from '@/components/ui/hyper-text';

import { NavContent } from './nav/nav-content';

export const HeaderContent = () => {
	return (
		<header className="max-w-8xl bg-foreground sticky top-0 z-10 w-full p-4 backdrop-blur-md">
			<div className="flex w-full items-center justify-between">
				<Link href="#hero" prefetch={true} className="flex items-center">
					<MyLogo />
					<div className="flex items-end gap-1">
						<HyperText className="font-anta text-xl text-white lg:text-3xl">Braga</HyperText>
						<HyperText className="font-anta text-base text-white lowercase lg:text-xl">.dev</HyperText>
					</div>
				</Link>
				<NavContent />
			</div>
		</header>
	);
};
