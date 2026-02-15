import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { ABOUT_CONTENT } from './content';

export function MusicSection({ makeNavigate }: { makeNavigate?: NavigateFn }) {
	return <Section content={ABOUT_CONTENT.music} makeNavigate={makeNavigate} />;
}
