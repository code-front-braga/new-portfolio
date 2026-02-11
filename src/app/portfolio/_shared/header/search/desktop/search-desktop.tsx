'use client';

import { ArrowUpRightIcon, BoxesIcon, FileUserIcon, SearchIcon, ZapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	// CommandShortcut,
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
					<CommandGroup heading="Acesso Rápido">
						<CommandItem asChild>
							<Link href="/portfolio/projects" className="flex w-full items-center justify-between">
								<div className="flex items-center gap-2">
									<BoxesIcon aria-hidden="true" size={16} />
									<span>Projetos</span>
								</div>
								<ArrowUpRightIcon className="ml-auto" />
							</Link>
							{/* <CommandShortcut className="justify-center">⌘N</CommandShortcut> */}
						</CommandItem>
						<CommandItem>
							<Link href="/portfolio/skills" className="flex w-full items-center justify-between">
								<div className="flex items-center gap-2">
									<ZapIcon aria-hidden="true" size={16} />
									<span>Skills</span>
								</div>
								<ArrowUpRightIcon className="ml-auto" />
							</Link>
							{/* <CommandShortcut className="justify-center">⌘I</CommandShortcut> */}
						</CommandItem>
						<CommandItem>
							<Link href="/portfolio/resume" className="flex w-full items-center justify-between">
								<div className="flex items-center gap-2">
									<FileUserIcon aria-hidden="true" size={16} />
									<span>Currículo</span>
								</div>
								<ArrowUpRightIcon className="ml-auto" />
							</Link>
							{/* <CommandShortcut className="justify-center">⌘B</CommandShortcut> */}
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Navegação">
						<CommandItem asChild className='bg-zinc-900'>
							<Link
								href="https://github.com/code-front-braga"
								rel="noopener noreferrer"
								target="_blank"
								className="flex w-full items-center justify-between"
							>
								<div className="flex items-center gap-2">
									<Image src="/socials/github.svg" alt="Conta do GitHub" width={18} height={18} />
									<span>Ir para o GitHub</span>
								</div>
								<ArrowUpRightIcon aria-hidden="true" size={16} />
							</Link>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
