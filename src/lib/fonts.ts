import { Alumni_Sans, Anta, Geist, Geist_Mono, Gemunu_Libre, Saira } from 'next/font/google';

export const geistFont = Geist({
	subsets: ['latin'],
});

export const geistMonoFont = Geist_Mono({
	subsets: ['latin'],
});

export const gemunuFont = Gemunu_Libre({
	subsets: ['latin'],
});

export const sairaFont = Saira({
	subsets: ['latin'],
});

export const alumniFont = Alumni_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700', '900'],
});

export const antaFont = Anta({
	subsets: ['latin'],
	weight: ['400'],
});
