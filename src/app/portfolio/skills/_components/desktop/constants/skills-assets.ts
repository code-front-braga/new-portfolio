export const SKILLS_ASSETS = {
	nex: { src: '/skills/nextjs.svg' },
	ts: { src: '/skills/ts.svg' },
	js: { src: '/skills/js.svg' },
	post: { src: '/skills/post.svg' },
	tailw: { src: '/skills/tailw.svg' },
  bAuth: {src: '/skills/betterauth.svg'},
  prisma: {src: '/skills/prisma.svg'}
} as const;

export const DEFAULT_SKILLS_IMAGES = Object.values(SKILLS_ASSETS).map(a => a.src);
