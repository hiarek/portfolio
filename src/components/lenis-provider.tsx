'use client'

import { type FC, type ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface Props {
	children: ReactNode
}

const LenisProvider: FC<Props> = ({ children }) => {
	const lenisRef = useRef<Lenis | null>(null)

	useEffect(() => {
		// Initialize Lenis
		lenisRef.current = new Lenis({
			duration: 0.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
			infinite: false
		})

		// Animation frame loop
		function raf(time: number) {
			lenisRef.current?.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Cleanup
		return () => {
			lenisRef.current?.destroy()
		}
	}, [])

	return <>{children}</>
}

export default LenisProvider
