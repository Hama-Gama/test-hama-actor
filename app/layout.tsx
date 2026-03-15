import type { ReactNode } from 'react'
import './globals.css'

export const viewport = {
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body>{children}</body>
		</html>
	)
}
