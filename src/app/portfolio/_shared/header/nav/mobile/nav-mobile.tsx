'use client';

import { CodeIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { MyLogo } from '@/app/_shared/my-logo';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { LinksList } from '../../../links-list';
import { ResumeDownloadButton } from '../../../resume-download-button';

export const NavMobile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	return (
		<nav className="flex lg:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button>
						<CodeIcon size={24} color="#fff" />
					</button>
				</SheetTrigger>
				<SheetContent className="bg-zinc-950">
					<SheetHeader>
						<SheetTitle>
							<Link
								href="/portfolio/home"
								onClick={() => setIsOpen(false)}
								prefetch={true}
								className="flex items-center"
							>
								<motion.div
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ type: 'spring', stiffness: 300, damping: 40, delay: 0.12 }}
									whileHover={{ scale: 1.2, animationDuration: 0.2 }}
								>
									<MyLogo />
								</motion.div>
							</Link>
						</SheetTitle>
					</SheetHeader>
					<LinksList onOpen={() => setIsOpen(false)} pathname={pathname} ulClassName="flex-col px-4 items-start" />
					<SheetFooter>
						<ResumeDownloadButton />
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
