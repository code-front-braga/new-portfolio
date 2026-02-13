'use client';

import { CodeIcon } from 'lucide-react';
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
						<CodeIcon color="#fff" />
					</button>
				</SheetTrigger>
				<SheetContent className="bg-transparent backdrop-blur-md">
					<SheetHeader>
						<SheetTitle>
							<MyLogo />
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
