import { StaticImageData } from 'next/image'

export interface ExperienceItem {
	id: string
	title: string
	logo: StaticImageData
	url?: string
	roles: string[]
	description?: string
	achievements?: string[]
	period: string
}
