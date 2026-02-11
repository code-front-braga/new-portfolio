import { PageContent } from '@/app/_shared/page-content';

const Home = () => {
	return (
		<section className="relative h-dvh w-full bg-zinc-950">
			<video
				className="h-full w-full bg-zinc-950 object-cover"
				style={{ objectPosition: 'center 25%' }}
				src="/media/video-hd-blue.mp4"
				autoPlay
				muted
				playsInline
				preload="auto"
			/>
			<div className="absolute bottom-0">
				<PageContent />
			</div>
		</section>
	);
};

export default Home;
