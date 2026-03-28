'use client'

import Container from '@/components/layout/Container'
import { useParams } from 'next/navigation'
import { Play, Download } from 'lucide-react'

const translations = {
	en: {
		title: 'Showreel',
		subtitle: 'Selected scenes from film and television projects.',
		mainLabel: 'Main showreel',
		scene1: 'Drama scene',
		scene2: 'Action scene',
		scene3: 'Self tape',
		sceneType1: 'Film',
		sceneType2: 'Action',
		sceneType3: 'Casting',
		downloadCv: 'Download CV',
	},
	ru: {
		title: 'Шоурил',
		subtitle: 'Избранные сцены из кино и телевизионных проектов.',
		mainLabel: 'Основной шоурил',
		scene1: 'Драматическая сцена',
		scene2: 'Экшен сцена',
		scene3: 'Самопроба',
		sceneType1: 'Кино',
		sceneType2: 'Экшен',
		sceneType3: 'Кастинг',
		downloadCv: 'Скачать CV',
	},
	kk: {
		title: 'Шоурил',
		subtitle: 'Фильм және тележобалардан таңдалған көріністер.',
		mainLabel: 'Негізгі шоурил',
		scene1: 'Драма сахнасы',
		scene2: 'Экшен сахнасы',
		scene3: 'Өзіндік проба',
		sceneType1: 'Фильм',
		sceneType2: 'Экшен',
		sceneType3: 'Кастинг',
		downloadCv: 'CV жүктеу',
	},
	ko: {
		title: '쇼릴',
		subtitle: '영화와 영상 프로젝트의 주요 장면 모음입니다.',
		mainLabel: '메인 쇼릴',
		scene1: '드라마 장면',
		scene2: '액션 장면',
		scene3: '셀프 테이프',
		sceneType1: '영화',
		sceneType2: '액션',
		sceneType3: '캐스팅',
		downloadCv: 'CV 다운로드',
	},
} as const

export default function ShowReel() {
	const params = useParams()
	const rawLocale = params?.locale
	const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale

	const t = translations[locale as keyof typeof translations] ?? translations.en

	return (
		<section id='showreel' className='bg-[#0a0a0a] py-20 text-white md:py-28'>
			<Container>
				<div className='mx-auto max-w-6xl'>
					<div className='mb-10 md:mb-14'>
						<h2 className='text-3xl font-semibold tracking-tight md:text-5xl'>
							{t.title}
						</h2>
						<p className='mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base'>
							{t.subtitle}
						</p>
					</div>

					<div className='grid gap-6 lg:grid-cols-[1.6fr_0.9fr]'>
						<div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
							<div className='relative aspect-video'>
								<iframe
									className='h-full w-full'
									src='https://www.youtube.com/embed/VIDEO_ID'
									title='Main Showreel'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
							</div>

							<div className='flex items-center justify-between gap-4 px-5 py-4'>
								<div>
									<p className='text-base font-medium md:text-lg'>
										{t.mainLabel}
									</p>
								</div>

								<a
									href='/cv/hama-actor-cv.pdf'
									target='_blank'
									rel='noreferrer'
									className='inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700'
								>
									<Download className='h-4 w-4' />
									{t.downloadCv}
								</a>
							</div>
						</div>

						<div className='grid gap-4'>
							<div className='group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]'>
								<div className='flex items-start justify-between gap-4'>
									<div>
										<p className='text-sm text-white/45'>{t.sceneType1}</p>
										<h3 className='mt-1 text-lg font-medium'>{t.scene1}</h3>
									</div>

									<div className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5'>
										<Play className='h-4 w-4 fill-white text-white' />
									</div>
								</div>
							</div>

							<div className='group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]'>
								<div className='flex items-start justify-between gap-4'>
									<div>
										<p className='text-sm text-white/45'>{t.sceneType2}</p>
										<h3 className='mt-1 text-lg font-medium'>{t.scene2}</h3>
									</div>

									<div className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5'>
										<Play className='h-4 w-4 fill-white text-white' />
									</div>
								</div>
							</div>

							<div className='group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]'>
								<div className='flex items-start justify-between gap-4'>
									<div>
										<p className='text-sm text-white/45'>{t.sceneType3}</p>
										<h3 className='mt-1 text-lg font-medium'>{t.scene3}</h3>
									</div>

									<div className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5'>
										<Play className='h-4 w-4 fill-white text-white' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
