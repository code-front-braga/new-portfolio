import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { SOCIALS } from '../constants/socials';

export const SocialsList = () => {
	return (
		<ul className="hidden items-center gap-4 lg:flex">
			{SOCIALS.map((social, i) => (
				<Tooltip key={social.id}>
					<TooltipTrigger>
						<motion.li
							className="flex size-8 items-center justify-center rounded-full bg-zinc-400 hover:bg-zinc-300"
							initial={{ opacity: 0, y: -6, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.3, ease: 'easeOut', delay: 0.35 + i * 0.05 }}
						>
							<Link href={social.href} rel="noopener noreferrer" target="_blank">
								<Image src={social.iconSrc} alt={social.id} width={18} height={18} />
							</Link>
						</motion.li>
					</TooltipTrigger>
					<TooltipContent className="bg-zinc-950 font-geist-sans">{social.name}</TooltipContent>
				</Tooltip>
			))}
		</ul>
	);
};
