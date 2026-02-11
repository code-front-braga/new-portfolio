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
			<DrawerContent className="p-4">
				<DrawerHeader>
					<DrawerTitle className="font-geist-sans">Pelo que você está procurando?</DrawerTitle>
					<DrawerDescription className="font-geist-mono">Digite algo e descubra</DrawerDescription>
				</DrawerHeader>
				<div className="relative w-full">
					<input placeholder="Pesquisar..." className="placeholder:font-geist-mono w-full border-b p-2 outline-0" />
					<SearchIcon size={16} color="#000" className="absolute top-1/2 right-0 my-auto -translate-y-1/2" />
				</div>
			</DrawerContent>
		</Drawer>
	);
};
