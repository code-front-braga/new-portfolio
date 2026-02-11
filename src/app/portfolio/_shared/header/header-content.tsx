'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { MyLogo } from '@/app/_shared/my-logo';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { SOCIALS } from '../../constants/socials';
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
					<ul className="hidden items-center gap-4 lg:flex">
						{SOCIALS.map((social, i) => (
							<Tooltip key={social.id}>
								<TooltipTrigger>
									<motion.li
										className="flex size-8 items-center justify-center rounded-full bg-zinc-600 hover:bg-zinc-300"
										initial={{ opacity: 0, y: -6, scale: 0.98 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										transition={{ duration: 0.3, ease: 'easeOut', delay: 0.35 + i * 0.05 }}
									>
										<Link href={social.href} rel="noopener noreferrer" target="_blank">
											<Image src={social.iconSrc} alt={social.id} width={18} height={18} />
										</Link>
									</motion.li>
								</TooltipTrigger>
								<TooltipContent className="bg-zinc-900">{social.name}</TooltipContent>
							</Tooltip>
						))}
					</ul>
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
