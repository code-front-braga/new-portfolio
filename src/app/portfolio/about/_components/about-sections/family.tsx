import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { ABOUT_CONTENT } from './content';

export function FamilySection({ makeNavigate }: { makeNavigate?: NavigateFn }) {
	return <Section content={ABOUT_CONTENT.family} makeNavigate={makeNavigate} />;
}
