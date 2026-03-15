import Container from '@/components/layout/Container'
import type { AppLocale } from '@/lib/constants'

type FooterProps = {
	locale: AppLocale
}

const translations = {
	en: {
		rights: 'All rights reserved.',
		text: 'Built for scalable multilingual performance.',
	},
	ru: {
		rights: 'Все права защищены.',
		text: 'Сделано с расчётом на масштабируемую мультиязычную архитектуру.',
	},
	kk: {
		rights: 'Барлық құқықтар қорғалған.',
		text: 'Масштабталатын көптілді архитектура үшін жасалған.',
	},
	ko: {
		rights: '모든 권리 보유.',
		text: '확장 가능한 다국어 아키텍처를 고려해 제작되었습니다.',
	},
} satisfies Record<AppLocale, Record<string, string>>

export default function Footer({ locale }: FooterProps) {
	const t = translations[locale]

	return (
		<footer id='contacts' className='border-t border-white/10 py-10'>
			<Container className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm font-semibold'>Hama Actor</p>
					<p className='mt-2 text-sm text-white/60'>{t.text}</p>
				</div>

				<p className='text-sm text-white/60'>
					© {new Date().getFullYear()} Hama Actor. {t.rights}
				</p>
			</Container>
		</footer>
	)
}
