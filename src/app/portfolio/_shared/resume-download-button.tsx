'use client';

import { DownloadIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { LINKS } from '../constants/links';

export const ResumeDownloadButton = () => {
	const count = LINKS.length;

	return (
		<motion.button
			className="group font-geist-sans ml-0 flex w-fit items-center gap-1.5 rounded-full p-0.5 px-4 text-sm text-white shadow-lg ring shadow-zinc-900 hover:text-blue-300 hover:shadow-blue-950 lg:ml-8"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 + count * 0.08 }}
		>
			Currículo
			<DownloadIcon size={14} />
		</motion.button>
	);
};
