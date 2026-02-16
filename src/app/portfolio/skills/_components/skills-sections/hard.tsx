import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { SKILLS_CONTENT } from './content';

export function HardSkillsSection({
	makeNavigate,
	sectionClassName,
}: {
	makeNavigate?: NavigateFn;
	sectionClassName?: string;
}) {
	return <Section content={SKILLS_CONTENT.hard} makeNavigate={makeNavigate} sectionClassName={sectionClassName} />;
}
