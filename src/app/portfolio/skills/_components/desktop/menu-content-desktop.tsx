'use client';

import { PointerIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { ReflectiveGallery } from '@/app/portfolio/_shared/reflective-gallery';

import { useSectionNavigation } from '../../../../../hooks/use-section-navigation';
import { SKILLS_SECTIONS } from '../../constants/skills-sections';
import { SkillsSectionsContent } from '../skills-sections/sections-content';
import { AsideNav } from './aside-nav';
import { DEFAULT_SKILLS_IMAGES } from './constants/skills-assets';

export const MenuContentDesktop = () => {
	const { contentRef, currentHash, makeNavigate } = useSectionNavigation(SKILLS_SECTIONS.map(s => s.href));

	return (
		<div
			className={`relative top-18 m-auto hidden h-[calc(100vh-72px)] max-w-360 justify-between gap-6 pt-12 pb-2 text-white lg:flex`}
		>
			<aside className="relative h-full w-full max-w-40 transition-all duration-600 hover:max-w-60">
				<div className="pointer-events-none absolute top-4 left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center gap-1.5 text-center">
					<p className="font-geist-sans text-xs text-white">Passe o mouse</p>
					<motion.span
						className="inline-block origin-top"
						initial={{ rotate: -12 }}
						animate={{ rotate: 12 }}
						transition={{ duration: 0.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
					>
						<PointerIcon className="rotate-180" />
					</motion.span>
				</div>
				<ReflectiveGallery images={[...DEFAULT_SKILLS_IMAGES]} />
			</aside>

			<div className="relative h-full flex-1">
				<div ref={contentRef} className="custom-scrollbar h-full overflow-y-auto pr-8">
					<SkillsSectionsContent makeNavigate={makeNavigate} />
				</div>
			</div>

			<AsideNav items={SKILLS_SECTIONS} currentHash={currentHash} makeNavigate={makeNavigate} />
		</div>
	);
};
