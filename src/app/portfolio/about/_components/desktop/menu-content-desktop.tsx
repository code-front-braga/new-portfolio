'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { ProgrammingMainContent } from '../about-sections/programming/programming-main-content';
import { ABOUT_SECTIONS } from './constants/about-sections';
import { useSectionNavigation } from './use-section-navigation';

export const MenuContentDesktop = () => {
	const { contentRef, currentHash, makeNavigate } = useSectionNavigation(ABOUT_SECTIONS.map(s => s.href));

	return (
		<div className="relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-360 justify-between gap-6 pt-12 pb-2 text-white lg:flex">
			<aside className="h-full w-full max-w-60">lalaala</aside>

			<div ref={contentRef} className="custom-scrollbar h-full overflow-y-auto">
				<ProgrammingMainContent makeNavigate={makeNavigate} />
			</div>

			<aside className="flex w-full max-w-60 flex-col items-start gap-4 text-white">
				<motion.h3
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="font-saira text-sm font-bold"
				>
					Conteúdo da página
				</motion.h3>
				<div className="flex flex-col items-start gap-4">
					{ABOUT_SECTIONS.map((item, index) => {
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
									className={`font-saira group flex items-center gap-2 text-sm font-semibold ${isActive ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`}
								>
									<span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900">
										<item.icon
											size={18}
											className={`${isActive ? item.color : 'text-zinc-400 group-hover:text-white'} drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]`}
										/>
									</span>
									{item.label}
								</Link>
							</motion.li>
						);
					})}
				</div>
			</aside>
		</div>
	);
};
