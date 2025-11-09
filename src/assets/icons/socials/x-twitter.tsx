import type { ComponentProps, FC } from 'react'

interface Props extends ComponentProps<'svg'> {}

const XTwitterIcon: FC<Props> = (props) => {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g fill='none' stroke='currentColor' strokeWidth='1.5'>
				<path d='M16.82 20.768L3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232Z' />
				<path strokeLinecap='round' d='M20 3L4 21' />
			</g>
		</svg>
	)
}

export default XTwitterIcon
