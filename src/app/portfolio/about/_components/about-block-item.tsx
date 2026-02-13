'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { AboutBlockItemData } from '../types';

type AboutBlockItemProps = {
	item: AboutBlockItemData;
	isActive: boolean;
	index: number;
};

export const AboutBlockItem = ({ item, isActive, index }: AboutBlockItemProps) => {
	const pathname = usePathname();

	return (
		<motion.div
			initial={{ opacity: 0, y: 10, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.05 + index * 0.05 }}
			whileHover={{ scale: 1.06, rotate: 0.5 }}
			whileTap={{ scale: 0.97 }}
			className="group relative flex items-center gap-3 text-left"
		>
			<Link
				href={{ pathname, query: { block: item.block } }}
				aria-selected={isActive}
				className={`flex h-full w-full items-center gap-2 rounded-md p-3 transition-colors ${
					isActive
						? 'border border-blue-500 bg-blue-900/40 ring-1 ring-blue-500'
						: 'border border-transparent bg-zinc-800 hover:bg-zinc-700'
				}`}
			>
				<span
					className={`relative flex h-8 w-8 items-center justify-center rounded-md ${isActive ? 'bg-blue-800' : 'bg-zinc-950'}`}
				>
					<item.icon size={18} className={`${isActive ? 'text-blue-300' : 'text-white'}`} />
				</span>
				<span className={`font-geist-sans text-sm ${isActive ? 'text-blue-300' : 'text-white'}`}>{item.label}</span>
			</Link>
		</motion.div>
	);
};
