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
		subtitle: 'Актёр • Экшен • Боевые искусства • Многоязычный',
		playingAge: 'Игровой возраст: 35–45',
		country: 'Казахстан',
		languages: 'Языки: казахский • английский • русский • корейский',
		primaryCta: 'Смотреть шоурил',
	},
	kk: {
		name: 'ХАМИТ АРКАЕВ',
		aliasPrefix: 'Сонымен қатар белгілі',
		aliasName: 'Хама',
		subtitle: 'Актер • Экшн • Жекпе-жек өнері • Көп тілді',
		playingAge: 'Ойын жасы: 35–45',
		country: 'Қазақстан',
		languages: 'Тілдер: қазақ • ағылшын • орыс • корей',
		primaryCta: 'Шоу-рилді көру',
	},
	ko: {
		name: '하밋 아르카예프',
		aliasPrefix: '또는',
		aliasName: '하마',
		subtitle: '배우 • 액션 • 무술 • 다국어 가능',
		playingAge: '연기 가능 연령: 35–45',
		country: '카자흐스탄',
		languages: '언어: 카자흐어 • 영어 • 러시아어 • 한국어',
		primaryCta: '쇼릴 보기',
	},
} satisfies Record<AppLocale, any>

export default function Hero({ locale }: HeroProps) {
	const t = translations[locale]
	const [open, setOpen] = useState(false)

	// Константа высоты хедера для удобства поддержки
	const HEADER_HEIGHT = '4rem'

	return (
		<>
			<section
				id='hero'
				className='relative overflow-hidden bg-black text-white'
				style={{ height: `calc(100svh - ${HEADER_HEIGHT})` }}
			>
				{/* ─── MOBILE layout ─── */}
				<div className='flex h-full flex-col md:hidden'>
					{/* Photo — фиксируем 55% от доступной высоты секции */}
					<div className='relative h-[55%] w-full shrink-0'>
						<img
							src='/images/hero-mobile.png'
							alt='Khamit Arkayev'
							className='h-full w-full object-cover object-top'
						/>
						<div className='absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent' />
					</div>

					{/* Text — занимает остаток (45%) */}
					<div className='flex flex-1 flex-col justify-center bg-black px-6 pb-6'>
						<TextBlock t={t} onPlay={() => setOpen(true)} />
					</div>
				</div>

				{/* ─── DESKTOP layout ─── */}
				<div className='hidden h-full md:block'>
					<div className='absolute inset-0'>
						<img
							src='/images/hero-desktop.png'
							alt='Khamit Arkayev hero'
							className='h-full w-full object-cover object-[24%_18%]'
						/>
						<div className='absolute inset-0 bg-black/15' />
						<div className='absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent' />
					</div>

					<Container className='relative z-10 h-full'>
						<div className='flex h-full items-center justify-end'>
							<div className='w-full max-w-[30rem]'>
								<TextBlock t={t} onPlay={() => setOpen(true)} />
							</div>
						</div>
					</Container>
				</div>
			</section>

			{/* ─── Showreel modal ─── */}
			{open && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
					onClick={() => setOpen(false)}
				>
					<div
						className='relative w-full max-w-4xl px-4'
						onClick={e => e.stopPropagation()}
					>
						<iframe
							src='https://player.vimeo.com/video/222087977?h=f80f6ce383&autoplay=1'
							className='aspect-video w-full'
							allow='autoplay; fullscreen; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</>
	)
}

type TextBlockProps = {
	t: (typeof translations)['en']
	onPlay: () => void
}

function TextBlock({ t, onPlay }: TextBlockProps) {
	return (
		<div className='flex flex-col'>
			<h1 className='text-[1.8rem] font-bold uppercase leading-[1.1] tracking-[0.1em] text-white xs:text-[2rem] sm:text-[2.4rem]'>
				{t.name}
			</h1>

			<p className='mt-3 text-[16px] uppercase text-white/55'>
				{t.aliasPrefix} <span className='text-white'>{t.aliasName}</span>
			</p>

			<p className='mt-1 text-[16px] text-white/55'>{t.subtitle}</p>

			<div className='mb-6 mt-3 space-y-1 text-[15px] text-white/55'>
				<p>{t.playingAge}</p>
				<p className='flex items-center gap-1.5'>
					<IoLocationSharp className='shrink-0 text-[#d90416]' />
					<span>{t.country}</span>
				</p>
				<p className='line-clamp-2'>{t.languages}</p>
			</div>

			<div>
				<button
					onClick={onPlay}
					className='inline-flex min-h-11 items-center justify-center rounded-md bg-[#d90416] px-8 text-[16px] font-semibold uppercase text-white transition-transform active:scale-95 hover:bg-[#b00312]'
				>
					{t.primaryCta}
				</button>
			</div>
		</div>
	)
}