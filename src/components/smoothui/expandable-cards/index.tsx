'use client';

import { MousePointerClickIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

// ease-out-quint for entering/exiting elements
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

export interface Card {
	id: number;
	title: string;
	image: string;
	content: ReactNode;
	author?: {
		name: string;
		role: string;
		image: string;
	};
}

export interface ExpandableCardsProps {
	cards: Card[];
	selectedCard?: number | null;
	onSelect?: (id: number | null) => void;
	className?: string;
	cardClassName?: string;
}

export default function ExpandableCards({
	cards,
	selectedCard: controlledSelected,
	onSelect,
	className = '',
	cardClassName = '',
}: ExpandableCardsProps) {
	const [internalSelected, setInternalSelected] = useState<number | null>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const shouldReduceMotion = useReducedMotion();

	const selectedCard = controlledSelected !== undefined ? controlledSelected : internalSelected;

	useEffect(() => {
		if (scrollRef.current) {
			const scrollWidth = scrollRef.current.scrollWidth;
			const clientWidth = scrollRef.current.clientWidth;
			scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
		}
	}, []);

	const handleCardClick = (id: number) => {
		if (selectedCard === id) {
			if (onSelect) {
				onSelect(null);
			} else {
				setInternalSelected(null);
			}
		} else {
			if (onSelect) {
				onSelect(id);
			} else {
				setInternalSelected(id);
			}
			// Center the clicked card horizontally without affecting vertical scroll
			const node = scrollRef.current;
			const el = document.querySelector(`[data-card-id="${id}"]`) as HTMLElement | null;
			if (node && el) {
				const containerRect = node.getBoundingClientRect();
				const elRect = el.getBoundingClientRect();
				const targetLeft =
					node.scrollLeft + (elRect.left - containerRect.left) - node.clientWidth / 2 + el.clientWidth / 2;
				node.scrollTo({ left: targetLeft, behavior: 'smooth' });
			}
		}
	};

	return (
		<div className={`flex w-full flex-col gap-4 ${className}`}>
			<div
				className="scrollbar-hide flex overflow-x-auto pt-4 pb-8"
				ref={scrollRef}
				style={{
					scrollSnapType: 'x mandatory',
					scrollPaddingLeft: '20%',
				}}
			>
				{cards.map(card => (
					<motion.div
						animate={{
							width: selectedCard === card.id ? '500px' : '200px',
						}}
						aria-label={`${card.title} card${selectedCard === card.id ? ', expanded' : ''}`}
						aria-selected={selectedCard === card.id}
						className={`focus-visible:ring-primary relative mr-4 h-[300px] shrink-0 cursor-pointer overflow-hidden rounded-lg border bg-zinc-900 shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 ${cardClassName}`}
						data-card-id={card.id}
						key={card.id}
						layout
						onClick={() => handleCardClick(card.id)}
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleCardClick(card.id);
							}
						}}
						style={{
							scrollSnapAlign: 'start',
						}}
						tabIndex={0}
						transition={
							shouldReduceMotion
								? { duration: 0 }
								: {
										duration: 0.25,
										ease: EASE_OUT_QUINT,
									}
						}
					>
						<div className="group relative h-full w-[200px]">
							<Image
								alt={card.title}
								className="h-full w-full object-cover duration-300 group-hover:scale-105"
								height={300}
								src={card.image || '/placeholder.svg'}
								width={200}
								quality={100}
								priority={true}
							/>
							<div className="absolute inset-0 bg-zinc-950/60" />
							<div className="absolute inset-0 flex flex-col justify-between p-2 text-white">
								<h2 className="text-2xl font-bold">{card.title}</h2>
								<div className="flex h-full items-start justify-start">
									<Tooltip>
										<TooltipTrigger>
											<span className="ease flex h-9 w-9 items-center justify-center rounded-full bg-zinc-400/60 transition-transform duration-200 hover:scale-110">
												<MousePointerClickIcon size={22} className="text-zinc-950" />
											</span>
										</TooltipTrigger>
										<TooltipContent className="bg-zinc-900">Clique para saber mais</TooltipContent>
									</Tooltip>
								</div>
							</div>
						</div>
						<AnimatePresence mode="popLayout">
							{selectedCard === card.id && (
								<motion.div
									animate={
										shouldReduceMotion
											? { width: '300px', opacity: 1 }
											: { width: '300px', opacity: 1, filter: 'blur(0px)' }
									}
									className="absolute top-0 right-0 h-full bg-zinc-900"
									exit={shouldReduceMotion ? { width: 0, opacity: 0 } : { width: 0, opacity: 0, filter: 'blur(5px)' }}
									initial={
										shouldReduceMotion ? { width: 0, opacity: 0 } : { width: 0, opacity: 0, filter: 'blur(5px)' }
									}
									transition={
										shouldReduceMotion
											? { duration: 0 }
											: { duration: 0.25, ease: EASE_OUT_QUINT, opacity: { duration: 0.2, delay: 0.1 } }
									}
								>
									<motion.div
										animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, filter: 'blur(0px)' }}
										className="custom-scrollbar flex h-full flex-col justify-start gap-4 overflow-auto p-6"
										exit={shouldReduceMotion ? { opacity: 0, x: 20 } : { opacity: 0, x: 20, filter: 'blur(5px)' }}
										initial={shouldReduceMotion ? { opacity: 0, x: 20 } : { opacity: 0, x: 20, filter: 'blur(5px)' }}
										transition={
											shouldReduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.2, ease: EASE_OUT_QUINT }
										}
									>
										<div className="text-primary-foreground text-sm leading-relaxed">{card.content}</div>
										{card.author && (
											<div className="mt-4 flex items-center gap-3">
												<div className="h-12 w-12 overflow-hidden rounded-full border bg-zinc-900">
													<Image
														alt={card.author.name}
														className="h-full w-full object-cover"
														height={48}
														src={card.author.image}
														width={48}
													/>
												</div>
												<div>
													<p className="text-foreground font-semibold">{card.author.name}</p>
													<p className="text-primary-foreground text-xs">{card.author.role}</p>
												</div>
											</div>
										)}
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</div>
	);
}
