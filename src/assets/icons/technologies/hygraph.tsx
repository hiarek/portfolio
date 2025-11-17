import type { ComponentProps, FC } from 'react'

interface Props extends ComponentProps<'svg'> {}

const HygraphIcon: FC<Props> = (props) => {
	return (
		<svg
			width='16'
			height='27'
			viewBox='0 0 16 27'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M12.7465 3.59984L9.55996 5.4L6.37347 7.19967L3.18649 8.99984V19.7998L6.37347 18.0002L9.55947 16.2V12.6002L6.37347 14.3998V10.8L9.55947 8.99984L12.7465 7.20016V18.0002L9.55996 19.7998L6.37347 21.6L3.186 23.4002L0 25.1998L3.18649 27L6.37347 25.1998L9.55947 23.4002L12.7469 21.6L15.9339 19.8003V1.79967L12.7465 0V3.59984Z' />
		</svg>
	)
}

export default HygraphIcon
