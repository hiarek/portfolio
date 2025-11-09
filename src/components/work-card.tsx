import Image from 'next/image'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { WorkItem } from '@/utils/types'
import { FC } from 'react'

type Props = {
	item: WorkItem
	className?: string
}

const WorkCard: FC<Props> = ({ item, className }) => {
	const { companyName, companyLogo, companyUrl, roles, description, achievements, period } = item

	const content = (
		<>
			<div className='flex items-center gap-3 mb-4'>
				<Image
					src={companyLogo}
					alt={`${companyName} - ${roles.join(', ')} - Arkadiusz Sroczyk`}
					className='rounded-2xl size-14'
				/>
				<div>
					<h3 className='text-lg font-semibold text-balance tracking-[-0.04em] flex items-center gap-2 mb-1.5 leading-tight'>
						{companyName}
					</h3>

					<div className='flex flex-wrap gap-1'>
						{roles.map((role, index) => (
							<span
								key={index}
								className='bg-primary-800 font-normal text-xs rounded-full px-2 py-0.5 text-white/75'
							>
								{role}
							</span>
						))}
					</div>
				</div>
			</div>

			{description && <p className='text-white/75 text-[15px] mb-4 text-pretty'>{description}</p>}

			{achievements && achievements.length > 0 && (
				<ul className='text-white/75 text-sm mb-6 text-pretty space-y-1.5'>
					{achievements.map((achievement, index) => (
						<li key={index} className='flex items-start gap-2'>
							<div className='bg-primary-800 rounded-full p-1'>
								<Check className='size-3' />
							</div>
							<p dangerouslySetInnerHTML={{ __html: achievement }} />
						</li>
					))}
				</ul>
			)}

			<p className='font-mono text-white/50 text-xs tracking-wider uppercase'>{period}</p>
		</>
	)

	const baseClassName = 'rounded-3xl bg-primary p-4 gap-4'

	if (companyUrl) {
		return (
			<a
				href={companyUrl}
				target='_blank'
				rel='noreferrer noopener nofollow'
				className={twMerge(
					'block outline-2 outline-primary hover:outline-primary-800 transition-[outline-color_transform] active:outline-primary-800 active:scale-[0.98]',
					baseClassName,
					className
				)}
			>
				{content}
			</a>
		)
	}

	return <div className={twMerge(baseClassName, className)}>{content}</div>
}

export default WorkCard
