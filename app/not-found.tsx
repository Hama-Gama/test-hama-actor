import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex min-h-screen items-center justify-center bg-black px-6 text-white'>
			<div className='max-w-md text-center'>
				<h1 className='text-4xl font-semibold'>404</h1>
				<p className='mt-4 text-white/70'>Page not found.</p>
				<Link
					href='/en'
					className='mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/8'
				>
					Go to home
				</Link>
			</div>
		</main>
	)
}
