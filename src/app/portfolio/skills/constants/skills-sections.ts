import { BrainIcon, ZapIcon } from 'lucide-react';

export type SkillsSectionItemData = {
	label: string;
	href: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
	color?: string;
};

export const SKILLS_SECTIONS: SkillsSectionItemData[] = [
	{
		label: 'Hard Skills',
		href: '#hard',
		icon: ZapIcon,
		color: 'text-blue-300',
	},
	{
		label: 'Soft Skills',
		href: '#soft',
		icon: BrainIcon,
		color: 'text-pink-300',
	},
];
