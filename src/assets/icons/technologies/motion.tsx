import type { ComponentProps, FC } from 'react'

interface Props extends ComponentProps<'svg'> {}

const MotionIcon: FC<Props> = (props) => {
	return (
		<svg
			id='svg12411545518'
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			viewBox='0 0 24 9'
			fill='#fff312'
			{...props}
		>
			<path d='M9.1,0l-4.7,9H0L3.7,2c.6-1.1,2-2,3.2-2h2.2ZM19.7,2.2c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2-1,2.2-2.2,2.2-2.2-1-2.2-2.2ZM9.9,0h4.3l-4.7,9h-4.3L9.9,0ZM15,0h4.3l-3.7,7c-.6,1.1-2,2-3.2,2h-2.2L15,0Z' />
		</svg>
	)
}

export default MotionIcon
