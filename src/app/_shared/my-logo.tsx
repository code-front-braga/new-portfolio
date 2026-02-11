'use client';

import Image from 'next/image';

import { useIsMobile } from '@/hooks/use-mobile';

export const MyLogo = () => {
	const isMobile = useIsMobile();

	return (
		<div className="relative flex size-10 items-center justify-center overflow-hidden lg:size-14">
			<Image
				src="/icon-logo-header.svg"
				alt="Logo DEV.braga"
				width={isMobile ? 120 : 160}
				height={isMobile ? 120 : 160}
				className="object-contain"
				priority
				quality={100}
			/>
		</div>
	);
};
