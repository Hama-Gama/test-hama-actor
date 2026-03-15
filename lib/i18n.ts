import { siteConfig, type AppLocale } from '@/lib/constants'

export const locales = siteConfig.locales
export const defaultLocale = siteConfig.defaultLocale
export const localeCookieName = 'preferred-locale'

export function isSupportedLocale(value: string): value is AppLocale {
	return locales.includes(value as AppLocale)
}

export function matchSupportedLocale(value?: string | null): AppLocale | null {
	if (!value) return null

	const lower = value.toLowerCase().trim()

	if (isSupportedLocale(lower)) {
		return lower
	}

	const base = lower.split('-')[0]

	if (base && isSupportedLocale(base)) {
		return base
	}

	return null
}

type ParsedLanguage = {
	tag: string
	q: number
}

export function parseAcceptLanguage(header: string | null): ParsedLanguage[] {
	if (!header) return []

	return header
		.split(',')
		.map(part => {
			const [rawTag, ...params] = part.trim().split(';')
			const qParam = params.find(param => param.trim().startsWith('q='))
			const q = qParam ? Number(qParam.trim().replace('q=', '')) : 1

			return {
				tag: rawTag.toLowerCase(),
				q: Number.isFinite(q) ? q : 1,
			}
		})
		.filter(item => item.tag)
		.sort((a, b) => b.q - a.q)
}

export function detectLocaleFromAcceptLanguage(
	header: string | null,
): AppLocale {
	const parsed = parseAcceptLanguage(header)

	for (const item of parsed) {
		const matched = matchSupportedLocale(item.tag)
		if (matched) {
			return matched
		}
	}

	return defaultLocale
}

export function getAlternatesLanguages(pathname = ''): Record<string, string> {
	const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`

	return Object.fromEntries(
		locales.map(locale => [
			locale,
			`${siteConfig.domain}/${locale}${cleanPath}`,
		]),
	)
}
