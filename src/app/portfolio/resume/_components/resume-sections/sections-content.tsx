'use client';

import { ArrowUpRightIcon, CheckIcon, ClipboardIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { REPOSITORIES } from '@/app/portfolio/projects/constants/repositories';
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ResumeDownloadButton } from '../../../_shared/resume-download-button';
import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';

const CopyButton = ({ ariaLabel, onCopy, label }: { ariaLabel: string; onCopy: () => void; label: string }) => {
	const [copied, setCopied] = useState(false);
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<button
					type="button"
					aria-label={ariaLabel}
					onClick={() => {
						onCopy();
						setCopied(true);
						setTimeout(() => setCopied(false), 1200);
					}}
					className="rounded-md p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
				>
					{copied ? <CheckIcon size={16} className="text-green-400" /> : <ClipboardIcon size={16} />}
				</button>
			</TooltipTrigger>
			<TooltipContent className="font-geist-sans bg-zinc-900">{copied ? 'Copiado' : label}</TooltipContent>
		</Tooltip>
	);
};

export function ResumeSectionsContent({
	sectionClassName,
	makeNavigate,
}: {
	sectionClassName?: string;
	makeNavigate?: NavigateFn;
}) {
	const intro = (
		<Section
			sectionClassName={sectionClassName}
			makeNavigate={makeNavigate}
			content={{
				id: 'intro',
				title: 'Perfil',
				subtitle: 'Desenvolvedor Front-End',
				className: 'first:mt-32 lg:first:mt-0 lg:mt-0 lg:py-0',
				items: [
					{
						title: '',
						text: (
							<div className="flex flex-col gap-4">
								<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
									<span className="relative size-24 shrink-0 overflow-hidden rounded-full border border-blue-300 bg-zinc-900 transition-all duration-300 hover:scale-110 sm:size-26">
										<Image src="/my-image4.png" alt="Avatar" fill sizes="80px" className="object-cover" />
									</span>
									<div className="flex w-full flex-col justify-between space-y-1">
										<div className="flex w-full flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
											<h3 className="text-xl font-semibold text-white">Leonardo Primo Viana Braga</h3>
											<ResumeDownloadButton />
										</div>
										<p className="text-center text-sm text-zinc-300 sm:text-left">Desenvolvedor Front-End</p>
									</div>
								</div>
								<p className="text-center text-zinc-200 sm:text-left">
									Desenvolvedor Frontend especializado em Next.js, React e TypeScript, com experiência em Prisma ORM,
									Better-auth e Auth.js. Foco em interfaces eficientes e soluções digitais intuitivas.
								</p>
								<div className="flex flex-col gap-2 text-sm text-zinc-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
									<div className="flex items-center gap-1">
										<MapPinIcon size={14} className="text-blue-400" />
										<span>Lauro de Freitas/BA</span>
									</div>
									<span className="hidden text-zinc-600 sm:inline">•</span>
									<div className="flex items-center gap-1">
										<MailIcon size={14} className="text-blue-400" />
										<Link href="mailto:f.stack.braga91@gmail.com" className="flex">
											f.stack.braga91@gmail.com
											<ArrowUpRightIcon size={14} className="self-baseline text-blue-400" />
										</Link>
									</div>
									<span className="hidden text-zinc-600 sm:inline">•</span>
									<div className="flex items-center gap-1">
										<PhoneIcon size={14} className="text-blue-400" />
										<Link
											href="https://wa.me//5571985230428?text=Olá%20Leo!%20Vim%20através%20do%20seu%20portifólio"
											className="flex"
										>
											(71) 98523-0428
											<ArrowUpRightIcon size={14} className="self-baseline text-blue-400" />
										</Link>
									</div>
								</div>
								<div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
									<Link
										href="https://github.com/code-front-braga"
										rel="noopener noreferrer"
										target="_blank"
										className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-sm text-blue-300 hover:bg-zinc-800"
									>
										GitHub
										<ArrowUpRightIcon size={12} />
									</Link>
									<Link
										href="https://www.linkedin.com/in/seu-perfil/"
										rel="noopener noreferrer"
										target="_blank"
										className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-sm text-blue-300 hover:bg-zinc-800"
									>
										LinkedIn
										<ArrowUpRightIcon size={12} />
									</Link>
								</div>
							</div>
						),
					},
				],
			}}
		/>
	);

	const experiences = [
		{
			company: 'MyByte',
			role: 'Desenvolvedor Front-End',
			year: '2025 - Atual',
			description: [
				'Desenvolvimento de interfaces usando Next.js (App Router), React e Tailwind',
				'Criação e manutenção de plataformas, sites, landing pages e aplicações web',
				'Consumo de APIs do backend para implementação de funcionalidades dinâmicas.',
				'Participação no ciclo completo das entregas: análise, implementação, revisão e deploy.',
				'Colaboração com a equipe para evoluir arquitetura, componentes e padrões de UI.',
			],
		},
		// { company: 'Empresa Y', role: 'Estagiário Front-End', year: '2023' },
	];

	const experienceSection = (
		<Section
			makeNavigate={makeNavigate}
			content={{
				id: 'experience',
				title: 'Experiências',
				subtitle: 'Empresas onde atuei na área',
				items: [
					{
						title: '',
						text: (
							<div className="space-y-3">
								{experiences.map((exp, i) => (
									<div key={`${exp.company}-${i}`} className="rounded-lg border border-zinc-800 bg-zinc-950">
										<div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
											<div className="flex items-center gap-2">
												<span className="text-xs text-zinc-400">Terminal — {exp.company}</span>
											</div>
											<CopyButton
												ariaLabel="Copiar conteúdo"
												label="Copiar conteúdo"
												onCopy={() => {
													const lines = [
														`$ pnpm install`,
														`✔ ${exp.role}`,
														...exp.description.map(d => `✔ ${d}`),
														`✔ next@16.1.6`,
														`Done! Installed 1 package in 1.2s`,
														`Done! ${exp.year}`,
													];
													navigator.clipboard?.writeText(lines.join('\n')).catch(() => {});
												}}
											/>
										</div>
										<Terminal className="w-full max-w-4xl text-xs lg:text-sm">
											<TypingAnimation className="text-cyan-400">{`$ pnpm install`}</TypingAnimation>
											<AnimatedSpan className="text-green-500">{`✔ ${exp.role}`}</AnimatedSpan>
											{exp.description.map(d => (
												<AnimatedSpan key={`${exp.company}-${i}-${d}`} className="text-green-500">
													{`✔ ${d}`}
												</AnimatedSpan>
											))}
											<AnimatedSpan className="text-green-500">{`✔ next@16.1.6`}</AnimatedSpan>
											<AnimatedSpan className="text-green-500">{`Done! Installed 1 package in 1.2s`}</AnimatedSpan>
											<AnimatedSpan className="text-green-500">{`Done! ${exp.year}`}</AnimatedSpan>
										</Terminal>
									</div>
								))}
							</div>
						),
					},
				],
			}}
		/>
	);

	const projectsSection = (
		<Section
			makeNavigate={makeNavigate}
			content={{
				id: 'projects',
				title: 'Projetos',
				subtitle: 'Meus repositórios',
				items: [
					{
						title: '',
						text: (
							<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
								{REPOSITORIES.map(repo => {
									const slug = repo.title
										.toLowerCase()
										.replace(/[^\w\s-]/g, '')
										.replace(/\s+/g, '-');
									return (
										<div
											key={`resume-${repo.title}`}
											className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2"
										>
											<span className="text-sm text-zinc-200">
												<span className="text-cyan-400">$</span> pnpm dlx open{' '}
												<span className="text-blue-300">{slug}</span>
											</span>
											<CopyButton
												ariaLabel="Copiar link do projeto"
												label="Copiar link do projeto"
												onCopy={() => {
													const toCopy = repo.deploy || repo.repo;
													navigator.clipboard?.writeText(toCopy).catch(() => {});
												}}
											/>
										</div>
									);
								})}
							</div>
						),
					},
				],
			}}
		/>
	);

	const skills = [
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'React',
		'Prisma',
		'Drizzle',
		'AuthJS',
		'Stripe',
		'Better-auth',
	];

	const tagClasses = (tag: string) => {
		const t = tag.toLowerCase().trim();
		if (t.includes('next')) return 'border-zinc-700/30 bg-zinc-900/30 text-white/85 hover:bg-zinc-900/45';
		if (t.includes('typescript') || t === 'ts')
			return 'border-blue-700/30 bg-blue-900/30 text-blue-200/85 hover:bg-blue-900/45';
		if (t.includes('tailwind')) return 'border-cyan-700/30 bg-cyan-900/30 text-cyan-200/85 hover:bg-cyan-900/45';
		if (t.includes('react')) return 'border-sky-700/30 bg-sky-900/30 text-sky-200/85 hover:bg-sky-900/45';
		if (t.includes('drizzle'))
			return 'border-emerald-700/30 bg-emerald-900/30 text-emerald-200/85 hover:bg-emerald-900/45';
		if (t.includes('prisma'))
			return 'border-emerald-700/30 bg-emerald-900/30 text-emerald-200/85 hover:bg-emerald-900/45';
		if (t.includes('better-auth'))
			return 'border-violet-700/30 bg-violet-900/30 text-violet-200/85 hover:bg-violet-900/45';
		if (t.includes('authjs')) return 'border-violet-700/30 bg-violet-900/30 text-violet-200/85 hover:bg-violet-900/45';
		if (t.includes('stripe')) return 'border-indigo-700/30 bg-indigo-900/30 text-indigo-200/85 hover:bg-indigo-900/45';
		return 'border-zinc-700/30 bg-zinc-900/30 text-zinc-200/85 hover:bg-zinc-900/45';
	};

	const skillsSection = (
		<Section
			makeNavigate={makeNavigate}
			content={{
				id: 'skills',
				title: 'Skills',
				items: [
					{
						title: '',
						text: (
							<div className="flex flex-wrap gap-2">
								{skills.map(s => (
									<span
										key={`skill-${s}`}
										className={`inline-flex items-center gap-1 rounded-md border ${tagClasses(s)} px-2 py-1 text-xs`}
									>
										{s}
									</span>
								))}
							</div>
						),
					},
				],
			}}
		/>
	);

	type EducationItem = {
		place: string;
		course: string;
		year: string;
		status?: string;
		modality?: string;
		workload?: string;
		topics?: string[];
		certificate?: string;
		location?: string;
	};
	const education = [
		{
			place: 'Anhaguera',
			course: 'Ciência da Computação - 6° Semestre',
			year: '2023–2026',
			status: 'Em andamento',
			modality: 'Bacharelado',
		},
		{
			place: 'Bootcamp Full Stack Week',
			course: 'Mac Donalds - Auto atendimento',
			year: '2025',
			status: 'Concluído',
			modality: 'Bootcamp',
		},
		{
			place: 'Bootcamp Full Stack Week',
			course: 'Bewweae - E-commerce de roupas',
			year: '2025',
			status: 'Concluído',
			modality: 'Bootcamp',
		},
	] as EducationItem[];

	const educationSection = (
		<Section
			makeNavigate={makeNavigate}
			content={{
				id: 'education',
				title: 'Formação',
				items: [
					{
						title: '',
						text: (
							<div className="space-y-4">
								{education.map((ed, i) => (
									<div key={`${ed.place}-${i}`} className="relative">
										<div className="rounded-md border border-zinc-700 bg-zinc-950 p-3 transition-colors hover:bg-zinc-900/50">
											<div className="flex items-start justify-between gap-3">
												<div className="space-y-0.5">
													<p className="text-sm font-semibold text-white">{ed.place}</p>
													<p className="text-xs text-zinc-300">{ed.course}</p>
												</div>
												<span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300">
													{ed.year}
													{ed.status ? ` • ${ed.status}` : ''}
												</span>
											</div>
											<div className="mt-2 flex flex-wrap gap-2">
												{ed.modality ? (
													<span className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
														{ed.modality}
													</span>
												) : null}
												{ed.workload ? (
													<span className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
														{ed.workload}
													</span>
												) : null}
												{ed.location ? (
													<span className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
														{ed.location}
													</span>
												) : null}
												{ed.topics?.map(t => (
													<span
														key={`${ed.place}-${t}`}
														className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300"
													>
														{t}
													</span>
												))}
											</div>
											{ed.certificate ? (
												<div className="mt-3 flex items-center justify-between rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2">
													<span className="text-sm text-zinc-200">
														<span className="text-cyan-400">$</span> pnpm dlx open{' '}
														<span className="text-blue-300">certificado</span>
													</span>
													<CopyButton
														ariaLabel="Copiar certificado"
														label="Copiar certificado"
														onCopy={() => {
															navigator.clipboard?.writeText(ed.certificate || '').catch(() => {});
														}}
													/>
												</div>
											) : null}
										</div>
									</div>
								))}
							</div>
						),
					},
				],
			}}
		/>
	);

	const languages = [
		{ label: 'Português', level: 'Nativo' },
		{ label: 'Inglês', level: 'Intermediário' },
	];

	const languageSection = (
		<Section
			makeNavigate={makeNavigate}
			content={{
				id: 'language',
				title: 'Linguagem',
				items: [
					{
						title: '',
						text: (
							<div className="flex flex-wrap gap-2">
								{languages.map(l => (
									<span
										key={`lang-${l.label}`}
										className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-xs"
									>
										{l.label} — {l.level}
									</span>
								))}
							</div>
						),
					},
				],
			}}
		/>
	);

	return (
		<>
			{intro}
			{experienceSection}
			{projectsSection}
			{skillsSection}
			{educationSection}
			{languageSection}
		</>
	);
}
