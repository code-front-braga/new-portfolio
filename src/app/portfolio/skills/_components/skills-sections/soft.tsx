import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { SKILLS_CONTENT } from './content';

export function SoftSkillsSection({ makeNavigate }: { makeNavigate?: NavigateFn }) {
	return <Section content={SKILLS_CONTENT.soft} makeNavigate={makeNavigate} />;
}
