'use client';

import Image from 'next/image';
import type { MouseEvent } from 'react';
export const ReflectiveGallery = ({ images }: { images: string[]; overlayVariant?: 'dark' | 'light' }) => {
	const handleMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		e.currentTarget.style.setProperty('--x', `${x}px`);
		e.currentTarget.style.setProperty('--y', `${y}px`);
	};
	const handleEnter = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.setProperty('--r', '72px');
	};
	const handleLeave = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.setProperty('--r', '0px');
		e.currentTarget.style.setProperty('--x', '-9999px');
		e.currentTarget.style.setProperty('--y', '-9999px');
	};

	const ordered = images;

	const overlayBackground =
		'radial-gradient(circle at var(--x, -9999px) var(--y, -9999px), rgba(0,0,0,0) 0, rgba(0,0,0,0) 12px, rgba(0,0,0,0.55) var(--r, 0px), rgba(0,0,0,0.78) calc(var(--r, 0px) + 20px), #09090b calc(var(--r, 0px) + 40px), #09090b 100%)';

	return (
		<div
			onMouseMove={handleMove}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			className="group relative h-full w-full overflow-hidden bg-zinc-900 inset-shadow-red-600"
		>
			<div
				className="grid h-full w-full grid-flow-row-dense grid-cols-2 gap-0"
				style={{ gridTemplateRows: 'minmax(220px, 40%) repeat(3, 1fr)' }}
			>
				{ordered.map((src, i) => {
					const span = i === 0 ? 'col-span-2 row-span-1' : '';
					return (
						<div key={`${src}-${i}`} className={`relative ${span}`}>
							<Image
								src={src}
								alt="Galeria"
								fill
								unoptimized
								sizes="(min-width: 1024px) 15rem, 100vw"
								className="h-full w-full object-cover"
							/>
						</div>
					);
				})}
			</div>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: overlayBackground,
				}}
			/>
		</div>
	);
};
