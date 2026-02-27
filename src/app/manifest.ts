import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Portfolio | Braga',
		short_name: 'Braga',
		description: 'Desenvolvedor Full Stack, Designer e Programador Criativo.',
		start_url: '/',
		display: 'standalone',
		background_color: '#09090b',
		theme_color: '#1d4ed8',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
