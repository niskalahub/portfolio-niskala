'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PortfolioAnimator({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from('.hero-word', {
            y: 100,
            opacity: 0,
            rotateZ: 4,
            stagger: 0.12,
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.4
        })

        gsap.to('.hero-layer', {
            scrollTrigger: {
                trigger: '.hero-layer',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2,
            },
            yPercent: 35,
            opacity: 0,
            scale: 0.96,
            ease: 'none'
        })

        gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
            gsap.from(elem, {
                scrollTrigger: { trigger: elem, start: 'top 88%' },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative w-full bg-black font-sans text-white">
            {children}
        </div>
    )
}
