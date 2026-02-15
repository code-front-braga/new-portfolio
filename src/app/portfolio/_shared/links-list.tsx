import { motion } from 'motion/react';
import Link from 'next/link';

import { useIsMobile } from '@/hooks/use-mobile';

import { LINKS } from '../constants/links';

type LinkListProps = {
	pathname: string;
	ulClassName?: string;
	onOpen?: () => void;
};

export const LinksList = ({ pathname, ulClassName, onOpen }: LinkListProps) => {
	const isMobile = useIsMobile();

	return (
		<ul className={`flex gap-6 ${ulClassName}`}>
			{LINKS.map((link, i) => {
				const active = pathname === link.href;
				return (
					<motion.li
						key={link.href}
						className={`font-geist-sans text-base lg:text-sm ${active ? 'text-blue-300' : 'text-zinc-500 hover:text-zinc-300'}`}
						initial={{ opacity: 0, ...(isMobile ? { x: -14 } : { y: -8 }) }}
						animate={{ opacity: 1, ...(isMobile ? { x: 0 } : { y: 0 }) }}
						transition={{ duration: 0.25, ease: 'easeOut', delay: 0.12 + i * 0.2 }}
					>
						<Link href={link.href} onClick={onOpen}>
							{link.label}
						</Link>
					</motion.li>
				);
			})}
		</ul>
	);
};
