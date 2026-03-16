import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps<T extends ElementType = 'div'> = {
	children: ReactNode
	className?: string
	as?: T
}

export default function Container<T extends ElementType = 'div'>({
	children,
	className,
	as,
}: ContainerProps<T>) {
	const Tag = as ?? 'div'

	return (
		<Tag
			className={cn(
				'mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8',
				className,
			)}
		>
			{children}
		</Tag>
	)
}
