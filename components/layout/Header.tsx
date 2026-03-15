'use client'

import Link from 'next/link'
import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'
import { locales, localeCookieName } from '@/lib/i18n'

type HeaderProps = {
	locale: AppLocale
}

const translations = {
	en: {
		logo: 'Hama Actor',
		home: 'Home',
		showreel: 'Showreel',
		about: 'About',
		contacts: 'Contacts',
		skip: 'Skip to content',
	},
	ru: {
		logo: 'Hama Actor',
		home: 'Главная',
		showreel: 'Шоурил',
		about: 'Обо мне',
		contacts: 'Контакты',
		skip: 'Перейти к контенту',
	},
	kk: {
		logo: 'Hama Actor',
		home: 'Басты бет',
		showreel: 'Шоу-рил',
		about: 'Мен туралы',
		contacts: 'Байланыс',
		skip: 'Мазмұнға өту',
	},
	ko: {
		logo: 'Hama Actor',
		home: '홈',
		showreel: '쇼릴',
		about: '소개',
		contacts: '연락처',
		skip: '본문으로 건너뛰기',
	},
} satisfies Record<AppLocale, Record<string, string>>

export default function Header({ locale }: HeaderProps) {
	const t = translations[locale]

	const handleLocaleChange = (nextLocale: AppLocale) => {
		document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`
	}

	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md'>
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black'
			>
				{t.skip}
			</a>

			<Container
				as='nav'
				className='flex h-16 items-center justify-between'
				aria-label='Primary'
			>
				<Link
					href={`/${locale}`}
					className='text-sm font-semibold uppercase tracking-[0.24em]'
				>
					{t.logo}
				</Link>

				<div className='hidden items-center gap-6 md:flex'>
					<a
						href='#hero'
						className='text-sm text-white/80 transition hover:text-white'
					>
						{t.home}
					</a>
					<a
						href='#showreel'
						className='text-sm text-white/80 transition hover:text-white'
					>
						{t.showreel}
					</a>
					<a
						href='#about'
						className='text-sm text-white/80 transition hover:text-white'
					>
						{t.about}
					</a>
					<a
						href='#contacts'
						className='text-sm text-white/80 transition hover:text-white'
					>
						{t.contacts}
					</a>
				</div>

				<div className='flex items-center gap-2'>
					{locales.map(item => (
						<Link
							key={item}
							href={`/${item}`}
							onClick={() => handleLocaleChange(item)}
							className={`rounded-full border px-3 py-1 text-xs uppercase transition ${
								item === locale
									? 'border-white/30 bg-white text-black'
									: 'border-white/15 text-white/75 hover:border-white/30 hover:text-white'
							}`}
						>
							{item}
						</Link>
					))}
				</div>
			</Container>
		</header>
	)
}
