'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LINKS } from '@/app/portfolio/constants/links';

export const NavDesktop = () => {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center lg:flex">
			<ul className="flex items-center gap-6">
				{LINKS.map(section => {
					const active = pathname === section.href;
					return (
						<li key={section.href} className={`font-geist-sans text-sm ${active ? 'text-blue-400' : 'text-zinc-500'}`}>
							<Link href={section.href}>{section.label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
