import { ImageResponse } from 'next/og'
import { profileDesc } from '@/data/portfolio'

export const runtime = 'edge'

export const alt = 'Agung Hermawan - Portfolio'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Background Decor */}
                <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom right, #1a1a1a 0%, #000 100%)' }} />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        gap: '20px',
                    }}
                >
                    <p style={{ margin: 0, fontSize: 32, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>
                        Portfolio Showcase
                    </p>
                    <h1 style={{ margin: 0, fontSize: 100, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex', flexDirection: 'column' }}>
                        <span>AGUNG</span>
                        <span style={{ color: '#888' }}>HERMAWAN</span>
                    </h1>
                    <p style={{ margin: 0, fontSize: 40, letterSpacing: '0.1em', marginTop: '20px', color: '#a1a1aa' }}>
                        IT Support · Design · Operations
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ display: 'flex', width: 24, height: 24, borderRadius: 12, backgroundColor: '#34d399' }} />
                        <span style={{ fontSize: 32, color: '#e4e4e7' }}>Available for Work</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
