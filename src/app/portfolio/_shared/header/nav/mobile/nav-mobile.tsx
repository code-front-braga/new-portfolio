'use client';

import { CodeIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { MyLogo } from '@/app/_shared/my-logo';
import { LINKS } from '@/app/portfolio/constants/links';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export const NavMobile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	return (
		<nav className="flex lg:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button>
						<CodeIcon color="#fff" />
					</button>
				</SheetTrigger>
				<SheetContent className="bg-transparent px-4 backdrop-blur-md">
					<SheetHeader>
						<SheetTitle>
							<MyLogo />
						</SheetTitle>
					</SheetHeader>
					<ul className="flex flex-col items-start gap-6 px-4">
						{LINKS.map((link, i) => {
							const active = pathname === link.href;
							return (
								<motion.li
									key={link.href}
									className={`font-geist-sans text-sm ${active ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}
									initial={{ opacity: 0, x: -14 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 + i * 0.2 }}
								>
									<Link href={link.href} onClick={() => setIsOpen(false)}>
										{link.label}
									</Link>
								</motion.li>
							);
						})}
					</ul>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
