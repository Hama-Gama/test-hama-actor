import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'

type HeroProps = {
	locale: AppLocale
}

const translations = {
	en: {
		name: 'Khamit Arkayev',
		subtitle: 'Actor • Action • Martial Arts',
		playingAge: 'Playing age: 35–45',
		location: 'Based in Kazakhstan',
		languages: 'Languages: Kazakh • English • Russian • Korean',
		primaryCta: 'Watch Showreel',
	},
	ru: {
		name: 'Khamit Arkayev',
		subtitle: 'Актёр • Экшен • Боевые искусства',
		playingAge: 'Игровой возраст: 35–45',
		location: 'Базируется в Казахстане',
		languages: 'Языки: казахский • английский • русский • корейский',
		primaryCta: 'Смотреть шоурил',
	},
	kk: {
		name: 'Khamit Arkayev',
		subtitle: 'Актер • Экшн • Жекпе-жек өнері',
		playingAge: 'Ойын жасы: 35–45',
		location: 'Қазақстанда орналасқан',
		languages: 'Тілдер: қазақ • ағылшын • орыс • корей',
		primaryCta: 'Шоу-рилді көру',
	},
	ko: {
		name: 'Khamit Arkayev',
		subtitle: '배우 • 액션 • 무술',
		playingAge: '연기 가능 연령: 35–45',
		location: '카자흐스탄 기반',
		languages: '언어: 카자흐어 • 영어 • 러시아어 • 한국어',
		primaryCta: '쇼릴 보기',
	},
} satisfies Record<
	AppLocale,
	{
		name: string
		subtitle: string
		playingAge: string
		location: string
		languages: string
		primaryCta: string
	}
>

export default function Hero({ locale }: HeroProps) {
	const t = translations[locale]

	return (
		<section
			id='hero'
			className='relative min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white'
		>
			<img
				src='/images/hero-desktop.png'
				alt='Khamit Arkayev hero'
				className='absolute inset-0 hidden h-full w-full object-cover md:block'
			/>

			<img
				src='/images/hero-mobile.png'
				alt='Khamit Arkayev hero'
				className='absolute inset-0 h-full w-full object-cover md:hidden'
			/>

			<div className='absolute inset-0 bg-black/25' />

			<Container className='relative z-10 h-[calc(100svh-4rem)]'>
				<div className='flex h-full items-end pb-8 md:items-center md:justify-end md:pb-0'>
					<div className='w-full max-w-xl'>
						<h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_4px_24px_rgba(0,0,0,0.7)]'>
							{t.name}
						</h1>

						<p className='mt-4 text-base font-medium text-white sm:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]'>
							{t.subtitle}
						</p>

						<div className='mt-6 space-y-2 text-sm leading-6 text-white sm:text-base [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]'>
							<p>{t.playingAge}</p>
							<p>{t.location}</p>
							<p>{t.languages}</p>
						</div>

						<div className='mt-8 flex flex-col gap-4 sm:flex-row'>
							<a
								href='#showreel'
								className='inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:opacity-90'
							>
								{t.primaryCta}
							</a>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
