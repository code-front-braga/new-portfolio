'use client';

import { ReflectiveGallery } from '@/app/portfolio/_shared/reflective-gallery';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
	return (
		<div className="w-full">
			<div className="relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-350 justify-between gap-6 pt-12 text-white lg:flex">
				<aside className="relative h-full w-full max-w-40 transition-all duration-600 hover:max-w-60">
					<ReflectiveGallery images={['/resume.png']} />
				</aside>

				<div className="relative h-full flex-1">
					<div className="custom-scrollbar h-full overflow-y-auto pr-8">
						<div className="sticky top-0 z-10 bg-zinc-950 pb-4">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="mt-2 h-4 w-full" />
						</div>
						<div className="space-y-6">
							<div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
								<div className="flex items-center gap-4">
									<Skeleton className="h-16 w-16 rounded-full" />
									<div className="flex w-full flex-col gap-2">
										<Skeleton className="h-4 w-full" />
										<Skeleton className="h-4 w-full" />
									</div>
								</div>
								<div className="mt-4 space-y-2">
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-full" />
								</div>
								<div className="mt-4 flex flex-wrap items-center gap-2">
									<Skeleton className="h-6 w-24 rounded-md" />
									<Skeleton className="h-6 w-24 rounded-md" />
									<Skeleton className="h-6 w-24 rounded-md" />
								</div>
							</div>

							<div className="space-y-3">
								<Skeleton className="h-4 w-full" />
								<div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
									<Skeleton className="h-24 w-full rounded-md" />
								</div>
								<div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
									<Skeleton className="h-24 w-full rounded-md" />
								</div>
							</div>

							<div className="space-y-3">
								<Skeleton className="h-4 w-full" />
								<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
									<Skeleton className="h-12 w-full rounded-md" />
									<Skeleton className="h-12 w-full rounded-md" />
									<Skeleton className="h-12 w-full rounded-md" />
									<Skeleton className="h-12 w-full rounded-md" />
								</div>
							</div>
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
					<div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
						<div className="flex items-center gap-4">
							<Skeleton className="h-16 w-16 rounded-full" />
							<div className="flex w-full flex-col gap-2">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
							</div>
						</div>
						<div className="mt-4 space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
						</div>
						<div className="mt-4 flex flex-wrap items-center gap-2">
							<Skeleton className="h-6 w-24 rounded-md" />
							<Skeleton className="h-6 w-24 rounded-md" />
							<Skeleton className="h-6 w-24 rounded-md" />
						</div>
					</div>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={`m-res-${i}`} className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
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
