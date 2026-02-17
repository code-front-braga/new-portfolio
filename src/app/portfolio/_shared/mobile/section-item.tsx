'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import type { MouseEvent } from 'react';

import type { NavItemData } from '../aside-nav';

type SectionItemProps = {
	item: NavItemData;
	index: number;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	isActive?: boolean;
};

export const SectionItem = ({ item, index, onClick, isActive }: SectionItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.05 + index * 0.05 }}
			whileHover={{ scale: 1.06, rotate: 0.5 }}
			whileTap={{ scale: 0.97 }}
			className="group relative flex items-center gap-3 text-left"
		>
			<Link href={item.href} onClick={onClick} className="flex h-full w-full items-center gap-2">
				<span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-zinc-800">
					<item.icon
						size={18}
						className={`${item.color ?? 'text-white'} drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]`}
					/>
				</span>
				<span className={`font-geist-sans text-sm ${isActive ? 'text-blue-300' : 'text-white'}`}>{item.label}</span>
			</Link>
		</motion.div>
	);
};
