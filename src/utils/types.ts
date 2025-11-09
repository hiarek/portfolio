import { StaticImageData } from 'next/image'

export interface WorkItem {
	id: string
	companyName: string
	companyLogo: StaticImageData
	companyUrl?: string
	roles: string[]
	description?: string
	achievements?: string[]
	period: string
}
