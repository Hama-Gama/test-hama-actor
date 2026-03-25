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
				className='relative overflow-hidden bg-black text-white'
			>
				{/* ─── MOBILE layout: stacked (photo top, text bottom) ─── */}
				<div className='flex min-h-[100svh] flex-col md:hidden'>
					{/* Photo — top 55% of the screen, face never covered */}
					<div className='relative h-[55svh] w-full shrink-0'>
						<img
							src='/images/hero-mobile.png'
							alt='Khamit Arkayev'
							className='h-full w-full object-cover object-[50%_15%]'
						/>
						{/* subtle bottom fade into the dark text panel */}
						<div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent' />
					</div>

					{/* Text — bottom section, solid dark, no overlap */}
					<div className='flex flex-1 flex-col justify-center bg-black px-6 py-8'>
						<TextBlock t={t} onPlay={() => setOpen(true)} />
					</div>
				</div>

				{/* ─── DESKTOP layout: full-bleed image, text right-aligned ─── */}
				<div className='hidden min-h-[calc(100svh-4rem)] md:block'>
					<div className='absolute inset-0'>
						<img
							src='/images/hero-desktop.png'
							alt='Khamit Arkayev hero'
							className='h-full w-full object-cover object-[24%_18%]'
						/>
						<div className='absolute inset-0 bg-black/15' />
						{/* right-side vignette so text panel is readable */}
						<div className='absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent' />
					</div>

					<Container className='relative z-10'>
						<div className='flex min-h-[calc(100svh-4rem)] items-center justify-end'>
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

/* ─── Shared text block (used on both layouts) ─── */
type TextBlockProps = {
	t: (typeof translations)['en']
	onPlay: () => void
}

function TextBlock({ t, onPlay }: TextBlockProps) {
	return (
		<div>
			<h1 className='text-[2rem] font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-[2.4rem]'>
				{t.name}
			</h1>

			<p className='mt-3 text-[17px] uppercase text-white/55'>
				{t.aliasPrefix}{' '}
				<span className='text-white'>{t.aliasName}</span>
			</p>

			<p className='mt-2 text-[17px] text-white/55'>{t.subtitle}</p>

			<div className='mb-6 mt-2 space-y-1 text-[17px] text-white/55'>
				<p>{t.playingAge}</p>

				<p className='flex items-center gap-1.5'>
					<IoLocationSharp className='shrink-0 text-white/55' />
					<span>{t.country}</span>
				</p>

				<p>{t.languages}</p>
			</div>

			<button
				onClick={onPlay}
				className='inline-flex min-h-12 items-center justify-center rounded-md bg-[#d90416] px-8 text-[17px] font-semibold uppercase text-white transition-opacity hover:opacity-90'
			>
				{t.primaryCta}
			</button>
		</div>
	)
}
