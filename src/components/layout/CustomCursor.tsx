'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', updatePosition)

        const addListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, [role="button"]')
            interactables.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter)
                el.addEventListener('mouseleave', handleMouseLeave)
            })
        }
        setTimeout(addListeners, 1000)

        return () => {
            window.removeEventListener('mousemove', updatePosition)
            const interactables = document.querySelectorAll('a, button, input, textarea, [role="button"]')
            interactables.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    // Don't render on SSR – prevents hydration mismatch
    if (!mounted) return null

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div
                className={`relative flex items-center justify-center rounded-full bg-white transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'w-16 h-16' : 'w-4 h-4'
                    }`}
            />
        </div>
    )
}
