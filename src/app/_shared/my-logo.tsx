import Image from 'next/image';

export const MyLogo = () => {
	return (
		<div className="relative flex h-12 w-fit items-center justify-center overflow-hidden">
			<Image
				src="/logo.svg"
				alt="Logo DEV.braga"
				width={140}
				height={0}
				className="object-cover"
				priority
				quality={100}
			/>
		</div>
	);
};
