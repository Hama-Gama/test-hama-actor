'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'
import { IoLocationSharp } from 'react-icons/io5'

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
		country: 'Kazakhstan',
		languages: 'Languages: Kazakh • English • Russian • Korean',
		primaryCta: 'Watch Showreel',
	},
	ru: {
		name: 'ХАМИТ АРКАЕВ',
		aliasPrefix: 'Также известен как',
		aliasName: 'Хама',
		subtitle: 'Актёр • Экшен • Боевые искусства',
		playingAge: 'Игровой возраст: 35–45',
		country: 'Казахстан',
		languages: 'Языки: казахский • английский • русский • корейский',
		primaryCta: 'Смотреть шоурил',
	},
	kk: {
		name: 'ХАМИТ АРКАЕВ',
		aliasPrefix: 'Сонымен қатар белгілі',
		aliasName: 'Хама',
		subtitle: 'Актер • Экшн • Жекпе-жек өнері',
		playingAge: 'Ойын жасы: 35–45',
		country: 'Қазақстан',
		languages: 'Тілдер: қазақ • ағылшын • орыс • корей',
		primaryCta: 'Шоу-рилді көру',
	},
	ko: {
		name: '하밋 아르카예프',
		aliasPrefix: '또는',
		aliasName: '하마',
		subtitle: '배우 • 액션 • 무술',
		playingAge: '연기 가능 연령: 35–45',
		country: '카자흐스탄',
		languages: '언어: 카자흐어 • 영어 • 러시아어 • 한국어',
		primaryCta: '쇼릴 보기',
	},
} satisfies Record<AppLocale, any>

export default function Hero({ locale }: HeroProps) {
	const t = translations[locale]
	const [open, setOpen] = useState(false)

	return (
		<>
			<section
				id='hero'
				className='relative min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white'
			>
				<div className='absolute inset-0'>
					<img
						src='/images/hero-desktop.png'
						alt='Khamit Arkayev hero'
						className='absolute inset-0 hidden h-full w-full object-cover object-[24%_18%] md:block'
					/>

					<img
						src='/images/hero-mobile.png'
						alt='Khamit Arkayev hero'
						className='absolute inset-0 h-full w-full object-cover md:hidden'
					/>

					<div className='absolute inset-0 bg-black/25 md:bg-black/10' />
					<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent md:bg-gradient-to-r md:from-black/10 md:via-transparent md:to-black/25' />
				</div>

				<Container className='relative z-10'>
					<div className='flex min-h-[calc(100svh-4rem)] items-end py-16 md:items-center md:justify-end'>
						<div className='w-full sm:max-w-[28rem] md:max-w-[32rem]'>
							<h1 className='text-[2.2rem] font-bold uppercase tracking-[0.12em] text-white'>
								{t.name}
							</h1>

							<p className='mt-3 text-[18px] uppercase text-white/60'>
								{t.aliasPrefix}{' '}
								<span className='text-white'>{t.aliasName}</span>
							</p>

							<p className='mt-2 text-[18px] text-white/60'>{t.subtitle}</p>

							<div className='mt-2 mb-6 text-[18px] text-white/60'>
								<p>{t.playingAge}</p>

								<p className='flex items-center gap-2'>
									<IoLocationSharp className='text-white/60' />
									<span>{t.country}</span>
								</p>

								<p>{t.languages}</p>
							</div>

							<div className='mt-3 flex justify-center md:justify-start'>
								<button
									onClick={() => setOpen(true)}
									className='inline-flex min-h-12 items-center justify-center rounded-md bg-[#d90416] px-8 text-[18px] font-semibold uppercase text-white'
								>
									{t.primaryCta}
								</button>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{open && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
					onClick={() => setOpen(false)}
				>
					<div
						className='relative w-full max-w-4xl'
						onClick={e => e.stopPropagation()}
					>
						<iframe
							src='https://player.vimeo.com/video/222087977?h=f80f6ce383&autoplay=1'
							className='w-full aspect-video'
							allow='autoplay; fullscreen; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</>
	)
}
