import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'mapbox-gl/dist/mapbox-gl.css'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import LenisProvider from '@/components/lenis-provider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Arek Sroczyk | Front-end Engineer',
	description:
		'Portfolio of Arek Sroczyk, a passionate Front-end Engineer specializing in creating engaging and user-friendly web applications.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<LenisProvider>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</LenisProvider>
		</html>
	)
}
