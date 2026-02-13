import { ChevronRightIcon } from 'lucide-react';

type MenuButtonProps = {
	onClick: () => void;
	isMenuClicked: boolean;
};

export const MenuButton = ({ onClick, isMenuClicked }: MenuButtonProps) => {
	return (
		<button
			onClick={onClick}
			aria-expanded={isMenuClicked}
			className="font-geist-sans flex items-center gap-1.5 text-sm text-white transition-colors"
		>
			<span
				className={`inline-flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuClicked ? 'rotate-90' : 'rotate-0'}`}
			>
				<ChevronRightIcon size={18} />
			</span>
			<span className="font-bold">Menu <span className='text-blue-500'>(página atual)</span></span>
		</button>
	);
};
