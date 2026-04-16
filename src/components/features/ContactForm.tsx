'use client'

import { useState } from 'react'

export function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (res.ok && data.mailto) {
                window.location.href = data.mailto
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const inputClass =
        'w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white/80 placeholder-white/20 text-sm font-light outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-300'

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-white/30 font-mono text-[10px] tracking-widest uppercase">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-white/30 font-mono text-[10px] tracking-widest uppercase">Email</label>
                    <input
                        type="email"
                        placeholder="email@company.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Message — grows to fill space */}
            <div className="flex flex-col gap-1.5 flex-1 min-h-0">
                <label className="text-white/30 font-mono text-[10px] tracking-widest uppercase">Message</label>
                <textarea
                    placeholder="Hi Agung, I would like to invite you to join / collaborate for..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    className={`${inputClass} resize-none flex-1 h-full min-h-[220px]`}
                />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-2">
                {(status === 'success' || status === 'error' || status === 'loading') && (
                    <p className="text-xs font-mono">
                        {status === 'success' && <span className="text-emerald-400">✓ Opening your email client...</span>}
                        {status === 'error' && <span className="text-red-400">✗ An error occurred, please try again.</span>}
                        {status === 'loading' && <span className="text-white/30 animate-pulse">Processing...</span>}
                    </p>
                )}
                <div className="ml-auto">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs tracking-widest hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                        <span>→</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

