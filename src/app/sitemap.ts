import type { MetadataRoute } from 'next';

const BASE_URL = 'https://portfolio-braga.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		'',
		'/portfolio/about',
		'/portfolio/projects',
		'/portfolio/resume',
		'/portfolio/skills',
		'/portfolio/books',
	].map(route => ({
		url: `${BASE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: route === '' ? 1 : 0.8,
	}));

	return routes;
}
