'use client';

import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

import { Separator } from '@/components/ui/separator';

export type NavigateFn = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => void;

export type ContentItem = {
	title: string;
	text: ReactNode;
};

export type SectionContent = {
	id: string;
	title: string;
	className?: string;
	items: ContentItem[];
};

export function Section({
	content,
	makeNavigate,
	sectionClassName,
}: {
	content: SectionContent;
	makeNavigate?: NavigateFn;
	sectionClassName?: string;
}) {
	return (
		<section
			id={content.id}
			className={`font-geist-sans block w-full ${content.className ?? ''} ${sectionClassName ?? ''}`}
		>
			<div className="space-y-4">
				<div className="group flex items-center gap-2">
					<Link href={`#${content.id}`} onClick={makeNavigate ? makeNavigate(`#${content.id}`) : undefined}>
						<h2 className="text-4xl font-semibold text-white">{content.title}</h2>
					</Link>
					<LinkIcon className="hidden text-zinc-600 group-hover:flex" />
				</div>
			</div>
			<Separator className="mt-4 mb-4 w-full bg-zinc-700" />
			{content.items.map((it, idx) => (
				<div key={`${content.id}-${idx}`} className="mb-4 space-y-4">
					<h3 className="text-xl font-semibold text-white">{it.title}</h3>
					<p className="text-zinc-200">{it.text}</p>
				</div>
			))}
		</section>
	);
}
