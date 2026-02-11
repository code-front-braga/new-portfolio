'use client';

import { DownloadIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LINKS } from '@/app/portfolio/constants/links';

export const NavDesktop = () => {
	const pathname = usePathname();
	const count = LINKS.length;

	return (
		<nav className="hidden items-center lg:flex">
			<ul className="flex items-center gap-6">
				{LINKS.map((link, i) => {
					const active = pathname === link.href;
					return (
						<motion.li
							key={link.href}
							className={`font-geist-sans text-sm ${active ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
							initial={{ opacity: 0, x: -14 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 + i * 0.6 }}
						>
							<Link href={link.href}>{link.label}</Link>
						</motion.li>
					);
				})}
			</ul>
			<motion.button
				className="group font-geist-sans ml-8 hidden items-center gap-1.5 rounded-full p-0.5 px-4 text-white shadow-lg ring shadow-zinc-900 hover:text-blue-300 hover:shadow-blue-950 lg:flex"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 + count * 0.08 }}
			>
				Currículo
				<DownloadIcon size={16} className="transition-all group-hover:animate-bounce group-hover:text-blue-300" />
			</motion.button>
		</nav>
	);
};
