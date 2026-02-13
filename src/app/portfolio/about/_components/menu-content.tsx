'use client';

import { ChevronRightIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { ABOUT_BLOCK } from '../constants/about-block';
import { ABOUT_SECTIONS } from '../constants/about-sections';

type BlockType = 'professional' | 'personal';

export const MenuContent = () => {
	const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const blockParam = searchParams.get('block') as BlockType;
	const selectedProgramming = blockParam === 'professional' ? true : blockParam === 'personal' ? false : null;

	const handleClick = () => setIsMenuClicked(prev => !prev);

	return (
		<div className="fixed top-18 z-50 flex w-full flex-col items-start gap-2 border-b border-b-zinc-700 p-4 md:hidden">
			<button
				onClick={handleClick}
				aria-expanded={isMenuClicked}
				className="font-geist-sans flex items-center gap-1.5 text-sm text-white transition-colors"
			>
				<span
					className={`inline-flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuClicked ? 'rotate-90' : 'rotate-0'}`}
				>
					<ChevronRightIcon size={18} />
				</span>
				<span className="font-bold">Menu</span>
			</button>

			<AnimatePresence initial={false}>
				{isMenuClicked && (
					<motion.div
						key="panel"
						initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
						animate={{ opacity: 1, y: 0, scaleY: 1 }}
						exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
						transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
						className="h-screen w-full overflow-y-auto bg-zinc-950 px-1"
					>
						<div className="mb-4 flex items-center justify-between">
							<p className="font-geist-sans text-muted-foreground text-xs">Escolha um tópico</p>
							<button
								aria-label="Fechar"
								onClick={() => setIsMenuClicked(false)}
								className="group rounded-md bg-zinc-800 p-2 text-white transition-colors hover:bg-zinc-700"
							>
								<motion.span
									initial={{ rotate: 0 }}
									whileHover={{ rotate: 90 }}
									transition={{ type: 'spring', stiffness: 260, damping: 20 }}
									className="flex items-center justify-center"
								>
									<XIcon size={16} className="text-white" />
								</motion.span>
							</button>
						</div>

						<div className="mb-6 grid grid-cols-1 gap-4">
							{ABOUT_BLOCK.map((item, i) => (
								<motion.div
									key={item.block}
									initial={{ opacity: 0, y: 10, scale: 0.98 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.05 }}
									whileHover={{ scale: 1.06, rotate: 0.5 }}
									whileTap={{ scale: 0.97 }}
									className={`group relative flex items-center gap-3 text-left`}
								>
									{(() => {
										const isActive = blockParam === item.block;
										return (
											<Link
												href={{ pathname, query: { block: item.block } }}
												aria-selected={isActive}
												className={`flex h-full w-full items-center gap-2 rounded-md p-3 transition-colors ${
													isActive ? 'bg-blue-900/40' : 'border border-transparent bg-zinc-800 hover:bg-zinc-700'
												}`}
											>
												<span
													className={`relative flex h-8 w-8 items-center justify-center rounded-md ${
														isActive ? 'bg-blue-800' : 'bg-zinc-950'
													}`}
												>
													<item.icon size={18} className={`${isActive ? 'text-blue-300' : 'text-white'}`} />
												</span>
												<span className={`font-geist-sans text-sm ${isActive ? 'text-blue-300' : 'text-white'}`}>
													{item.label}
												</span>
											</Link>
										);
									})()}
								</motion.div>
							))}
						</div>

						{selectedProgramming !== null && (
							<div className="grid grid-cols-1 gap-6 border-t border-t-zinc-700 pt-6">
								{ABOUT_SECTIONS.filter(s => s.isProgramming === selectedProgramming).map((item, i) => (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, y: 10, scale: 0.98 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.05 }}
										whileHover={{ scale: 1.06, rotate: 0.5 }}
										whileTap={{ scale: 0.97 }}
										className="group relative flex items-center gap-3 text-left"
									>
										<Link href={item.href} className="flex h-full w-full items-center gap-2">
											<span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800">
												<item.icon
													size={18}
													className={`${item.color ?? 'text-white'} drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]`}
												/>
											</span>
											<span className="font-geist-sans text-sm text-white">{item.label}</span>
										</Link>
									</motion.div>
								))}
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
