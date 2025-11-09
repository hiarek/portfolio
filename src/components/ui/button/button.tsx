import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Send } from 'lucide-react'

interface Props extends ComponentProps<'button'> {
	className?: string
}

const Button: FC<Props> = ({ className = '', children, type = 'button', ...props }) => {
	return (
		<button
			type={type}
			className={twMerge(
				'px-4 py-2 bg-primary rounded-xl font-medium flex items-center gap-2 ',
				className
			)}
			{...props}
		>
			<span>{children}</span>
			<Send className='size-4 stroke-white' />
		</button>
	)
}

export default Button
