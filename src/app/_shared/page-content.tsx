'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { NumberTicker } from '@/components/ui/number-ticker';

export const PageContent = () => {
	const { replace } = useRouter();
	// const containerRef = useRef<HTMLDivElement | null>(null);
	const counterRef = useRef<HTMLDivElement | null>(null);
	const progressFillRef = useRef<HTMLDivElement | null>(null);
	const progressTrackRef = useRef<HTMLDivElement | null>(null);
	const progressDotRef = useRef<HTMLDivElement | null>(null);

	const handleChange = (v: number) => {
		if (progressFillRef.current) {
			const clamped = Math.max(0, Math.min(100, v));
			progressFillRef.current.style.width = `${clamped}%`;
		}
		if (progressTrackRef.current && progressDotRef.current) {
			const trackWidth = progressTrackRef.current.offsetWidth;
			const targetX = (Math.max(0, Math.min(100, v)) / 100) * trackWidth;
			progressDotRef.current.style.transform = `translateX(${targetX}px)`;
		}
	};

	const handleComplete = () => {
		replace('/portfolio/home');
	};

	return (
		<div className="flex min-h-screen w-full items-center">
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
							<div
								ref={progressFillRef}
								className="from-primary to-primary/60 h-1 w-0 rounded-full bg-linear-to-r transition-all duration-100 ease-linear"
							/>
							<div
								ref={progressDotRef}
								className="bg-primary absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-linear"
							/>
						</div>
					</div>
					<div className="text-muted-foreground text-xs">Preparando portfolio...</div>
				</div>
			</div>
		</div>
	);
};
