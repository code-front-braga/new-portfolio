import type { NavigateFn } from '../../../_shared/section';
import { Section } from '../../../_shared/section';
import { ABOUT_CONTENT } from './content';

export function ProgrammingSection({
	makeNavigate,
	sectionClassName,
}: {
	makeNavigate?: NavigateFn;
	sectionClassName?: string;
}) {
	return (
		<Section content={ABOUT_CONTENT.programming} makeNavigate={makeNavigate} sectionClassName={sectionClassName} />
	);
}
