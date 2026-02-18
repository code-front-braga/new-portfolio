import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

import { CommandItem } from '@/components/ui/command';

type CustomCommandItemProps = {
	icon: JSX.ElementType;
	label: string;
	href: string;
	onSelected?: (entry: { label: string; href: string }) => void;
};

export const CustomCommandItem = ({ label, icon: Icon, href, onSelected }: CustomCommandItemProps) => {
	return (
		<CommandItem
			onSelect={() => {
				onSelected?.({ label, href });
			}}
		>
			<Link href={href} className="flex w-full items-center justify-between">
				<div className="flex items-center gap-2">
					<Icon aria-hidden="true" size={16} />
					<span>{label}</span>
				</div>
				<ArrowUpRightIcon className="ml-auto" />
			</Link>
		</CommandItem>
	);
};
