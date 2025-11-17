import { ExperienceItem } from '@/utils/types'
import selfEmployedImg from '@/assets/images/avatar.jpg'
import dswCollegeImg from '@/assets/images/education/dsw.jpg'

export const educationItems: ExperienceItem[] = [
	{
		id: 'self-taught-education',
		title: 'Self-Taught & Always Learning',
		logo: selfEmployedImg,
		url: 'https://areksroczyk.com/',
		roles: ['A way of living'],
		achievements: [
			'Driven by curiosity, not curriculum.',
			'Learning through <strong class="text-white/90">building, breaking, and experimenting.</strong>',
			'Believer in <strong class="text-white/90">interest-based education</strong> and lifelong growth.'
		],
		period: '08.2003 - Present • 22+ years'
	},
	{
		id: 'dsw-college',
		title: 'Bachelor of Computer Science',
		logo: dswCollegeImg,
		url: 'https://www.dsw.edu.pl/',
		roles: ['Cloud Application and System Engineer'],
		description:
			'Currently studying Computer Science with a focus on Cloud Applications & Systems Engineering. Building strong technical foundations in <strong class="text-white/90">software development, cloud systems, and modern web technologies.</strong>',
		period: '09.2023 - Present • 2+ years'
	}
]
