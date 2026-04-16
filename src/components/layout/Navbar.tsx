'use client'

import { useEffect, useState } from 'react'

const navLinks = [
    { label: 'About', href: '#tentang' },
    { label: 'Expertise', href: '#keahlian' },
    { label: 'Portfolio', href: '#portofolio' },
    { label: 'Web Dev', href: '#webdev' },
    { label: 'Experience', href: '#pengalaman' },
    { label: 'Contact', href: '#kontak' },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)

            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
            setScrollProgress(progress)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/8 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                {/* Scroll Progress Bar */}
                <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-none z-50" style={{ width: `${scrollProgress}%` }} />
                <div className="max-w-6xl mx-auto px-6 md:px-14 flex items-center justify-between">
                    {/* Logo / Name */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-white font-bold text-sm tracking-widest uppercase hover:text-white/70 transition-colors"
                    >
                        Agung<span className="text-white/25">.</span>
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map(link => (
                            <button
                                key={link.href}
                                onClick={() => handleNav(link.href)}
                                className="text-white/40 hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA */}
                    <button
                        onClick={() => handleNav('#kontak')}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all text-[10px] font-mono tracking-widest uppercase"
                    >
                        Hire Me
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="md:hidden flex flex-col gap-1.5 p-1"
                        aria-label="Menu"
                    >
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
                    {navLinks.map(link => (
                        <button
                            key={link.href}
                            onClick={() => handleNav(link.href)}
                            className="text-white/60 hover:text-white font-mono text-xs tracking-widest uppercase transition-colors text-center"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNav('#kontak')}
                        className="mt-4 px-8 py-3 rounded-full border border-white/20 text-white/70 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                    >
                        Hire Me →
                    </button>
                </div>
            )}
        </>
    )
}
