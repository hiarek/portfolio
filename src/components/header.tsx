import Image from 'next/image'
import type { FC } from 'react'
import avatarImg from '@/assets/images/avatar.jpg'
import avatarRealImg from '@/assets/images/avatar-real.png'
import ButtonLink from './ui/button/button-link'
import Link from 'next/link'

interface Props {}

const Header: FC<Props> = () => {
	return (
		<header className='mb-16 sm:mb-20 px-4 py-4 sm:px-6'>
			<div className='flex items-center justify-between  max-w-3xl mx-auto '>
				<Link
					href='/'
					title='Home page'
					className='group relative active:scale-[0.98] transition-transform block size-10 rounded-full perspective-[600px]'
				>
					<span className='relative block size-full rounded-full transition-transform duration-500 ease-fast-in-slow-out transform-3d group-hover:rotate-y-180'>
						<Image
							src={avatarImg}
							className='absolute inset-0 size-full rounded-full object-cover backface-hidden'
							alt='Arkadiusz Sroczyk, Arek Sroczyk'
							priority
						/>
						<Image
							src={avatarRealImg}
							className='absolute inset-0 size-full rounded-full object-cover rotate-y-180 backface-hidden'
							alt='Arkadiusz Sroczyk, Arek Sroczyk'
						/>
					</span>
				</Link>

				<ButtonLink href='/contact'>Get in touch</ButtonLink>
			</div>
		</header>
	)
}

export default Header
