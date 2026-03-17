'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

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
	const [isOpen, setOpen] = useState(false)

	const handleNavClick = () => {
		setOpen(false)
	}

	return (
		<header className='sticky top-0 z-50 border-b border-black/10 bg-white'>
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white'
			>
				{t.skip}
			</a>

			<Container
				as='nav'
				className='flex h-16 items-center justify-between'
				aria-label='Primary'
			>
				<Link href={`/${locale}`} onClick={handleNavClick}>
					<Image
						src='/logo.png'
						alt={t.logo}
						width={40}
						height={40}
						className='h-10 w-10 rounded-full object-cover shadow-2xl'
						priority
					/>
				</Link>

				<div className='hidden items-center gap-6 md:flex'>
					<a href='#hero' className='text-sm text-black/70 hover:text-black'>
						{t.home}
					</a>
					<a
						href='#showreel'
						className='text-sm text-black/70 hover:text-black'
					>
						{t.showreel}
					</a>
					<a href='#about' className='text-sm text-black/70 hover:text-black'>
						{t.about}
					</a>
					<a
						href='#contacts'
						className='text-sm text-black/70 hover:text-black'
					>
						{t.contacts}
					</a>
				</div>

				<div className='flex items-center gap-6'>
					<LanguageSwitcher locale={locale} />

					<div className='md:hidden'>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							size={22}
							color='#000000'
							label='Show menu'
							rounded
						/>
					</div>
				</div>
			</Container>

			{isOpen && (
				<div className='absolute left-0 top-full z-50 w-full border-t border-black/10 bg-white md:hidden'>
					<Container className='py-4'>
						<div className='flex flex-col gap-4'>
							<a
								href='#hero'
								onClick={handleNavClick}
								className='text-base text-black'
							>
								{t.home}
							</a>
							<a
								href='#showreel'
								onClick={handleNavClick}
								className='text-base text-black'
							>
								{t.showreel}
							</a>
							<a
								href='#about'
								onClick={handleNavClick}
								className='text-base text-black'
							>
								{t.about}
							</a>
							<a
								href='#contacts'
								onClick={handleNavClick}
								className='text-base text-black'
							>
								{t.contacts}
							</a>
						</div>
					</Container>
				</div>
			)}
		</header>
	)
}
