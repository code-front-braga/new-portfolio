'use client';

import { ArrowUpRightIcon, DownloadIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { LINKS } from '../constants/links';

export const ResumeDownloadButton = () => {
	const count = LINKS.length;
	const href = encodeURI('/Currículo_Att_Leonardo_Braga.pdf');

	return (
		<div className="ml-0 flex w-fit items-center gap-2 lg:ml-8">
			<motion.a
				href={href}
				download="Curriculo_Leonardo_Braga.pdf"
				aria-label="Baixar currículo (PDF)"
				title="Baixar currículo (PDF)"
				className="group font-geist-sans inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm text-white transition-colors hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 + count * 0.08 }}
			>
				<span>Baixar currículo</span>
				<DownloadIcon size={14} className="text-blue-300" />
			</motion.a>

			<motion.a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Abrir currículo em nova aba"
				title="Abrir currículo em nova aba"
				className="group font-geist-sans inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm text-white transition-colors hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 + count * 0.08 }}
			>
				<span>Ver online</span>
				<ArrowUpRightIcon size={14} className="text-blue-300" />
			</motion.a>
		</div>
	);
};
