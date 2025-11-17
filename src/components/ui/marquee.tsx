import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: React.ReactNode
	className?: string
	reverse?: boolean
	pauseOnHover?: boolean
}

const Marquee: FC<Props> = ({ children, className, reverse = false, pauseOnHover = false }) => {
	return (
		<div
			className={twMerge('group flex overflow-hidden gap-2 [--marquee-duration:40s]', className)}
		>
			<div
				className={twMerge(
					'flex shrink-0 gap-2 animate-marquee',
					reverse && '[animation-direction:reverse]',
					pauseOnHover && 'group-hover:[animation-play-state:paused]'
				)}
			>
				{children}
			</div>
			<div
				className={twMerge(
					'flex shrink-0 gap-2 animate-marquee',
					reverse && '[animation-direction:reverse]',
					pauseOnHover && 'group-hover:[animation-play-state:paused]'
				)}
				aria-hidden='true'
			>
				{children}
			</div>
		</div>
	)
}

export default Marquee
