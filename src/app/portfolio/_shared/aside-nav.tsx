'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export type NavItemData = {
	label: string;
	href: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
	color?: string;
};

type AsideNavProps<T extends NavItemData> = {
	items: T[];
	currentHash: string;
	makeNavigate: (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
	heading?: string;
};

export const AsideNav = <T extends NavItemData>({
	items,
	currentHash,
	makeNavigate,
	heading = 'Navegue',
}: AsideNavProps<T>) => {
	return (
		<aside className="group flex w-full max-w-40 flex-col pl-2 items-start gap-4 overflow-hidden whitespace-nowrap text-white transition-all duration-600 hover:max-w-60">
			<motion.h3
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className="font-geist-mono text-xs font-bold"
			>
				{heading}
			</motion.h3>
			<div className="flex flex-col items-start gap-4">
				{items.map((item, index) => {
					const isActive = item.href === currentHash;
					return (
						<motion.li
							key={item.label}
							initial={{ opacity: 0, y: 10, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.05 + index * 0.05 }}
							whileHover={{ scale: 1.06, rotate: 0.5 }}
							whileTap={{ scale: 0.97 }}
							className="list-none"
						>
							<Link
								href={item.href}
								onClick={makeNavigate(item.href)}
								className={`font-saira flex items-center gap-1 text-sm font-semibold group-hover:gap-2 ${isActive ? 'text-blue-300' : 'text-zinc-300 hover:text-white'}`}
							>
								<span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900">
									<item.icon size={18} className={`${isActive ? item.color : 'text-zinc-300 hover:text-white'}`} />
								</span>
								<span className="max-w-0 truncate overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:opacity-100">
									{item.label}
								</span>
							</Link>
						</motion.li>
					);
				})}
			</div>
		</aside>
	);
};
