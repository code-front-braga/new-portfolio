'use client';

import { ArrowUpRightIcon, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { ABOUT_SECTIONS } from '@/app/portfolio/about/constants/about-sections';
import { COMMAND_LINKS } from '@/app/portfolio/constants/links';
import { PROJECTS_SECTIONS } from '@/app/portfolio/projects/constants/projects-sections';
import { RESUME_SECTIONS } from '@/app/portfolio/resume/constants/resume-sections';
import { SKILLS_SECTIONS } from '@/app/portfolio/skills/constants/skills-sections';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command';
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';

import { CustomCommandItem } from '../../../comand-item';

export const SearchMobile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [recent, setRecent] = useState<{ label: string; href: string }[]>([]);
	const RECENT_KEY = 'portfolio_search_recent';
	const router = useRouter();

	React.useEffect(() => {
		try {
			const raw = localStorage.getItem(RECENT_KEY);
			setRecent(raw ? JSON.parse(raw) : []);
		} catch {
			setRecent([]);
		}
	}, [isOpen]);
	const pushRecent = (entry: { label: string; href: string }) => {
		try {
			const raw = localStorage.getItem(RECENT_KEY);
			const current = raw ? (JSON.parse(raw) as { label: string; href: string }[]) : [];
			const next = [entry, ...current.filter(r => r.href !== entry.href)].slice(0, 7);
			localStorage.setItem(RECENT_KEY, JSON.stringify(next));
			setRecent(next);
		} catch {}
	};

	useEffect(() => {
		if (!isOpen) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === '/') {
				e.preventDefault();
				const input = document.querySelector<HTMLInputElement>('[data-slot="command-input"]');
				input?.focus();
			}
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [isOpen]);

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen}>
			<DrawerTrigger asChild>
				<button
					type="button"
					aria-label="Pesquisar"
					className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white transition-colors hover:bg-zinc-800 lg:hidden"
				>
					<SearchIcon size={16} />
					<span className="text-xs">Buscar</span>
				</button>
			</DrawerTrigger>
			<DrawerContent className="h-screen border-t border-zinc-700 bg-zinc-950 p-4">
				<DrawerHeader>
					<DrawerTitle className="font-geist-sans text-background">Pelo que você está procurando?</DrawerTitle>
					<DrawerDescription className="font-geist-mono text-muted-foreground">
						Digite algo e descubra — Pressione &quot;/&quot; para focar o campo
					</DrawerDescription>
				</DrawerHeader>
				<div className="relative w-full">
					<Command className="**:[[cmdk-group-heading]]:text-muted-foreground rounded-md border border-zinc-800 bg-zinc-950 **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group]]:px-2 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3">
						<CommandInput placeholder="Pesquisar..." />
						<CommandList>
							<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
							{recent.length > 0 && (
								<>
									<CommandGroup heading="Recentes">
										{recent.map(r => (
											<CommandItem
												key={`recent-${r.href}`}
												onSelect={() => {
													pushRecent(r);
													setIsOpen(false);
													router.push(r.href);
												}}
											>
												<span className="flex w-full items-center justify-between">
													<span>{r.label}</span>
													<CommandShortcut>Recente</CommandShortcut>
												</span>
											</CommandItem>
										))}
									</CommandGroup>
									<CommandSeparator />
								</>
							)}
							<CommandGroup heading="Acesso Rápido">
								{COMMAND_LINKS.map(link => (
									<CustomCommandItem
										key={link.href}
										{...link}
										onSelected={e => {
											pushRecent(e);
											setIsOpen(false);
											router.push(e.href);
										}}
									/>
								))}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Seções do Currículo">
								{RESUME_SECTIONS.map(s => {
									const href = `/portfolio/resume${s.href}`;
									return (
										<CommandItem
											key={`resume-${s.href}`}
											onSelect={() => {
												pushRecent({ label: `Currículo — ${s.label}`, href });
												setIsOpen(false);
												router.push(href);
											}}
										>
											<span className="flex w-full items-center justify-between">
												<div className="flex items-center gap-2">
													<s.icon size={16} className={s.color} />
													<span>{s.label}</span>
												</div>
												<ArrowUpRightIcon aria-hidden="true" size={16} />
											</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Seções de Projetos">
								{PROJECTS_SECTIONS.map(s => {
									const href = `/portfolio/projects${s.href}`;
									return (
										<CommandItem
											key={`projects-${s.href}`}
											onSelect={() => {
												pushRecent({ label: `Projetos — ${s.label}`, href });
												setIsOpen(false);
												router.push(href);
											}}
										>
											<span className="flex w-full items-center justify-between">
												<div className="flex items-center gap-2">
													<s.icon size={16} className={s.color} />
													<span>{s.label}</span>
												</div>
												<ArrowUpRightIcon aria-hidden="true" size={16} />
											</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Seções de About">
								{ABOUT_SECTIONS.map(s => {
									const href = `/portfolio/about${s.href}`;
									return (
										<CommandItem
											key={`about-${s.href}`}
											onSelect={() => {
												pushRecent({ label: `About — ${s.label}`, href });
												setIsOpen(false);
												router.push(href);
											}}
										>
											<span className="flex w-full items-center justify-between">
												<div className="flex items-center gap-2">
													<s.icon size={16} className={s.color} />
													<span>{s.label}</span>
												</div>
												<ArrowUpRightIcon aria-hidden="true" size={16} />
											</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Seções de Skills">
								{SKILLS_SECTIONS.map(s => {
									const href = `/portfolio/skills${s.href}`;
									return (
										<CommandItem
											key={`skills-${s.href}`}
											onSelect={() => {
												pushRecent({ label: `Skills — ${s.label}`, href });
												setIsOpen(false);
												router.push(href);
											}}
										>
											<span className="flex w-full items-center justify-between">
												<div className="flex items-center gap-2">
													<s.icon size={16} className={s.color} />
													<span>{s.label}</span>
												</div>
												<ArrowUpRightIcon aria-hidden="true" size={16} />
											</span>
										</CommandItem>
									);
								})}
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Navegação">
								<CommandItem
									className="bg-zinc-900"
									onSelect={() => {
										const href = 'https://github.com/code-front-braga';
										pushRecent({ label: 'GitHub', href });
										setIsOpen(false);
										window.open(href, '_blank', 'noopener,noreferrer');
									}}
								>
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
					</Command>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
