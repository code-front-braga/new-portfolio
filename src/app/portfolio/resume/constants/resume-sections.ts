import { BoxesIcon, BriefcaseBusinessIcon, GlobeIcon, GraduationCapIcon, UserRoundIcon, ZapIcon } from 'lucide-react';

import type { NavItemData } from '../../_shared/aside-nav';

export const RESUME_SECTIONS: NavItemData[] = [
	{ label: 'Perfil', href: '#intro', icon: UserRoundIcon, color: 'text-blue-300' },
	{ label: 'Experiências', href: '#experience', icon: BriefcaseBusinessIcon, color: 'text-indigo-300' },
	{ label: 'Projetos', href: '#projects', icon: BoxesIcon, color: 'text-pink-300' },
	{ label: 'Skills', href: '#skills', icon: ZapIcon, color: 'text-violet-300' },
	{ label: 'Formação', href: '#education', icon: GraduationCapIcon, color: 'text-cyan-300' },
	{ label: 'Linguagem', href: '#language', icon: GlobeIcon, color: 'text-blue-300' },
];
