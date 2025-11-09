import Image from 'next/image'
import avatarImg from '@/assets/images/avatar-real.png'
import XTwitterIcon from '@/assets/icons/socials/x-twitter'
import { ArrowUpRight } from 'lucide-react'
import LinkedinIcon from '@/assets/icons/socials/linkedin'
import { linkedInUrl, xTwitterUrl } from '@/content/constants'
import WorkCard from '@/components/work-card'
import { workItems } from '@/content/work'

export default function Home() {
	return (
		<section className='px-4 sm:px-6 '>
			<div className='grid grid-cols-2 sm:grid-cols-[1fr_1fr_2fr] gap-3 max-w-3xl mx-auto'>
				<div className='bg-primary relative col-span-2 sm:col-span-3 rounded-3xl px-4 py-6 sm:p-10 w-full'>
					<div className='px-4 py-1.5 rounded-t-xl bg-primary absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2'>
						<div className='bg-green relative rounded-full size-2'>
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 animate-ping rounded-full bg-green/25'></div>
						</div>
						<div className='uppercase font-mono whitespace-nowrap  tracking-wider font-medium text-white/25 text-[11px] sm:text-xs'>
							Building{' '}
							<a
								href='https://jakaszkola.pl/'
								className='hover:text-white/50 transition-colors'
								target='_blank'
								rel='nofollow noopenner norefferer'
							>
								jakaszkola.pl
							</a>
						</div>
					</div>

					<figure className='flex flex-col items-center mb-3'>
						<Image
							src={avatarImg}
							priority={true}
							className='size-24 md:size-28 rounded-full mb-3'
							alt='Arkadiusz Sroczyk, Arek Sroczyk, Front-end Developer, Engineer, Full-stack Developer, Software Engineer'
						/>

						<figcaption className='uppercase font-mono px-3 rounded-full py-0.5 tracking-widest text-white/50 text-xs'>
							Arek Sroczyk
						</figcaption>
					</figure>

					<h1 className='text-center text-balance sm:text-4xl md:text-[40px] leading-tight text-3xl font-semibold tracking-[-0.04em] mb-3'>
						Developer. Engineer. Full-time Builder 🚀
					</h1>
					<p className='text-white/75 max-w-[40ch] mx-auto text-balance text-center text-[15px] sm:text-base'>
						I build software products people love and help brands get more leads. And help brands
						get more leads.
					</p>
				</div>

				<a
					href={xTwitterUrl}
					target='_blank'
					aria-label='Arek Sroczyk X social account'
					rel='nofollow noopener noreferrer'
					className='aspect-square flex items-center outline-2 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color] active:outline-primary-800 justify-center rounded-3xl bg-primary relative group'
				>
					<div className='bg-black p-3 rounded-xl '>
						<XTwitterIcon className='size-8' />
					</div>

					<button className='absolute left-3 transition-transform sm:col-span-1 ease-fast-in-slow-out duration-300 group-hover:scale-110 bottom-3 rounded-full bg-primary-800 p-2'>
						<div className='relative overflow-hidden'>
							<ArrowUpRight className='size-5 group-hover:scale-75 transition-transform ease-fast-in-slow-out duration-400 group-hover:-translate-y-full group-hover:translate-x-full' />
							<ArrowUpRight className='size-5 transition-transform ease-fast-in-slow-out absolute group-hover:translate-0 top-0 left-0 -translate-x-full translate-y-full duration-400' />
						</div>
					</button>
				</a>

				<a
					href={linkedInUrl}
					target='_blank'
					rel='nofollow noopener noreferrer'
					aria-label='Arek Sroczyk LinkedIn account'
					className='aspect-square flex items-center outline-2 sm:col-span-1 active:outline-primary-800 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color] justify-center rounded-3xl bg-primary relative group'
				>
					<div className='bg-[#0E76A8] p-3 rounded-xl '>
						<LinkedinIcon className='size-8' />
					</div>

					<button className='absolute left-3 transition-transform ease-fast-in-slow-out duration-300 group-hover:scale-110 bottom-3 rounded-full bg-primary-800 p-2'>
						<div className='relative overflow-hidden'>
							<ArrowUpRight className='size-5 group-hover:scale-75 transition-transform ease-fast-in-slow-out duration-400 group-hover:-translate-y-full group-hover:translate-x-full' />
							<ArrowUpRight className='size-5 transition-transform ease-fast-in-slow-out absolute group-hover:translate-0 top-0 left-0 -translate-x-full translate-y-full duration-400' />
						</div>
					</button>
				</a>

				<div className='rounded-3xl bg-primary col-span-2 sm:col-span-1 p-4'></div>

				{workItems.map((item) => (
					<WorkCard key={item.id} item={item} className='col-span-2 sm:col-span-3' />
				))}
			</div>
		</section>
	)
}
