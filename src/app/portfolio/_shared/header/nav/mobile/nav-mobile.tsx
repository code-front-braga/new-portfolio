'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { MyLogo } from '@/app/_shared/my-logo';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export const NavMobile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="flex lg:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button>
						<MenuIcon color="#fff" />
					</button>
				</SheetTrigger>
				<SheetContent className="bg-transparent backdrop-blur-md">
					<SheetHeader>
						<SheetTitle>
							<MyLogo />
						</SheetTitle>
					</SheetHeader>
					<Link href="#hero" className="text-white">
						Home
					</Link>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
