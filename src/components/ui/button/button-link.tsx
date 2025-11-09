import type { ComponentProps, FC } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Send } from 'lucide-react'

interface Props extends Omit<ComponentProps<'a'>, 'href'> {
	href: string
	className?: string
	internal?: boolean
}

const ButtonLink: FC<Props> = ({ className = '', children, internal = true, href, ...props }) => {
	const classes = twMerge(
		'px-5 py-1.5 bg-primary w-max rounded-xl group active:scale-[0.98] active:bg-white/3 active:outline-primary-800 outline-2 outline-primary hover:outline-white/5 hover:bg-white/3 transition-[transform_background-color_outline-color] font-medium flex items-center gap-2',
		className
	)

	const content = (
		<>
			<span>{children}</span>
			<Send className='size-4 stroke-white group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-12 transition-transform ease-fast-in-slow-out duration-400' />
		</>
	)

	if (internal) {
		return (
			<Link href={href} className={classes} {...props}>
				{content}
			</Link>
		)
	}

	return (
		<a href={href} className={classes} {...props}>
			{content}
		</a>
	)
}

export default ButtonLink
