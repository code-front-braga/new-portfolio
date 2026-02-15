import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { ABOUT_CONTENT } from './content';

export function DrawSection({ makeNavigate }: { makeNavigate?: NavigateFn }) {
	return <Section content={ABOUT_CONTENT.draw} makeNavigate={makeNavigate} />;
}
