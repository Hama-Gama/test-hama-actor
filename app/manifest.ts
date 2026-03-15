import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Hama Actor',
		short_name: 'Hama Actor',
		description: 'Multilingual actor portfolio website',
		start_url: '/',
		display: 'standalone',
		background_color: '#0a0a0a',
		theme_color: '#0a0a0a',
		lang: 'en',
		icons: [
			{
				src: '/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
