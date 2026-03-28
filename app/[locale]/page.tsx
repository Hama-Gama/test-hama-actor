import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import { isSupportedLocale } from '@/lib/i18n'
import type { AppLocale } from '@/lib/constants'
import { Filmography } from '@/components/sections/Filmography'
import ShowReel from '@/components/sections/ShowReel'

type Props = {
	params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
	const { locale } = await params
	const safeLocale: AppLocale = isSupportedLocale(locale) ? locale : 'en'

	return (
		<>
			<Header locale={safeLocale} />
			<main id='main-content'>
				<Hero locale={safeLocale} />

				<ShowReel />

				<Filmography />
			</main>
			<Footer locale={safeLocale} />
		</>
	)
}
