import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 })
        }

        // Build mailto link as fallback — works without any env setup
        // If you want real email sending, install nodemailer or use Resend API
        const mailto = `mailto:emailkerja.agung@gmail.com?subject=Pesan dari ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`

        return NextResponse.json({ success: true, mailto })
    } catch {
        return NextResponse.json({ error: 'Terjadi kesalahan.' }, { status: 500 })
    }
}
