import { ArrowUpRight } from 'lucide-react'
import { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ComponentProps<'div'> {
	className?: string
}

const AnimatedArrowButton: FC<Props> = ({ className, ...props }) => {
	return (
		<div
			className={twMerge(
				'rounded-full cursor-pointer bg-primary-800 p-2 transition-transform ease-fast-in-slow-out duration-300 group-hover:scale-110',
				className
			)}
			{...props}
		>
			<div className='relative overflow-hidden'>
				<ArrowUpRight className='size-5 group-hover:scale-75 transition-transform ease-fast-in-slow-out duration-400 group-hover:-translate-y-full group-hover:translate-x-full' />
				<ArrowUpRight className='size-5 transition-transform ease-fast-in-slow-out absolute group-hover:translate-0 top-0 left-0 -translate-x-full translate-y-full duration-400' />
			</div>
		</div>
	)
}

export default AnimatedArrowButton
