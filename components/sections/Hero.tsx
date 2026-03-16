import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'

type HeroProps = {
	locale: AppLocale
}

const translations = {
	en: {
		name: 'KHAMIT ARKAYEV',
		aliasPrefix: 'Also known as',
		aliasName: 'Hama',
		subtitle: 'Actor • Action • Martial Arts',
		playingAge: 'Playing age: 35–45',
		location: 'Based in Kazakhstan',
		languages: 'Languages: Kazakh • English • Russian • Korean',
		primaryCta: 'Watch Showreel',
	},
	ru: {
		name: 'ХАМИТ АРКАЕВ',
		aliasPrefix: 'Также известен как',
		aliasName: 'Хама',
		subtitle: 'Актёр • Экшен • Боевые искусства',
		playingAge: 'Игровой возраст: 35–45',
		location: 'Базируется в Казахстане',
		languages: 'Языки: казахский • английский • русский • корейский',
		primaryCta: 'Смотреть шоурил',
	},
	kk: {
		name: 'ХАМИТ АРКАЕВ',
		aliasPrefix: 'Сонымен қатар белгілі',
		aliasName: 'Хама',
		subtitle: 'Актер • Экшн • Жекпе-жек өнері',
		playingAge: 'Ойын жасы: 35–45',
		location: 'Қазақстанда орналасқан',
		languages: 'Тілдер: қазақ • ағылшын • орыс • корей',
		primaryCta: 'Шоу-рилді көру',
	},
	ko: {
		name: '하밋 아르카예프',
		aliasPrefix: '또는',
		aliasName: '하마',
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
		aliasPrefix: string
		aliasName: string
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
			<div className='absolute inset-0'>
				<img
					src='/images/hero-desktop.png'
					alt='Khamit Arkayev hero'
					className='absolute inset-0 hidden h-full w-full object-cover object-[24%_18%] md:block lg:object-[28%_20%] xl:object-[30%_22%] 2xl:object-[32%_24%]'
				/>

				<img
					src='/images/hero-mobile.png'
					alt='Khamit Arkayev hero'
					className='absolute inset-0 h-full w-full object-cover object-center md:hidden'
				/>

				<div className='absolute inset-0 bg-black/25 md:bg-black/10' />
				<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent md:bg-gradient-to-r md:from-black/10 md:via-transparent md:to-black/25' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_100%)]' />
			</div>

			<Container className='relative z-10'>
				<div className='flex min-h-[calc(100svh-4rem)] items-end py-16 sm:py-8 md:items-center md:justify-end md:py-10 lg:py-12'>
					<div className='w-full sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem]'>
						<h1 className='text-[2.2rem] font-bold uppercase leading-[0.95] tracking-[0.12em] text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl [text-shadow:0_4px_24px_rgba(0,0,0,0.72)]'>
							{t.name}
						</h1>

						<p className='mt-3 text-[18px] uppercase tracking-[0.12em] text-white/60 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]'>
							{t.aliasPrefix}{' '}
							<span className='font-medium text-[18px] uppercase text-white'>
								{t.aliasName}
							</span>
						</p>

						<p className='mt-5 text-[18px] font-medium text-white/90 sm:text-lg md:text-xl xl:text-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]'>
							{t.subtitle}
						</p>

						<div className='mt-5 mb-6 space-y-2 text-[18px] leading-7 text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]'>
							<p>{t.playingAge}</p>
							<p>{t.location}</p>
							<p>{t.languages}</p>
						</div>

						<div className='mt-3 flex justify-center md:justify-start'>
							<a
								href='#showreel'
								className='inline-flex min-h-12 items-center justify-center rounded-md bg-[#d90416] px-8 text-[18px] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_10px_24px_rgba(217,4,22,0.28)] transition hover:bg-[#b90313]'
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
