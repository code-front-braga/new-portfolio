import { motion } from 'motion/react';
import Link from 'next/link';

import { LINKS } from '../constants/links';

type LinkListProps = {
	pathname: string;
	ulClassName?: string;
	onOpen?: () => void;
};

export const LinksList = ({ pathname, ulClassName, onOpen }: LinkListProps) => {
	return (
		<ul className={`flex gap-6 ${ulClassName}`}>
			{LINKS.map((link, i) => {
				const active = pathname === link.href;
				return (
					<motion.li
						key={link.href}
						className={`font-geist-sans text-base lg:text-sm ${active ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
						initial={{ opacity: 0, x: -14 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 + i * 0.6 }}
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
