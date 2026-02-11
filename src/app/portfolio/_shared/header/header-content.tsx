import Link from 'next/link';

import { MyLogo } from '@/app/_shared/my-logo';
import { HyperText } from '@/components/ui/hyper-text';

import { NavDesktop } from './nav/desktop/nav-desktop';
import { NavMobile } from './nav/mobile/nav-mobile';
import { SearchContent } from './search/search-content';

export const HeaderContent = () => {
	return (
		<header className="max-w-8xl bg-foreground sticky top-0 z-10 w-full p-4 backdrop-blur-md">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-10">
					<Link href="#home" prefetch={true} className="flex items-center">
						<MyLogo />
						<span className="font-geist-sans mr-1.5 text-xl font-extralight text-zinc-400 lg:text-4xl">/</span>
						<div className="flex items-end gap-1">
							<HyperText className="font-anta text-xl font-light text-white lg:text-3xl">Braga</HyperText>
							<HyperText className="font-anta text-base font-light text-white lowercase lg:text-xl">.dev</HyperText>
						</div>
					</Link>
					<NavDesktop />
				</div>
				<div className="flex items-center gap-4">
					<SearchContent />
					<NavMobile />
				</div>
			</div>
		</header>
	);
};
