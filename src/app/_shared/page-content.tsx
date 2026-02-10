'use client';

import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { NumberTicker } from '@/components/ui/number-ticker';

export const PageContent = () => {
	const { replace } = useRouter();
	const containerRef = useRef<HTMLDivElement | null>(null);
	const counterRef = useRef<HTMLDivElement | null>(null);
	const progressFillRef = useRef<HTMLDivElement | null>(null);
	const progressTrackRef = useRef<HTMLDivElement | null>(null);
	const progressDotRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(containerRef.current, { opacity: 0 });
			gsap.to(containerRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });
		}, containerRef);

		return () => {
			ctx.revert();
		};
	}, [replace]);

	const handleChange = (v: number) => {
		if (progressFillRef.current) {
			const clamped = Math.max(0, Math.min(100, v));
			gsap.to(progressFillRef.current, { width: `${clamped}%`, duration: 0.1, ease: 'linear' });
		}
		if (progressTrackRef.current && progressDotRef.current) {
			const trackWidth = progressTrackRef.current.offsetWidth;
			const targetX = (Math.max(0, Math.min(100, v)) / 100) * trackWidth;
			gsap.to(progressDotRef.current, { x: targetX, duration: 0.1, ease: 'linear' });
		}
	};

	const handleComplete = () => {
		replace('/portfolio');
	};

	return (
		<div ref={containerRef} className="grid min-h-screen place-items-center p-6">
			<div className="border-border ring-border bg-card/60 mx-auto flex size-64 items-center justify-center rounded-full border p-4 shadow-sm ring-1 backdrop-blur">
				<div className="flex flex-col items-center gap-3">
					<div ref={counterRef} className="flex items-baseline gap-2">
						<NumberTicker
							value={100}
							startValue={0}
							onComplete={handleComplete}
							onValueChange={handleChange}
							className="text-foreground text-6xl font-bold tracking-tight"
						/>
						<span className="text-xl font-medium">%</span>
					</div>
					<div className="w-full">
						<div ref={progressTrackRef} className="bg-muted relative mx-auto h-1 w-[80%] rounded-full">
							<div ref={progressFillRef} className="from-primary to-primary/60 h-1 w-0 rounded-full bg-linear-to-r" />
							<div
								ref={progressDotRef}
								className="bg-primary absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full"
							/>
						</div>
					</div>
					<div className="text-muted-foreground text-xs">Preparando portfolio...</div>
				</div>
			</div>
		</div>
	);
};
