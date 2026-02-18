'use client';

import { ReflectiveGallery } from '@/app/portfolio/_shared/reflective-gallery';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
	return (
		<div className="w-full">
			<div className="relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-350 justify-between gap-6 pt-12 text-white lg:flex">
				<aside className="relative h-full w-full max-w-40 transition-all duration-600 hover:max-w-60">
					<ReflectiveGallery images={['/books/library1.jpg']} />
				</aside>

				<div className="relative h-full flex-1">
					<div className="custom-scrollbar h-full overflow-y-auto pr-8">
						<div className="sticky top-0 z-10 bg-zinc-950 pb-4">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="mt-2 h-4 w-full" />
						</div>
						<div className="space-y-4">
							{Array.from({ length: 5 }).map((_, i) => (
								<div key={i} className="mb-4 space-y-3">
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-full" />
								</div>
							))}
						</div>
					</div>
				</div>

				<aside className="relative h-full w-40">
					<div className="flex h-full flex-col items-start gap-2 pt-12">
						{Array.from({ length: 6 }).map((_, i) => (
							<div
								key={i}
								className="group flex w-full items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-2"
							>
								<Skeleton className="h-5 w-5 rounded-md" />
								<Skeleton className="h-4 w-full" />
							</div>
						))}
					</div>
				</aside>
			</div>

			<div className="p-4 pt-32 lg:hidden">
				<div className="space-y-6">
					<Skeleton className="h-4 w-full" />
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={`m-${i}`} className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
