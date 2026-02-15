'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

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
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
			const scroller = sectionRef.current?.closest('.custom-scrollbar') as HTMLElement | null;
			const heading = sectionRef.current?.querySelector('h2');
			if (heading) {
				gsap.set(heading, { opacity: 0, y: 6, willChange: 'opacity, transform' });
				gsap.to(heading, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power1.out',
					overwrite: 'auto',
					scrollTrigger: {
						trigger: heading,
						start: 'top 92%',
						toggleActions: 'play none none none',
						scroller: scroller ?? undefined,
					},
					onComplete: () => {
						gsap.set(heading, { clearProps: 'opacity,visibility,transform,willChange' });
					},
				});
			}
			const items = sectionRef.current?.querySelectorAll('[data-section-item]');
			if (items && items.length) {
				gsap.set(items, { opacity: 0, y: 8 });
				ScrollTrigger.batch(items, {
					scroller: scroller ?? undefined,
					start: 'top 98%',
					onEnter: batch => {
						gsap.set(batch, { willChange: 'opacity, transform' });
						gsap.to(batch, {
							opacity: 1,
							y: 0,
							duration: 0.6,
							ease: 'power1.out',
							stagger: 0.01,
							overwrite: 'auto',
							onComplete: () => {
								(batch as Element[]).forEach(el =>
									gsap.set(el, { clearProps: 'opacity,visibility,transform,willChange' }),
								);
							},
						});
					},
				});
			}
			ScrollTrigger.refresh();
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section
			id={content.id}
			className={`font-geist-sans block w-full ${content.className ?? ''} ${sectionClassName ?? ''}`}
			ref={sectionRef}
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
				<div key={`${content.id}-${idx}`} className="mb-4 space-y-4" data-section-item>
					<h3 className="text-xl font-semibold text-white">{it.title}</h3>
					<p className="text-zinc-200">{it.text}</p>
				</div>
			))}
		</section>
	);
}
