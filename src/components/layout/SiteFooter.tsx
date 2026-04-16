export function SiteFooter() {
    const year = new Date().getFullYear()

    const links = [
        { label: 'GitHub', href: 'https://github.com/herzxxvi' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/herzmwnagung/' },
        { label: 'Instagram', href: 'https://www.instagram.com/xxviherz/' },
        { label: 'X', href: 'https://x.com/herzmwn_agung' },
    ]

    return (
        <footer className="bg-black border-t border-white/8 z-20 relative px-6 md:px-14 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: name + copyright */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-white font-bold text-sm tracking-widest uppercase">Agung<span className="text-white/25">.</span></span>
                    <p className="text-white/20 font-mono text-[10px] tracking-widest">
                        © {year} Agung Hermawan · Purwakarta, ID
                    </p>
                </div>

                {/* Center: social links */}
                <div className="flex items-center gap-6">
                    {links.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/25 hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Right: built with */}
                <p className="text-white/15 font-mono text-[10px] tracking-widest hidden md:block">
                    Built with Next.js &amp; R3F
                </p>
            </div>
        </footer>
    )
}
