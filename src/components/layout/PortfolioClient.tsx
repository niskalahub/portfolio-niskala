'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { HeroCanvas } from '@/components/features/3d/HeroCanvas'
import { ContactForm } from '@/components/features/ContactForm'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Expertise, Experience, Education, Language, Skill, Project, WebProject } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

interface PortfolioClientProps {
    expertise: Expertise[]
    experiences: Experience[]
    education: Education[]
    languages: Language[]
    additionalSkills: Skill[]
    profile: string
    projects: Project[]
    webProjects: WebProject[]
}

export function PortfolioClient({ expertise, experiences, education, languages, additionalSkills, profile, projects, webProjects }: PortfolioClientProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const horizontalPanelRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
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
        }, containerRef)

        return () => ctx.revert()
    }, { scope: containerRef, dependencies: [expertise, experiences] })

    return (
        <div ref={containerRef} className="relative w-full bg-black font-sans text-white">

            {/* Fixed 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_50%,transparent_100%)]" />
                <HeroCanvas />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
            </div>

            <div className="relative z-10 flex flex-col">

                {/* ── HERO ─────────────────────────────────────── */}
                <section id="hero" className="hero-layer h-screen flex flex-col justify-center items-center px-6">
                    <div className="flex flex-col items-center text-center gap-6">

                        {/* Name */}
                        <h1 className="text-[clamp(3rem,12vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] overflow-hidden drop-shadow-2xl">
                            <span className="hero-word inline-block">Agung</span>{' '}
                            <span
                                className="hero-word inline-block text-transparent"
                                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.75)' }}
                            >
                                Hermawan
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="hero-word text-sm md:text-base font-mono text-white/40 tracking-[0.3em] uppercase">
                            IT Support · Design · Operations
                        </p>

                        {/* Contact pill */}
                        <div className="hero-word inline-flex items-center gap-2.5 px-4 py-2 border border-white/10 rounded-full backdrop-blur-md bg-white/5 font-mono text-[10px] text-white/40 tracking-widest max-w-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                            <span className="text-white/80 whitespace-nowrap">Available for Work</span>
                            <span className="text-white/15">·</span>
                            <span className="whitespace-nowrap">Purwakarta, ID</span>
                            <span className="hidden sm:inline text-white/15">·</span>
                            <span className="hidden sm:inline whitespace-nowrap">emailkerja.agung@gmail.com</span>
                        </div>

                        {/* Scroll hint */}
                        <div className="hero-word mt-6 flex flex-col items-center gap-2 text-white/20 text-xs font-mono tracking-widest">
                            <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/30 animate-pulse" />
                            scroll
                        </div>
                    </div>
                </section>

                {/* ── PROFIL ───────────────────────────────────── */}
                <section id="tentang" className="relative bg-zinc-950 px-6 md:px-20 pt-28 pb-36 rounded-t-[2.5rem] border-t border-white/8 z-20">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="reveal-up flex items-center gap-4 hidden md:flex">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">01 / Profile</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">
                            {/* Text Section */}
                            <div className="reveal-up w-full md:w-[65%] flex flex-col gap-8">
                                <span className="md:hidden text-xs font-mono text-white/30 tracking-widest uppercase mb-[-1rem]">01 / Profile</span>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                                    About <span className="text-white/30 font-light italic">Me.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light text-justify md:text-left">
                                    {profile}
                                </p>

                                {/* Download CV Button */}
                                <div className="mt-2 text-left">
                                    <button
                                        onClick={async () => {
                                            const { generateAndDownloadCV } = await import('@/lib/generateResume')
                                            generateAndDownloadCV()
                                        }}
                                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        Download Resume
                                    </button>
                                </div>
                            </div>

                            {/* Photo Section */}
                            <div className="reveal-up w-full sm:w-2/3 md:w-[35%] flex-shrink-0 mx-auto">
                                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 group shadow-2xl">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Agung Hermawan"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 80vw, 40vw"
                                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%2318181b" width="100" height="100"/><text fill="%2352525b" font-family="monospace" font-size="6" x="50" y="50" text-anchor="middle">FOTO 4:5</text><text fill="%2352525b" font-family="monospace" font-size="4" x="50" y="60" text-anchor="middle">public/profile.jpg</text></svg>'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>

                        {/* Languages & Soft Skills */}
                        <div className="reveal-up grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-white/5">
                            {/* Languages */}
                            <div>
                                <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">Language Skills</p>
                                <div className="flex flex-col gap-6">
                                    {languages.map(lang => (
                                        <div key={lang.id} className="group">
                                            <div className="flex flex-col mb-2.5">
                                                <span className="font-semibold text-white/80 text-sm tracking-wide">{lang.name}</span>
                                                <span className="font-mono text-xs text-white/40 mt-1">{lang.level}</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/5 relative overflow-hidden rounded-full">
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-300"
                                                    style={{ width: `${lang.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Skills */}
                            <div>
                                <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">Soft Skills</p>
                                <div className="flex flex-col gap-6">
                                    {additionalSkills.map(skill => (
                                        <div key={skill.id} className="group">
                                            <div className="flex flex-col mb-2.5">
                                                <span className="font-semibold text-white/80 text-sm tracking-wide">{skill.name}</span>
                                                <span className="font-mono text-xs text-white/40 mt-1">{skill.level}</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/5 relative overflow-hidden rounded-full">
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-indigo-400"
                                                    style={{ width: `${skill.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── EXPERTISE (Bento Grid) ────────────── */}
                <section id="keahlian" className="bg-black px-6 md:px-20 py-32 relative z-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="reveal-up flex items-center gap-4 mb-16">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">02 / Core Expertise</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {expertise.map((item, idx) => (
                                <div key={item.id} className="reveal-up relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 overflow-hidden group">
                                    {/* Subtle glowing orb inside the card */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 transform translate-x-1/2 -translate-y-1/2" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <span className="text-indigo-400 font-mono tracking-widest text-xs mb-4 block">0{idx + 1}</span>
                                        <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-base font-light leading-relaxed mb-10 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="flex gap-2 flex-wrap mt-auto">
                                            {item.techStack.map(t => (
                                                <span key={t} className="px-3 py-1.5 border border-white/10 rounded-full text-[0.65rem] text-white/60 tracking-widest uppercase bg-white/5 group-hover:border-indigo-500/30 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PORTOFOLIO & KARYA ────────────────────────── */}
                <section id="portofolio" className="relative bg-zinc-950 px-6 md:px-14 py-32 z-20 border-t border-white/8">
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <span className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-3">03 / Portfolio &amp; Works</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Graphic Design &amp;<br /><span className="text-white/30 font-light italic">Social Media Content</span></h2>
                            </div>
                            <p className="text-white/25 font-light text-sm leading-relaxed max-w-xs text-right hidden md:block">
                                Visual content for Klinik Asri Darangdan.<br />Instagram feeds, promotional, and informative designs.
                            </p>
                        </div>

                        {/* ── Gallery Grid ── */}
                        <div className="reveal-up grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
                            {projects.map((project, idx) => (
                                <div
                                    key={project.id}
                                    className="group relative overflow-hidden bg-zinc-950 cursor-pointer"
                                    style={{ aspectRatio: '4/5' }}
                                >
                                    {/* Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.06]"
                                        onError={(e) => {
                                            (e.target as HTMLElement).style.display = 'none'
                                        }}
                                    />

                                    {/* Subtle always-on vignette */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                                    {/* Hover slide-up overlay */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out px-3 pt-8 pb-3 pointer-events-none">
                                        <p className="text-[9px] font-mono text-white/40 tracking-widest uppercase mb-0.5">{project.category}</p>
                                        <p className="text-white font-semibold text-[11px] leading-snug line-clamp-2">{project.title}</p>
                                    </div>

                                    {/* Index — top right, always visible subtle */}
                                    <div className="absolute top-2 right-2 pointer-events-none">
                                        <span className="text-white/20 font-mono text-[8px]">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="reveal-up flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/8">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <span className="text-white/25 font-mono text-[10px] tracking-widest uppercase">{projects.length} Selected Works</span>
                            </div>
                            <span className="text-white/15 font-mono text-[10px] tracking-widest">Klinik Asri Darangdan · 2024</span>
                        </div>

                    </div>
                </section>

                {/* ── WEB PROJECTS ───────────────────────────────── */}
                <section id="webdev" className="relative bg-black px-6 md:px-20 py-32 z-20 border-t border-white/8 overflow-hidden">
                    {/* Ambient glow background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="max-w-5xl mx-auto relative">
                        <div className="reveal-up flex items-center gap-4 mb-20">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">04 / Web Development</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <div className="flex flex-col gap-28">
                            {webProjects.map((wp, idx) => (
                                <div key={wp.id} className="reveal-up group">
                                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}>

                                        {/* Browser Mockup */}
                                        <div className="w-full md:w-[58%] flex-shrink-0">
                                            <div className="relative">
                                                {/* Glow behind frame */}
                                                <div className={`absolute -inset-4 bg-gradient-to-br ${wp.color} rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700`} />
                                                {/* Browser frame */}
                                                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group-hover:border-white/25 transition-all duration-500">
                                                    {/* Browser bar */}
                                                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/80 border-b border-white/8">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                                                        <div className="ml-2 flex-1 bg-zinc-700/60 rounded-full px-3 py-1">
                                                            <span className="text-white/30 font-mono text-[9px] tracking-wide">{wp.url.replace('https://', '')}</span>
                                                        </div>
                                                    </div>
                                                    {/* Screenshot */}
                                                    <div className="relative aspect-[16/10] overflow-hidden">
                                                        <Image
                                                            src={wp.image}
                                                            alt={wp.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 60vw"
                                                            className="object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-in-out group-hover:scale-[1.02]"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Project number */}
                                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                                                    <span className="text-white/30 font-mono text-[10px]">{String(idx + 1).padStart(2, '0')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Info Panel */}
                                        <div className="flex flex-col gap-6 w-full">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                <span className="text-emerald-400/70 font-mono text-[10px] tracking-widest uppercase">Live</span>
                                                <span className="text-white/20 font-mono text-[10px] ml-1 tracking-wide">{wp.subtitle}</span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">{wp.title}</h3>
                                            <p className="text-white/45 font-light text-sm leading-relaxed">{wp.description}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {wp.stack.map(s => (
                                                    <span key={s} className="px-3 py-1.5 border border-white/10 rounded-full text-[10px] font-mono text-white/50 tracking-widest uppercase bg-white/[0.03] hover:border-white/25 transition-colors">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={wp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 self-start inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-xs font-mono tracking-widest group/btn"
                                            >
                                                Visit Website
                                                <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PENGALAMAN ───────────────────────────────── */}
                <section id="pengalaman" className="relative bg-zinc-950 px-6 md:px-20 py-32 z-20 border-t border-white/8">
                    <div className="max-w-5xl mx-auto">
                        <div className="reveal-up flex items-center gap-4 mb-20">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">05 / Work Experience</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <div className="relative flex flex-col gap-16 pl-8 border-l border-white/8">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="reveal-up relative group">
                                    {/* timeline dot */}
                                    <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-white/20 group-hover:border-indigo-400 group-hover:bg-indigo-400/20 transition-all duration-500" />

                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-white/30 font-mono text-sm tracking-widest">{exp.period}</span>
                                    </div>
                                    <p className="text-indigo-400/80 font-light text-base mb-5 tracking-wide">{exp.company}</p>
                                    <ul className="flex flex-col gap-2.5 text-white/50 font-light text-base leading-relaxed list-disc ml-4 max-w-3xl">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PENDIDIKAN ───────────────────────────────── */}
                <section id="pendidikan" className="bg-black px-6 md:px-20 py-24 z-20 relative">
                    <div className="max-w-5xl mx-auto">
                        <div className="reveal-up flex items-center gap-4 mb-12">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">06 / Education</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {education.map(edu => (
                                <div key={edu.id} className="reveal-up p-8 rounded-2xl bg-white/4 border border-white/8 hover:border-indigo-400/30 hover:bg-white/6 transition-all duration-500 group">
                                    <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-300 transition-colors duration-300">{edu.school}</h3>
                                    {edu.major && <p className="text-white/50 text-sm mb-4">{edu.major}</p>}
                                    <span className="font-mono text-xs text-white/30 tracking-widest">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── KONTAK ────────────────────────────────────── */}
                <section id="kontak" className="relative bg-zinc-950 px-6 md:px-20 py-32 z-20 border-t border-white/8 overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-5xl mx-auto relative">
                        {/* Header */}
                        <div className="reveal-up flex items-center gap-4 mb-20">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">07 / Contact</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-stretch">
                            {/* Left: CTA */}
                            <div className="reveal-up flex flex-col gap-8">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                                    Ready to<br />
                                    <span className="text-white/30 font-light italic">collaborate.</span>
                                </h2>
                                <p className="text-white/40 font-light text-base leading-relaxed">
                                    Open for full-time, part-time, or contract opportunities. Feel free to reach out to me!
                                </p>
                                <div className="flex flex-col gap-3 pt-2">

                                    {/* Email */}
                                    <a href="mailto:emailkerja.agung@gmail.com" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">emailkerja.agung@gmail.com</span>
                                    </a>

                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/xxviherz/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">@xxviherz</span>
                                    </a>

                                    {/* X / Twitter */}
                                    <a href="https://x.com/herzmwn_agung" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.854L1.99 2.25H8.17l4.254 5.622L18.244 2.25Zm-1.16 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">@herzmwn_agung</span>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/herzmwnagung/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">herzmwnagung</span>
                                    </a>

                                    {/* GitHub */}
                                    <a href="https://github.com/herzxxvi" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                                        <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">herzxxvi</span>
                                    </a>

                                    {/* Location */}
                                    <div className="flex items-center gap-3 text-white/25 pt-1">
                                        <span className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4"><path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" /><circle cx="12" cy="8" r="2" /></svg>
                                        </span>
                                        <span className="font-mono text-xs tracking-wide">Purwakarta, Jawa Barat, ID</span>
                                    </div>

                                </div>
                            </div>

                            {/* Right: Contact Form */}
                            <div className="reveal-up">
                                <ContactForm />
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>
    )
}
