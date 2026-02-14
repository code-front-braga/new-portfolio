'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent } from 'react';

import { ProgrammingMainContent } from '../about-sections/programming/programming-main-content';
import { ABOUT_SECTIONS } from './constants/about-sections';
import { useSectionNavigation } from './use-section-navigation';

const GALLERY_ASSETS = {
	image9: '/icon-logo-header.svg',
	goku: '/goku.jpg',
	guitar: '/my-guitar.jpg',
	image4: '/my-image4.png',
};

const ReflectiveGallery = ({ images }: { images: string[] }) => {
	const handleMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		e.currentTarget.style.setProperty('--x', `${x}px`);
		e.currentTarget.style.setProperty('--y', `${y}px`);
	};
	const handleEnter = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.setProperty('--r', '60px');
	};
	const handleLeave = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.setProperty('--r', '0px');
		e.currentTarget.style.setProperty('--x', '-9999px');
		e.currentTarget.style.setProperty('--y', '-9999px');
	};

	return (
		<div
			onMouseMove={handleMove}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			className="group relative h-full w-full cursor-pointer overflow-hidden rounded bg-zinc-900 ring ring-zinc-800 inset-shadow-red-600"
		>
			<div
				className="grid h-full w-full grid-flow-row-dense grid-cols-2 gap-0"
				style={{ gridAutoRows: 'minmax(140px, 1fr)' }}
			>
				{images.map((src, i) => {
					const isImage4 = src === GALLERY_ASSETS.image4;
					const span = isImage4
						? 'col-span-2 row-span-3'
						: `${i % 6 === 0 ? 'col-span-2' : ''} ${i % 4 === 0 ? 'row-span-2' : ''}`;
					return (
						<div key={`${src}-${i}`} className={`relative ${span}`}>
							<Image
								src={src}
								alt="Galeria"
								fill
								unoptimized
								sizes="(min-width: 1024px) 15rem, 100vw"
								className="h-full w-full object-cover opacity-95"
							/>
						</div>
					);
				})}
			</div>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						'radial-gradient(circle at var(--x, -9999px) var(--y, -9999px), rgba(0,0,0,0.28) 0, rgba(0,0,0,0.88) var(--r, 0px), rgba(0,0,0,0.92) calc(var(--r, 0px) + 20px), rgba(0,0,0,0.97) calc(var(--r, 0px) + 40px), rgba(0,0,0,0.980) 100%)',
				}}
			/>
		</div>
	);
};

export const MenuContentDesktop = () => {
	const { contentRef, currentHash, makeNavigate } = useSectionNavigation(ABOUT_SECTIONS.map(s => s.href));

	return (
		<div
			className={`relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-360 justify-between gap-6 pt-12 pb-2 text-white lg:flex`}
		>
			<aside className="relative h-full w-full max-w-20 transition-all duration-600 hover:max-w-60">
				<p className="font-geist-sans pointer-events-none absolute top-4 left-1/2 z-20 w-full -translate-x-1/2 text-center text-xs text-white">
					Passe o mouse
				</p>
				<ReflectiveGallery
					images={[
						...Object.values(GALLERY_ASSETS),
						// ...Object.values(GALLERY_ASSETS),
						// ...Object.values(GALLERY_ASSETS),
						// ...Object.values(GALLERY_ASSETS),
					]}
				/>
			</aside>

			<div className="relative h-full flex-1">
				<div ref={contentRef} className="custom-scrollbar h-full overflow-y-auto pr-8">
					<ProgrammingMainContent makeNavigate={makeNavigate} />
				</div>
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
