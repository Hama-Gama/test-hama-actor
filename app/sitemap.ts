import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date()

	return siteConfig.locales.map(locale => ({
		url: `${siteConfig.domain}/${locale}`,
		lastModified: now,
		changeFrequency: 'weekly',
		priority: 1,
	}))
}
