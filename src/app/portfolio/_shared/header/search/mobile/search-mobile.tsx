'use client';

import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';

export const SearchMobile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen}>
			<DrawerTrigger asChild>
				<button className="flex lg:hidden">
					<SearchIcon size={16} color="#fff" />
				</button>
			</DrawerTrigger>
			<DrawerContent className="h-screen border-zinc-600 bg-zinc-900 p-4">
				<DrawerHeader>
					<DrawerTitle className="font-geist-sans text-background">Pelo que você está procurando?</DrawerTitle>
					<DrawerDescription className="font-geist-mono text-muted-foreground">
						Digite algo e descubra
					</DrawerDescription>
				</DrawerHeader>
				<div className="relative w-full">
					<input
						placeholder="Pesquisar..."
						className="placeholder:font-geist-mono placeholder:text-muted-foreground font-geist-sans text-background w-full border-b p-2 outline-0"
					/>
					<SearchIcon
						size={16}
						color="var(--background)"
						className="absolute top-1/2 right-0 my-auto -translate-y-1/2"
					/>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
