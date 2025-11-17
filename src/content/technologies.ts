import {
	HTML5,
	CSS3,
	JavaScript,
	TypeScript,
	Python,
	React,
	NextJs,
	Astro,
	Gatsby,
	NodeJs,
	ExpressJsLight,
	Redux,
	ReactQuery,
	RadixUI,
	TailwindCSS,
	Git,
	Docker,
	VercelLight,
	Cloudflare,
	Figma,
	Jest,
	Postman,
	Supabase,
	Firebase,
	PostgreSQL,
	GraphQL,
	MongoDB,
	WordPress,
	Sass,
	Azure,
	OpenAI
} from 'developer-icons'
import GsapIcon from '@/assets/icons/technologies/gsap'
import MotionIcon from '@/assets/icons/technologies/motion'
import PayloadcmsIcon from '@/assets/icons/technologies/payloadcms'
import SanityIcon from '@/assets/icons/technologies/sanity'
import HygraphIcon from '@/assets/icons/technologies/hygraph'

export const technologies = [
	// 1. Languages & Standards
	{
		id: 'javascript',
		url: 'https://developer.mozilla.org/docs/Web/JavaScript',
		name: 'JavaScript',
		icon: JavaScript,
		category: 'Languages & Standards'
	},
	{
		id: 'typescript',
		url: 'https://www.typescriptlang.org/',
		name: 'TypeScript',
		icon: TypeScript,
		category: 'Languages & Standards'
	},
	{
		id: 'python',
		url: 'https://www.python.org/',
		name: 'Python',
		icon: Python,
		category: 'Languages & Standards'
	},
	{
		id: 'html',
		url: 'https://developer.mozilla.org/docs/Web/HTML',
		name: 'HTML',
		icon: HTML5,
		category: 'Languages & Standards'
	},
	{
		id: 'css',
		url: 'https://developer.mozilla.org/docs/Web/CSS',
		name: 'CSS',
		icon: CSS3,
		category: 'Languages & Standards'
	},
	{
		id: 'sass',
		url: 'https://sass-lang.com/',
		name: 'Sass',
		icon: Sass,
		category: 'Languages & Standards'
	},

	// 2. Frameworks & Libraries
	{
		id: 'react',
		url: 'https://react.dev/',
		name: 'React',
		icon: React,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'nextjs',
		url: 'https://nextjs.org/',
		name: 'Next.js',
		icon: NextJs,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'astro',
		url: 'https://astro.build/',
		name: 'Astro',
		icon: Astro,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'gatsby',
		url: 'https://www.gatsbyjs.com/',
		name: 'Gatsby',
		icon: Gatsby,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'nodejs',
		url: 'https://nodejs.org/',
		name: 'Node.js',
		icon: NodeJs,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'express',
		url: 'https://expressjs.com/',
		name: 'Express',
		icon: ExpressJsLight,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'redux',
		url: 'https://redux.js.org/',
		name: 'Redux',
		icon: Redux,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'react-query',
		url: 'https://tanstack.com/query/latest',
		name: 'React Query',
		icon: ReactQuery,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'framer-motion',
		url: 'https://www.framer.com/motion/',
		name: 'Framer Motion',
		icon: MotionIcon,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'gsap',
		url: 'https://gsap.com/',
		name: 'GSAP',
		icon: GsapIcon,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'radix-ui',
		url: 'https://www.radix-ui.com/',
		name: 'Radix UI',
		icon: RadixUI,
		category: 'Frameworks & Libraries'
	},
	{
		id: 'tailwindcss',
		url: 'https://tailwindcss.com/',
		name: 'TailwindCSS',
		icon: TailwindCSS,
		category: 'Frameworks & Libraries'
	},

	// 3. Backend, Databases & CMS
	{
		id: 'mongodb',
		url: 'https://www.mongodb.com/',
		name: 'MongoDB',
		icon: MongoDB,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'postgresql',
		url: 'https://www.postgresql.org/',
		name: 'PostgreSQL',
		icon: PostgreSQL,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'supabase',
		url: 'https://supabase.com/',
		name: 'Supabase',
		icon: Supabase,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'firebase',
		url: 'https://firebase.google.com/',
		name: 'Firebase',
		icon: Firebase,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'wordpress',
		url: 'https://wordpress.org/',
		name: 'WordPress',
		icon: WordPress,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'payloadcms',
		url: 'https://payloadcms.com/',
		name: 'PayloadCMS',
		icon: PayloadcmsIcon,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'sanity',
		url: 'https://www.sanity.io/',
		name: 'Sanity',
		icon: SanityIcon,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'hygraph',
		url: 'https://hygraph.com/',
		name: 'Hygraph',
		icon: HygraphIcon,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'graphql',
		url: 'https://graphql.org/',
		name: 'GraphQL',
		icon: GraphQL,
		category: 'Backend, Databases & CMS'
	},
	{
		id: 'openai',
		url: 'https://openai.com/',
		name: 'OpenAI API',
		icon: OpenAI,
		category: 'Backend, Databases & CMS'
	},

	// 4. Tools & Platforms
	{ id: 'git', url: 'https://git-scm.com/', name: 'Git', icon: Git, category: 'Tools & Platforms' },
	{
		id: 'docker',
		url: 'https://www.docker.com/',
		name: 'Docker',
		icon: Docker,
		category: 'Tools & Platforms'
	},
	{
		id: 'jest',
		url: 'https://jestjs.io/',
		name: 'Jest',
		icon: Jest,
		category: 'Tools & Platforms'
	},
	{
		id: 'react-testing-library',
		url: 'https://testing-library.com/docs/react-testing-library/intro/',
		name: 'React Testing Library',
		icon: React,
		category: 'Tools & Platforms'
	},
	{
		id: 'postman',
		url: 'https://www.postman.com/',
		name: 'Postman',
		icon: Postman,
		category: 'Tools & Platforms'
	},
	{
		id: 'vercel',
		url: 'https://vercel.com/',
		name: 'Vercel',
		icon: VercelLight,
		category: 'Tools & Platforms'
	},
	{
		id: 'cloudflare',
		url: 'https://www.cloudflare.com/',
		name: 'Cloudflare',
		icon: Cloudflare,
		category: 'Tools & Platforms'
	},
	{
		id: 'azure',
		url: 'https://azure.microsoft.com/',
		name: 'Azure',
		icon: Azure,
		category: 'Tools & Platforms'
	},
	{
		id: 'figma',
		url: 'https://www.figma.com/',
		name: 'Figma',
		icon: Figma,
		category: 'Tools & Platforms'
	}
]

export const technologiesByCategory = technologies.reduce((acc, tech) => {
	if (!acc[tech.category]) {
		acc[tech.category] = []
	}
	acc[tech.category].push(tech)
	return acc
}, {} as Record<string, typeof technologies>)
