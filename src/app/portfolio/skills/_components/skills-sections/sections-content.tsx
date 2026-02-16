import type { NavigateFn } from '../../../_shared/section';
import { HardSkillsSection } from './hard';
import { SoftSkillsSection } from './soft';

export function SkillsSectionsContent({
	sectionClassName,
	makeNavigate,
}: {
	sectionClassName?: string;
	makeNavigate?: NavigateFn;
}) {
	return (
		<>
			<HardSkillsSection sectionClassName={sectionClassName} makeNavigate={makeNavigate} />
			<SoftSkillsSection makeNavigate={makeNavigate} />
		</>
	);
}
