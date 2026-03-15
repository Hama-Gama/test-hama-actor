import type { Metadata } from 'next'
import { type AppLocale, siteConfig } from '@/lib/constants'
import { getAlternatesLanguages } from '@/lib/i18n'

type LocalSeo = {
	title: string
	description: string
	keywords: string[]
	ogTitle: string
	ogDescription: string
	twitterTitle: string
	twitterDescription: string
}

const seo: Record<AppLocale, LocalSeo> = {
	en: {
		title: 'Hama Actor — Actor Portfolio',
		description:
			'Professional multilingual actor website with showreel, profile, skills, and contact information.',
		keywords: [
			'actor',
			'actor portfolio',
			'showreel',
			'casting',
			'multilingual actor',
		],
		ogTitle: 'Hama Actor — Actor Portfolio',
		ogDescription:
			'Professional multilingual actor website with showreel, profile, skills, and contact information.',
		twitterTitle: 'Hama Actor — Actor Portfolio',
		twitterDescription:
			'Professional multilingual actor website with showreel, profile, skills, and contact information.',
	},
	ru: {
		title: 'Hama Actor — Сайт актёра',
		description:
			'Профессиональный многоязычный сайт актёра: шоурил, профиль, навыки и контакты.',
		keywords: ['актёр', 'сайт актёра', 'шоурил', 'кастинг', 'портфолио актёра'],
		ogTitle: 'Hama Actor — Сайт актёра',
		ogDescription:
			'Профессиональный многоязычный сайт актёра: шоурил, профиль, навыки и контакты.',
		twitterTitle: 'Hama Actor — Сайт актёра',
		twitterDescription:
			'Профессиональный многоязычный сайт актёра: шоурил, профиль, навыки и контакты.',
	},
	kk: {
		title: 'Hama Actor — Актер сайты',
		description:
			'Кәсіби көптілді актер сайты: шоу-рил, профиль, дағдылар және байланыс.',
		keywords: ['актер', 'актер сайты', 'шоу-рил', 'кастинг', 'портфолио'],
		ogTitle: 'Hama Actor — Актер сайты',
		ogDescription:
			'Кәсіби көптілді актер сайты: шоу-рил, профиль, дағдылар және байланыс.',
		twitterTitle: 'Hama Actor — Актер сайты',
		twitterDescription:
			'Кәсіби көптілді актер сайты: шоу-рил, профиль, дағдылар және байланыс.',
	},
	ko: {
		title: 'Hama Actor — 배우 포트폴리오',
		description:
			'쇼릴, 프로필, 특기, 연락처 정보를 담은 다국어 배우 웹사이트입니다.',
		keywords: ['배우', '포트폴리오', '쇼릴', '캐스팅', '배우 사이트'],
		ogTitle: 'Hama Actor — 배우 포트폴리오',
		ogDescription:
			'쇼릴, 프로필, 특기, 연락처 정보를 담은 다국어 배우 웹사이트입니다.',
		twitterTitle: 'Hama Actor — 배우 포트폴리오',
		twitterDescription:
			'쇼릴, 프로필, 특기, 연락처 정보를 담은 다국어 배우 웹사이트입니다.',
	},
}

export function getLocalizedMetadata(
	locale: AppLocale,
	pathname = '',
): Metadata {
	const current = seo[locale] ?? seo.en
	const canonicalPath = pathname.startsWith('/') ? pathname : `/${pathname}`
	const url = `${siteConfig.domain}/${locale}${canonicalPath === '/' ? '' : canonicalPath}`

	return {
		metadataBase: new URL(siteConfig.domain),
		title: current.title,
		description: current.description,
		keywords: current.keywords,
		alternates: {
			canonical: url,
			languages: getAlternatesLanguages(pathname),
		},
		openGraph: {
			type: 'website',
			locale,
			url,
			title: current.ogTitle,
			description: current.ogDescription,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: current.ogTitle,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: current.twitterTitle,
			description: current.twitterDescription,
			images: [siteConfig.ogImage],
		},
	}
}
