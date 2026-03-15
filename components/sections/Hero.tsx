import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'

type HeroProps = {
	locale: AppLocale
}

const translations = {
	en: {
		eyebrow: 'Actor • Action • Multilingual',
		title: 'Cinematic presence for international casting.',
		description:
			'A scalable multilingual actor website built for visibility, fast contact, and future content growth.',
		primaryCta: 'Watch showreel',
		secondaryCta: 'Contact',
	},
	ru: {
		eyebrow: 'Актёр • Экшен • Мультиязычность',
		title: 'Кинематографичная подача для международного кастинга.',
		description:
			'Масштабируемый многоязычный сайт актёра для видимости, быстрого контакта и будущего роста контента.',
		primaryCta: 'Смотреть шоурил',
		secondaryCta: 'Контакты',
	},
	kk: {
		eyebrow: 'Актер • Экшн • Көптілді',
		title: 'Халықаралық кастингке арналған кинематографиялық имидж.',
		description:
			'Көріну, жылдам байланыс және болашақ контент кеңеюі үшін жасалған көптілді актер сайты.',
		primaryCta: 'Шоу-рилді көру',
		secondaryCta: 'Байланыс',
	},
	ko: {
		eyebrow: '배우 • 액션 • 다국어',
		title: '국제 캐스팅을 위한 시네마틱한 존재감.',
		description:
			'노출, 빠른 연락, 향후 확장을 위해 제작된 확장 가능한 다국어 배우 웹사이트입니다.',
		primaryCta: '쇼릴 보기',
		secondaryCta: '연락처',
	},
} satisfies Record<AppLocale, Record<string, string>>

export default function Hero({ locale }: HeroProps) {
	const t = translations[locale]

	return (
		<section
			id='hero'
			className='relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_40%),linear-gradient(to_bottom,#111111,#050505)] py-24 sm:py-32'
		>
			<Container>
				<div className='max-w-4xl'>
					<p className='mb-4 text-sm font-medium tracking-[0.2em] text-white/60 uppercase'>
						{t.eyebrow}
					</p>

					<h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
						{t.title}
					</h1>

					<p className='mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg'>
						{t.description}
					</p>

					<div className='mt-8 flex flex-col gap-4 sm:flex-row'>
						<a
							href='#showreel'
							className='inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:opacity-90'
						>
							{t.primaryCta}
						</a>

						<a
							href='#contacts'
							className='inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/8'
						>
							{t.secondaryCta}
						</a>
					</div>
				</div>
			</Container>
		</section>
	)
}
