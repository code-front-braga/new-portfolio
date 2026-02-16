import type { NavigateFn } from '../../../_shared/section';
import { CareerSection } from './career';
import { DrawSection } from './draw';
import { FamilySection } from './family';
import { MusicSection } from './music';
import { ProgrammingSection } from './programming';

export const AboutSectionsContent = ({
	sectionClassName,
	makeNavigate,
}: {
	sectionClassName?: string;
	makeNavigate?: NavigateFn;
}) => {
	return (
		<>
			<ProgrammingSection sectionClassName={sectionClassName} makeNavigate={makeNavigate} />
			<CareerSection makeNavigate={makeNavigate} />
			<FamilySection makeNavigate={makeNavigate} />
			<DrawSection makeNavigate={makeNavigate} />
			<MusicSection makeNavigate={makeNavigate} />
		</>
	);
};
