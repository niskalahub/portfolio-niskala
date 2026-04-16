'use client'

export function ResumeDownloadButton() {
    return (
        <button
            onClick={async () => {
                const { generateAndDownloadCV } = await import('@/lib/generateResume')
                generateAndDownloadCV()
            }}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all"
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
        </button>
    )
}
