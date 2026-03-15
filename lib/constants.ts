export const siteConfig = {
	name: 'Hama Actor',
	domain: 'http://localhost:3000',
	defaultLocale: 'en',
	locales: ['en', 'ru', 'kk', 'ko'] as const,
	ogImage: '/og/default-og.jpg',
} as const

export type AppLocale = (typeof siteConfig.locales)[number]
