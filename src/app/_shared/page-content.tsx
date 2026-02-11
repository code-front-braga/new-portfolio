'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { NumberTicker } from '@/components/ui/number-ticker';
import { TypingAnimation } from '@/components/ui/typing-animation';

export const PageContent = () => {
	const { replace } = useRouter();
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
		<div className="mx-auto w-40 px-4 py-6">
			<div className="flex items-baseline gap-2" ref={counterRef}>
				<NumberTicker
					value={100}
					startValue={0}
					onComplete={handleComplete}
					onValueChange={handleChange}
					className="text-3xl font-semibold tracking-tight text-white"
				/>
				<span className="text-base font-medium text-white">%</span>
			</div>
			<div className="mt-3 w-full">
				<div ref={progressTrackRef} className="bg-muted relative h-1 w-full rounded">
					<div ref={progressFillRef} className="h-1 w-0 rounded bg-white transition-all duration-100 ease-linear" />
					<div
						ref={progressDotRef}
						className="absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full bg-blue-400 transition-transform duration-100 ease-linear"
					/>
				</div>
			</div>
			<TypingAnimation className="mt-2 w-20 text-xs text-white">Preparando portfolio...</TypingAnimation>
		</div>
	);
};
