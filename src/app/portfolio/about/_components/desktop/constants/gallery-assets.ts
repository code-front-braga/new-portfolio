export const GALLERY_ASSETS = {
	goku: '/goku.jpg',
	guitar: '/my-guitar.jpg',
	image4: '/my-image4.png',
	image9: '/icon-logo-header.svg',
	note: '/notebook.jpg',
	note2: '/note2.jpg',
	note3: '/note3.jpg',
} as const;

export const DEFAULT_GALLERY_IMAGES = [...Object.values(GALLERY_ASSETS), ...Object.values(GALLERY_ASSETS)];
