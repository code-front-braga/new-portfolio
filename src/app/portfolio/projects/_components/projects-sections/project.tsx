'use client';

import {
	ArrowUpRightIcon,
	BracesIcon,
	CodeXmlIcon,
	CreditCardIcon,
	DatabaseIcon,
	FileCodeIcon,
	FileTextIcon,
	GitBranchIcon,
	MoveHorizontalIcon,
	PaletteIcon,
	ShieldCheckIcon,
	WindIcon,
} from 'lucide-react';
import Link from 'next/link';

import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';

type Repo = {
	title: string;
	subtitle: string;
	img: string;
	repo: string;
	deploy: string;
	tags: string[];
};

export function ProjectSection({
	repo,
	makeNavigate,
	sectionClassName,
}: {
	repo: Repo;
	makeNavigate?: NavigateFn;
	sectionClassName?: string;
}) {
	const slug = repo.title
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-');

	const tagClasses = (tag: string) => {
		const t = tag.toLowerCase().trim();
		if (t.includes('next')) return 'border-zinc-700/30 bg-zinc-900/30 text-white/85 hover:bg-zinc-900/45';
		if (t.includes('typescript') || t === 'ts')
			return 'border-blue-700/30 bg-blue-900/30 text-blue-200/85 hover:bg-blue-900/45';
		if (t.includes('javascript') || t === 'js')
			return 'border-yellow-700/30 bg-yellow-900/30 text-yellow-200/85 hover:bg-yellow-900/45';
		if (t.includes('tailwind')) return 'border-cyan-700/30 bg-cyan-900/30 text-cyan-200/85 hover:bg-cyan-900/45';
		if (t.includes('drizzle'))
			return 'border-emerald-700/30 bg-emerald-900/30 text-emerald-200/85 hover:bg-emerald-900/45';
		if (t.includes('prisma'))
			return 'border-emerald-700/30 bg-emerald-900/30 text-emerald-200/85 hover:bg-emerald-900/45';
		if (t.includes('better-auth'))
			return 'border-violet-700/30 bg-violet-900/30 text-violet-200/85 hover:bg-violet-900/45';
		if (t.includes('next-auth') || t.includes('authjs'))
			return 'border-violet-700/30 bg-violet-900/30 text-violet-200/85 hover:bg-violet-900/45';
		if (t.includes('tanstack'))
			return 'border-orange-700/30 bg-orange-900/30 text-orange-200/85 hover:bg-orange-900/45';
		if (t.includes('stripe')) return 'border-indigo-700/30 bg-indigo-900/30 text-indigo-200/85 hover:bg-indigo-900/45';
		if (t.includes('postgres')) return 'border-sky-700/30 bg-sky-900/30 text-sky-200/85 hover:bg-sky-900/45';
		if (t.includes('sqlite')) return 'border-green-700/30 bg-green-900/30 text-green-200/85 hover:bg-green-900/45';
		if (t.includes('jspdf')) return 'border-red-700/30 bg-red-900/30 text-red-200/85 hover:bg-red-900/45';
		if (t === 'html') return 'border-orange-700/30 bg-orange-900/30 text-orange-100/85 hover:bg-orange-900/45';
		if (t === 'css') return 'border-blue-700/30 bg-blue-900/30 text-blue-200/85 hover:bg-blue-900/45';
		if (t.includes('sass')) return 'border-pink-700/30 bg-pink-900/30 text-pink-200/85 hover:bg-pink-900/45';
		if (t.includes('swiper')) return 'border-sky-700/30 bg-sky-900/30 text-sky-200/85 hover:bg-sky-900/45';
		return 'border-zinc-700/30 bg-zinc-900/30 text-zinc-200/85 hover:bg-zinc-900/45';
	};

	const tagIcon = (tag: string) => {
		const t = tag.toLowerCase().trim();
		if (t.includes('next')) return CodeXmlIcon;
		if (t.includes('typescript') || t === 'ts') return BracesIcon;
		if (t.includes('javascript') || t === 'js') return BracesIcon;
		if (t.includes('tailwind')) return WindIcon;
		if (t.includes('drizzle')) return DatabaseIcon;
		if (t.includes('prisma')) return DatabaseIcon;
		if (t.includes('better-auth')) return ShieldCheckIcon;
		if (t.includes('next-auth') || t.includes('authjs')) return ShieldCheckIcon;
		if (t.includes('tanstack')) return GitBranchIcon;
		if (t.includes('stripe')) return CreditCardIcon;
		if (t.includes('postgres')) return DatabaseIcon;
		if (t.includes('sqlite')) return DatabaseIcon;
		if (t.includes('jspdf')) return FileTextIcon;
		if (t === 'html') return FileCodeIcon;
		if (t === 'css' || t.includes('sass')) return PaletteIcon;
		if (t.includes('swiper')) return MoveHorizontalIcon;
		return FileTextIcon;
	};

	const tagOrderScore = (tag: string) => {
		const t = tag.toLowerCase().trim();
		if (t.includes('next')) return 10;
		if (t.includes('typescript') || t === 'ts' || t.includes('javascript') || t === 'js') return 15;
		if (t.includes('tailwind')) return 20;
		if (t.includes('tanstack')) return 30;
		if (t.includes('drizzle')) return 40;
		if (t.includes('prisma')) return 45;
		if (t.includes('better-auth') || t.includes('next-auth') || t.includes('authjs')) return 50;
		if (t.includes('postgres')) return 60;
		if (t.includes('sqlite')) return 65;
		if (t.includes('stripe')) return 70;
		if (t.includes('jspdf')) return 80;
		if (t === 'html') return 90;
		if (t === 'css') return 91;
		if (t.includes('sass')) return 92;
		if (t.includes('swiper')) return 93;
		return 99;
	};

	return (
		<Section
			sectionClassName={sectionClassName}
			makeNavigate={makeNavigate}
			content={{
				id: slug,
				title: repo.title,
				subtitle: repo.subtitle || '',
				className: 'first:mt-32 lg:first:mt-0 lg:mt-0 lg:py-0',
				items: [
					{
						title: '',
						text: (
							<div className="space-y-2">
								<p className="text-sm text-zinc-400">Links</p>
								<div className="flex flex-wrap gap-2">
									<Link
										href={repo.repo}
										rel="noopener noreferrer"
										target="_blank"
										className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-sm text-blue-300 hover:bg-zinc-800"
									>
										Repositório
										<ArrowUpRightIcon size={12} />
									</Link>
									<Link
										href={repo.deploy}
										rel="noopener noreferrer"
										target="_blank"
										className="inline-flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-sm text-blue-300 hover:bg-zinc-800"
									>
										Deploy
										<ArrowUpRightIcon size={12} />
									</Link>
								</div>
							</div>
						),
					},
					{
						title: 'Tecnologias',
						text: (
							<div className="flex flex-wrap gap-2">
								{[...repo.tags]
									.sort((a, b) => tagOrderScore(a) - tagOrderScore(b))
									.map(tag => {
										const Icon = tagIcon(tag);
										return (
											<span
												key={`${repo.title}-${tag}`}
												className={`inline-flex items-center gap-1 rounded-md border ${tagClasses(tag)} px-2 py-1 text-xs`}
											>
												<Icon size={12} />
												{tag}
											</span>
										);
									})}
							</div>
						),
					},
				],
			}}
		/>
	);
}
