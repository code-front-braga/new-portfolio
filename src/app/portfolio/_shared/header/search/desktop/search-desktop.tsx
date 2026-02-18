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
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { CustomCommandItem } from '../../../comand-item';

export const SearchDesktop = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [recent, setRecent] = useState<{ label: string; href: string }[]>([]);
	const RECENT_KEY = 'portfolio_search_recent';
	const router = useRouter();

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
	React.useEffect(() => {
		try {
			const raw = localStorage.getItem(RECENT_KEY);
			setRecent(raw ? JSON.parse(raw) : []);
		} catch {
			setRecent([]);
		}
	}, []);
	const pushRecent = (entry: { label: string; href: string }) => {
		try {
			const raw = localStorage.getItem(RECENT_KEY);
			const current = raw ? (JSON.parse(raw) as { label: string; href: string }[]) : [];
			const next = [entry, ...current.filter(r => r.href !== entry.href)].slice(0, 7);
			localStorage.setItem(RECENT_KEY, JSON.stringify(next));
			setRecent(next);
		} catch {}
	};

	return (
		<>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						aria-label="Pesquisar (Ctrl+K)"
						className="text-foreground placeholder:text-muted-foreground/70 inline-flex h-9 w-fit items-center gap-3 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm shadow-xs transition-colors outline-none hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-blue-300"
						onClick={() => setOpen(true)}
						type="button"
					>
						<span className="flex grow items-center">
							<SearchIcon aria-hidden="true" className="text-muted-foreground/80 -ms-1 me-2" size={16} />
							<span className="text-muted-foreground/70 font-normal">Pesquisar no portifólio...</span>
						</span>
						<span className="hidden items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-0.5 text-[10px] text-zinc-300 lg:inline-flex">
							Ctrl K
						</span>
					</button>
				</TooltipTrigger>
				<TooltipContent className="font-geist-sans bg-zinc-900">Pesquisar (Ctrl+K)</TooltipContent>
			</Tooltip>
			<CommandDialog onOpenChange={setOpen} open={open}>
				<CommandInput placeholder="Digite algo..." />
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
											setOpen(false);
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
									setOpen(false);
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
										setOpen(false);
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
										setOpen(false);
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
										setOpen(false);
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
										setOpen(false);
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
								pushRecent({ label: 'GitHub', href: 'https://github.com/code-front-braga' });
								setOpen(false);
								window.open('https://github.com/code-front-braga', '_blank', 'noopener,noreferrer');
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
			</CommandDialog>
		</>
	);
};
