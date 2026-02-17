'use client';

import type { NavigateFn } from '../../../_shared/section';
import { REPOSITORIES } from '../../constants/repositories';
import { ProjectSection } from './project';

export function ProjectsSectionsContent({
	sectionClassName,
	makeNavigate,
}: {
	sectionClassName?: string;
	makeNavigate?: NavigateFn;
}) {
	return (
		<>
			{REPOSITORIES.map(repo => {
				return (
					<ProjectSection
						key={repo.title}
						repo={repo}
						makeNavigate={makeNavigate}
						sectionClassName={`${sectionClassName ?? ''}`}
					/>
				);
			})}
		</>
	);
}
