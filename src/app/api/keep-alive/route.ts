import { NextResponse } from 'next/server'

// Memaksa Next.js untuk tidak men-cache halaman ini (agar UptimeRobot benar-benar men-trigger Vercel Node.js Handler)
export const dynamic = 'force-dynamic'

export async function GET() {
    return NextResponse.json(
        { 
            status: 'Server is Alive', 
            timestamp: new Date().toISOString() 
        }, 
        { status: 200 }
    )
}
