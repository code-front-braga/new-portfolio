'use client';

import { useSectionNavigation } from '../../../../../hooks/use-section-navigation';
import { ABOUT_SECTIONS } from '../../constants/about-sections';
import { SectionsContent } from '../about-sections/sections-content';
import { AsideNav } from './aside-nav';
import { DEFAULT_GALLERY_IMAGES } from './constants/gallery-assets';
import { ReflectiveGallery } from './reflective-gallery';

export const MenuContentDesktop = () => {
	const { contentRef, currentHash, makeNavigate } = useSectionNavigation(ABOUT_SECTIONS.map(s => s.href));

	return (
		<div
			className={`relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-360 justify-between gap-6 pt-12 pb-2 text-white lg:flex`}
		>
			<aside className="relative h-full w-full max-w-40 transition-all duration-600 hover:max-w-60">
				<p className="font-geist-sans pointer-events-none absolute top-4 left-1/2 z-20 w-full -translate-x-1/2 text-center text-xs text-white">
					Passe o mouse
				</p>
				<ReflectiveGallery images={[...DEFAULT_GALLERY_IMAGES]} />
			</aside>

			<div className="relative h-full flex-1">
				<div ref={contentRef} className="custom-scrollbar h-full overflow-y-auto pr-8">
					<SectionsContent makeNavigate={makeNavigate} />
				</div>
			</div>

			<AsideNav items={ABOUT_SECTIONS} currentHash={currentHash} makeNavigate={makeNavigate} />
		</div>
	);
};
