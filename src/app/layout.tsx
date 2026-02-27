import './globals.css';
import './scroll.css';

import type { Metadata } from 'next';

import { ChildrenType } from '@/@types/children-type';
import { TooltipProvider } from '@/components/ui/tooltip';
import { alumniFont, antaFont, geistFont, geistMonoFont, gemunuFont, sairaFont } from '@/lib/fonts';

const siteName = 'Braga | Software Engineer';
const description =
	'Portfolio de Braga, Desenvolvedor Full Stack especializado em Next.js, React, Node.js e design de experiências digitais de alta performance.';

export const metadata: Metadata = {
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description,
	keywords: [
		'Full Stack Developer',
		'Next.js',
		'React.js',
		'Node.js',
		'Tailwind CSS',
		'Software Engineer',
		'Front-end',
		'Back-end',
		'Creative Developer',
		'Braga Portfolio',
	],
	authors: [{ name: 'Braga' }],
	creator: 'Braga',
	openGraph: {
		type: 'website',
		locale: 'pt-BR',
		url: 'https://portfolio-braga.vercel.app',
		siteName: siteName,
		title: siteName,
		description,
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: siteName,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteName,
		description,
		images: ['/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-icon.png',
	},
};

export const viewport = {
	themeColor: '#1d4ed8',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pt-BR" data-scroll-behavior="smooth">
			<body
				className={`${alumniFont.className} ${antaFont.className} ${gemunuFont.className} ${geistFont.className} ${geistMonoFont.className} ${sairaFont.className} antialiased`}
			>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
