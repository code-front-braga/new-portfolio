'use client';

import { usePathname } from 'next/navigation';

import { LinksList } from '../../../links-list';
import { ResumeDownloadButton } from '../../../resume-download-button';

export const NavDesktop = () => {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center lg:flex">
			<LinksList pathname={pathname} ulClassName="items-center" />
			<ResumeDownloadButton />
		</nav>
	);
};
