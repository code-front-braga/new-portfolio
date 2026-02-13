'use client';

import { motion } from 'motion/react';

import { ChildrenType } from '@/@types/children-type';

export const HomeSection = ({ children }: ChildrenType) => {
	return (
		<motion.section
			className="relative z-20 grid h-full w-full grid-cols-1 items-center gap-6 overflow-hidden py-8 lg:grid-cols-2 lg:gap-10 lg:py-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
      <span className='inset-0 absolute bg-black/60 hidden lg:block'/>
			{children}
		</motion.section>
	);
};
