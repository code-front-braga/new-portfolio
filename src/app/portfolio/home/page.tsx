import { HomeBeamsBackground } from './_components/home-beams-background';
import { HomeImage } from './_components/home-image';
import { HomeMobileText } from './_components/home-mobile-text';
import { HomeSection } from './_components/home-section';
import { HomeTerminal } from './_components/home-terminal';

const HomePage = () => {
	return (
		<HomeSection>
			<HomeBeamsBackground />
			<HomeImage />
			<HomeMobileText />

			<HomeTerminal />
		</HomeSection>
	);
};

export default HomePage;
