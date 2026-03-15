import { NextRequest, NextResponse } from 'next/server'
import {
	defaultLocale,
	detectLocaleFromAcceptLanguage,
	isSupportedLocale,
	localeCookieName,
} from '@/lib/i18n'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const isStaticFile =
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname === '/favicon.ico' ||
		pathname === '/robots.txt' ||
		pathname === '/sitemap.xml' ||
		pathname === '/manifest.webmanifest' ||
		pathname.includes('.')

	if (isStaticFile) {
		return NextResponse.next()
	}

	const maybeLocale = pathname.split('/')[1]?.toLowerCase()

	if (maybeLocale && isSupportedLocale(maybeLocale)) {
		return NextResponse.next()
	}

	const cookieLocale = request.cookies.get(localeCookieName)?.value
	const safeCookieLocale =
		cookieLocale && isSupportedLocale(cookieLocale) ? cookieLocale : null

	const detectedLocale =
		safeCookieLocale ??
		detectLocaleFromAcceptLanguage(request.headers.get('accept-language')) ??
		defaultLocale

	const url = request.nextUrl.clone()
	url.pathname =
		pathname === '/' ? `/${detectedLocale}` : `/${detectedLocale}${pathname}`

	return NextResponse.redirect(url)
}

export const config = {
	matcher: ['/((?!_next|.*\\..*).*)'],
}
