import { ArrowLeft, MailWarning } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='px-4 sm:px-6 py-16'>
			<div className='grid max-w-3xl grid-cols-2 gap-3 mx-auto sm:grid-cols-[1fr_1fr_2fr]'>
				<div className='relative col-span-2 px-4 py-12 text-center rounded-3xl bg-primary sm:col-span-3 md:p-16'>
					<div className='px-4 py-1.5 rounded-t-xl bg-primary absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2'>
						<div className='bg-red relative rounded-full size-2'>
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 animate-ping rounded-full bg-red/50'></div>
						</div>
						<div className='uppercase font-mono whitespace-nowrap  tracking-wider font-medium text-white/25 text-[11px] sm:text-xs'>
							Lost in navigation
						</div>
					</div>

					<p className='text-3xl font-mono tracking-widest text-white/50 mb-2 uppercase'>404</p>
					<h1 className='text-3xl mb-3 font-semibold leading-tight text-balance sm:text-4xl md:text-5xl tracking-[-0.04em]'>
						Page not found
					</h1>
					<p className='max-w-[42ch] mx-auto mb-8 text-sm text-white/75 sm:text-base text-balance sm:text-pretty'>
						I couldn&apos;t find the page you were after. Maybe it was refactored, migrated, or
						never shipped?
					</p>

					<div className='flex flex-wrap justify-center'>
						<Link
							href='/'
							className='inline-flex items-center gap-1.5 px-5 py-1.5 font-medium text-white/75 transition-transform group w-max hover:text-white'
						>
							<ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
							<span>Back home</span>
						</Link>
						<Link
							href='/contact'
							className='inline-flex items-center gap-2 px-5 py-1.5 font-medium transition-colors rounded-xl bg-white/5 hover:bg-white/15'
						>
							<MailWarning className='size-4 stroke-white/75' />
							<span>Report this</span>
						</Link>
					</div>
				</div>

				{/* <div className='flex flex-col justify-between col-span-2 gap-2 p-4 rounded-3xl sm:col-span-1 bg-primary'>
					<div className='flex items-center justify-between text-white/60'>
						<span className='text-xs font-mono uppercase'>Tip</span>
						<Compass className='size-4' />
					</div>
					<p className='text-sm text-white/70'>
						Double-check the URL or jump back to the homepage.
					</p>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-transform group w-max hover:text-white'
					>
						<ArrowLeft className='size-4 transition-transform group-hover:-translate-x-1' />
						<span>Back home</span>
					</Link>
				</div> */}

				{/* <div className='relative flex flex-col justify-between col-span-2 p-4 rounded-3xl sm:col-span-1 bg-primary'>
					<div className='flex items-center justify-between text-white/60'>
						<span className='text-xs font-mono uppercase'>Maybe try</span>
						<Undo2 className='size-4' />
					</div>
					<p className='mt-2 text-sm text-white/70'>
						Use the main navigation or search to find the right section.
					</p>
					<Link
						href='mailto:hello@areksroczyk.com'
						className='inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white'
					>
						<MailWarning className='size-4' />
						<span>Need a direct contact?</span>
					</Link>
				</div> */}

				{/* <div className='col-span-2 p-4 rounded-3xl sm:col-span-3 bg-primary'>
					<div className='grid items-start gap-4 sm:grid-cols-[auto_1fr]'>
						<div className='flex items-center justify-center rounded-2xl size-16 bg-primary-800/50'>
							<Compass className='size-7 text-white/70' />
						</div>
						<div>
							<h2 className='text-lg font-semibold sm:text-xl'>Let&apos;s find what you need</h2>
							<p className='mt-1 text-sm text-white/60 sm:text-base'>
								Jump into the work I&apos;m currently shipping or reach out if you need a hand with
								your next idea.
							</p>
							<div className='flex flex-wrap gap-3 mt-6'>
								<ButtonLink href='/contact' className='bg-white/5 outline-white/5'>
									Get in touch
								</ButtonLink>

								<Link
									href='/'
									className='inline-flex items-center gap-1.5 px-5 py-1.5 font-medium text-white/75 transition-transform group w-max hover:text-white'
								>
									<span>Back home</span>
									<ArrowRight className='size-4 transition-transform group-hover:-translate-x-1' />
								</Link>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}
