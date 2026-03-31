'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Container from '@/components/layout/Container'

type Locale = 'en' | 'ru' | 'kk' | 'ko'

type ReelItem = {
	id: string
	videoId: string
	thumbnail: string
	title: string
	category: string
}

function getLocale(value: unknown): Locale {
	if (typeof value !== 'string') return 'en'
	if (value === 'ru' || value === 'kk' || value === 'ko') return value
	return 'en'
}

function SmartVimeo({
	videoId,
	thumbnail,
	title,
	priority = false,
}: {
	videoId: string
	thumbnail: string
	title: string
	priority?: boolean
}) {
	const [hasLoaded, setHasLoaded] = useState(false)

	return (
		<div className='group relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl'>
			{!hasLoaded ? (
				<button
					type='button'
					onClick={() => setHasLoaded(true)}
					className='relative h-full w-full cursor-pointer text-left'
					aria-label={title}
				>
					<Image
						src={thumbnail}
						alt={title}
						fill
						priority={priority}
						className='object-cover transition-transform duration-500 group-hover:scale-105'
					/>

					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-colors duration-300 group-hover:from-black/85 group-hover:via-black/35 group-hover:to-black/20' />

					<div className='absolute inset-0 flex items-center justify-center'>
						<div className='flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black'>
							<svg
								fill='currentColor'
								viewBox='0 0 24 24'
								className='ml-1 h-10 w-10'
							>
								<path d='M8 5v14l11-7z' />
							</svg>
						</div>
					</div>
				</button>
			) : (
				<iframe
					src={`https://player.vimeo.com/video/${videoId}?autoplay=1&dnt=1`}
					allow='autoplay; fullscreen; picture-in-picture'
					className='absolute inset-0 h-full w-full'
					title={title}
					allowFullScreen
				/>
			)}
		</div>
	)
}

export default function ShowReel() {
	const params = useParams()
	const locale = getLocale(params?.locale)

	const translations = {
		en: {
			eyebrow: 'Selected scenes',
			title: 'Showreel',
			subtitle:
				'A short selection for casting: main showreel, action reel and drama reel.',
			main: {
				title: 'Main Showreel',
				category: 'General Portfolio',
			},
			action: {
				title: 'Action Showreel',
				category: 'Martial Arts / Stunts',
			},
			drama: {
				title: 'Drama Showreel',
				category: 'Acting / Dialogue',
			},
		},
		ru: {
			eyebrow: 'Избранные сцены',
			title: 'Шоурил',
			subtitle:
				'Короткая подборка для кастинга: основной шоурил, экшен и драматический шоурил.',
			main: {
				title: 'Основной шоурил',
				category: 'Общее портфолио',
			},
			action: {
				title: 'Экшен шоурил',
				category: 'Боевые искусства / Трюки',
			},
			drama: {
				title: 'Драматический шоурил',
				category: 'Актёрская игра / Диалоги',
			},
		},
		kk: {
			eyebrow: 'Таңдалған көріністер',
			title: 'Шоурил',
			subtitle:
				'Кастингке арналған қысқа жинақ: негізгі шоурил, экшен және драмалық шоурил.',
			main: {
				title: 'Негізгі шоурил',
				category: 'Жалпы портфолио',
			},
			action: {
				title: 'Экшен шоурил',
				category: 'Жекпе-жек өнері / Трюктер',
			},
			drama: {
				title: 'Драмалық шоурил',
				category: 'Актёрлік ойын / Диалогтар',
			},
		},
		ko: {
			eyebrow: '주요 장면',
			title: '쇼릴',
			subtitle:
				'캐스팅을 위한 짧은 영상 모음: 메인 쇼릴, 액션 쇼릴, 드라마 쇼릴.',
			main: {
				title: '메인 쇼릴',
				category: '전체 포트폴리오',
			},
			action: {
				title: '액션 쇼릴',
				category: '무술 / 스턴트',
			},
			drama: {
				title: '드라마 쇼릴',
				category: '연기 / 대사',
			},
		},
	} as const

	const t = translations[locale]

	// Пока везде стоит твой Vimeo placeholder.
	// Потом просто замени videoId у action/drama на свои реальные ID.
	const reels: {
		main: ReelItem
		action: ReelItem
		drama: ReelItem
	} = {
		main: {
			id: 'main',
			videoId: '222087977',
			thumbnail: '/thumbnails/showreel-main.jpg',
			title: t.main.title,
			category: t.main.category,
		},
		action: {
			id: 'action',
			videoId: '222087977',
			thumbnail: '/thumbnails/showreel-action.jpg',
			title: t.action.title,
			category: t.action.category,
		},
		drama: {
			id: 'drama',
			videoId: '222087977',
			thumbnail: '/thumbnails/showreel-drama.jpg',
			title: t.drama.title,
			category: t.drama.category,
		},
	}

	return (
		<section id='showreel' className='bg-black py-20 text-white md:py-28'>
			<Container>
				<div className='mx-auto max-w-6xl'>
					<div className='mb-10 md:mb-14'>
						<p className='mb-3 text-xs uppercase tracking-[0.25em] text-red-500'>
							{t.eyebrow}
						</p>

						<h2 className='text-3xl font-semibold tracking-tight md:text-5xl'>
							{t.title}
						</h2>

						<p className='mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base'>
							{t.subtitle}
						</p>
					</div>

					<div className='grid gap-6 lg:grid-cols-[1.5fr_0.9fr]'>
						<div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4'>
							<SmartVimeo
								videoId={reels.main.videoId}
								thumbnail={reels.main.thumbnail}
								title={reels.main.title}
								priority
							/>

							<div className='px-1 pb-1 pt-4'>
								<p className='text-xs uppercase tracking-[0.2em] text-red-500'>
									{reels.main.category}
								</p>
								<h3 className='mt-2 text-xl font-semibold md:text-2xl'>
									{reels.main.title}
								</h3>
							</div>
						</div>

						<div className='grid gap-6'>
							<div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3'>
								<SmartVimeo
									videoId={reels.action.videoId}
									thumbnail={reels.action.thumbnail}
									title={reels.action.title}
								/>

								<div className='px-1 pb-1 pt-4'>
									<p className='text-[11px] uppercase tracking-[0.2em] text-red-500'>
										{reels.action.category}
									</p>
									<h3 className='mt-2 text-lg font-semibold'>
										{reels.action.title}
									</h3>
								</div>
							</div>

							<div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3'>
								<SmartVimeo
									videoId={reels.drama.videoId}
									thumbnail={reels.drama.thumbnail}
									title={reels.drama.title}
								/>

								<div className='px-1 pb-1 pt-4'>
									<p className='text-[11px] uppercase tracking-[0.2em] text-red-500'>
										{reels.drama.category}
									</p>
									<h3 className='mt-2 text-lg font-semibold'>
										{reels.drama.title}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
