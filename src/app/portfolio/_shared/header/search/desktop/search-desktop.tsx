'use client';

import { ArrowUpRightIcon, CircleFadingPlusIcon, FileInputIcon, FolderPlusIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command';

export const SearchDesktop = () => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(open => !open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<>
			<button
				className="text-foreground placeholder:text-muted-foreground/70 inline-flex h-9 w-fit rounded bg-zinc-900 px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none"
				onClick={() => setOpen(true)}
				type="button"
			>
				<span className="flex grow items-center">
					<SearchIcon aria-hidden="true" className="text-muted-foreground/80 -ms-1 me-3" size={16} />
					<span className="text-muted-foreground/70 font-normal">Pesquisar no portifólio...</span>
				</span>
			</button>
			<CommandDialog onOpenChange={setOpen} open={open}>
				<CommandInput placeholder="Digite algo..." />
				<CommandList>
					<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
					<CommandGroup heading="Quick start">
						<CommandItem>
							<FolderPlusIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>New folder</span>
							<CommandShortcut className="justify-center">⌘N</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<FileInputIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>Import document</span>
							<CommandShortcut className="justify-center">⌘I</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CircleFadingPlusIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>Add block</span>
							<CommandShortcut className="justify-center">⌘B</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Navigation">
						<CommandItem>
							<ArrowUpRightIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>Go to dashboard</span>
						</CommandItem>
						<CommandItem>
							<ArrowUpRightIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>Go to apps</span>
						</CommandItem>
						<CommandItem>
							<ArrowUpRightIcon aria-hidden="true" className="opacity-60" size={16} />
							<span>Go to connections</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
