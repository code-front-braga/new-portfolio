'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { MyLogo } from '@/app/_shared/my-logo';

import { SocialsList } from '../socials-list';
import { NavDesktop } from './nav/desktop/nav-desktop';
import { NavMobile } from './nav/mobile/nav-mobile';
import { SearchContent } from './search/search-content';

export const HeaderContent = () => {
	return (
		<motion.header
			className="max-w-8xl sticky top-0 z-10 w-full bg-zinc-950 p-4"
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<div className="flex w-full items-center justify-between">
				<motion.div
					className="flex items-center gap-10"
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
				>
					<Link href="#home" prefetch={true} className="flex items-center">
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ type: 'spring', stiffness: 300, damping: 40, delay: 0.12 }}
						>
							<MyLogo />
						</motion.div>
					</Link>
					<motion.div
						initial={{ opacity: 0, y: -6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
					>
						<NavDesktop />
					</motion.div>
				</motion.div>
				<motion.div
					className="flex items-center gap-4"
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
				>
					<motion.div
						initial={{ opacity: 0, y: -6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
					>
						<SearchContent />
					</motion.div>
					<SocialsList />
					<motion.div
						initial={{ opacity: 0, y: -6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
					>
						<NavMobile />
					</motion.div>
				</motion.div>
			</div>
		</motion.header>
	);
};
