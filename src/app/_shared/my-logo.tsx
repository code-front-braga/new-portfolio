'use client';

import Image from 'next/image';

import { useIsMobile } from '@/hooks/use-mobile';

export const MyLogo = () => {
	const isMobile = useIsMobile();

	return (
		<div className="relative flex h-10 w-8 items-center justify-center overflow-hidden lg:h-12 lg:w-10">
			<Image
				src="/icon-logo.svg"
				alt="Logo DEV.braga"
				width={isMobile ? 100 : 160}
				height={isMobile ? 100 : 160}
				className="object-contain"
				priority
				quality={100}
			/>
		</div>
	);
};
