import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { locales, isSupportedLocale } from '@/lib/i18n'
import { getLocalizedMetadata } from '@/lib/metadata'

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
	return locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const safeLocale = isSupportedLocale(locale) ? locale : 'en'

	return getLocalizedMetadata(safeLocale, '')
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params

	if (!isSupportedLocale(locale)) {
		notFound()
	}

	return <>{children}</>
}
