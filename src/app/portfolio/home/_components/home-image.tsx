'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const HomeImage = () => {
	return (
		<>
			<motion.div
				className="absolute left-0 h-[120vh] w-full lg:relative lg:-left-40 lg:h-full"
				initial={{ opacity: 0, x: -80 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: 'spring', stiffness: 180, damping: 84, delay: 0.08, duration: 1.4 }}
			>
				<Image
					src="/my-image12.png"
					alt="Foto de Leonardo Braga com a mão no queixo e aparência séria"
					fill
					priority
					quality={100}
					className="object-cover object-top lg:object-center"
				/>
				<div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-zinc-950 to-transparent lg:block lg:via-zinc-950/20" />
				<div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-zinc-950/20 to-transparent lg:block" />
			</motion.div>
		</>
	);
};
