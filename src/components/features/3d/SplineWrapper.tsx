'use client'

import Spline from '@splinetool/react-spline'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Application } from '@splinetool/runtime'

gsap.registerPlugin(ScrollTrigger)

interface SplineWrapperProps {
    scene: string
    className?: string
    onLoad?: (splineApp: Application) => void
}

export function SplineWrapper({ scene, className, onLoad }: SplineWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)

    function handleLoad(splineApp: Application) {
        setIsLoading(false)
        if (onLoad) onLoad(splineApp)
    }

    // Animasi awal ketika aset berhasil dimuat (sesuai standar 3D UX)
    useGSAP(() => {
        if (isLoading) return

        gsap.fromTo(containerRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
        )
    }, { scope: containerRef, dependencies: [isLoading] })

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className || ''}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 transition-opacity duration-1000">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        </div>
                        <span className="text-white/50 text-xs font-mono tracking-widest uppercase">Memuat Entitas</span>
                    </div>
                </div>
            )}
            <Spline
                scene={scene}
                onLoad={handleLoad}
                className="w-full h-full pointer-events-auto"
            />
        </div>
    )
}
