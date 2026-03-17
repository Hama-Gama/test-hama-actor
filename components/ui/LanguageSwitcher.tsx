'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { locales, localeCookieName } from '@/lib/i18n'
import type { AppLocale } from '@/lib/constants'

type Props = {
	locale: AppLocale
}

export default function LanguageSwitcher({ locale }: Props) {
	const [open, setOpen] = useState(false)
	const rootRef = useRef<HTMLDivElement | null>(null)

	const handleChange = (nextLocale: AppLocale) => {
		document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!rootRef.current) return
			if (!rootRef.current.contains(event.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div ref={rootRef} className='relative'>
			<button
				type='button'
				onClick={() => setOpen(prev => !prev)}
				className='flex items-center gap-2 rounded-md border border-black/20 px-3 py-1 text-xs uppercase text-black'
				aria-expanded={open}
				aria-haspopup='menu'
			>
				<span className='text-sm leading-none'>🌐</span>
				<span>{locale}</span>
			</button>

			<div
				className={`absolute right-0 mt-2 w-20 origin-top-right rounded-md border border-black/10 bg-white shadow-lg transition-all duration-200 ${
					open
						? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
						: 'pointer-events-none -translate-y-1 scale-95 opacity-0'
				}`}
			>
				{locales.map(item => (
					<Link
						key={item}
						href={`/${item}`}
						onClick={() => handleChange(item)}
						className={`block px-3 py-2 text-xs uppercase transition hover:bg-black hover:text-white ${
							item === locale ? 'bg-black text-white' : 'text-black'
						}`}
					>
						{item}
					</Link>
				))}
			</div>
		</div>
	)
}
