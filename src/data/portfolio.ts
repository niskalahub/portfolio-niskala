export interface Expertise {
    id: string
    title: string
    description: string
    techStack: string[]
}

export interface Project {
    id: string
    title: string
    category: string
    image: string
}

export interface WebProject {
    id: string
    title: string
    subtitle: string
    description: string
    url: string
    image: string
    stack: string[]
    color: string
}

export interface Experience {
    id: string
    role: string
    company: string
    period: string
    description: string[]
}

export interface Education {
    id: string
    school: string
    major?: string
    period: string
}

export interface Language {
    id: string
    name: string
    level: string
    proficiency: number // 0–100
}

export interface Skill {
    id: string
    name: string
    level: string
    proficiency: number
}

export const profileDesc = "A vocational high school graduate in Software Engineering (SMKN 1 Sukatani) who is disciplined, meticulous, and highly enthusiastic about building a long-term career in a large-scale corporate or manufacturing environment. Possesses a solid technical foundation in operational administration, IT support, and graphic design, backed by sharp problem-solving skills. Highly adaptable to strict Standard Operating Procedures (SOP), accustomed to working systematically, and ready to deliver full dedication both independently and as part of a team."

export const expertiseItems: Expertise[] = [
    {
        id: '1',
        title: 'Graphic Design',
        description: 'Professional design production for print and digital media — banners, brochures, posters, promotional materials, and social media content that meets professional printing standards.',
        techStack: ['CorelDRAW', 'Photoshop', 'Illustrator', 'Canva'],
    },
    {
        id: '2',
        title: 'IT Support & Networking',
        description: 'Responsive hardware and software troubleshooting, routine cashier and store system maintenance, as well as LAN network infrastructure installation.',
        techStack: ['IT Helpdesk', 'Networking / LAN', 'Hardware Maintenance'],
    },
    {
        id: '3',
        title: 'Programming',
        description: 'Software Engineering graduate with a strong foundation in programming logic, reliable computerized system maintenance, and basic workflow automation.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React / Next.js', 'Prisma', 'Tailwind CSS'],
    },
    {
        id: '4',
        title: 'Administration',
        description: 'Operational data management, patient administration services, cashier operations, and strict implementation of company standard SOPs.',
        techStack: ['Microsoft Office', 'Data Entry', 'Team Working', 'Social Media Admin'],
    }
]

export const experiences: Experience[] = [
    {
        id: '3',
        role: 'Admission & Operational Staff',
        company: 'Klinik Asri Darangdan',
        period: '2023 – Present',
        description: [
            'Processing registrations for 50+ patients daily with high accuracy, and executing cashier operational tasks.',
            'Designing health posters, banners, and managing the clinic\'s social media content.',
            'Handling daily design needs for clinic branding and service promotion.'
        ]
    },
    {
        id: '2',
        role: 'EDP (Electronic Data Processing)',
        company: 'PT. Indomarco Prismatama',
        period: '2022 – 2023',
        description: [
            'Resolved 10+ hardware and network issues weekly, ensuring stable store operations.',
            'Performed scheduled routine hardware and software maintenance.',
            'Managed operational data and ensured system capability remained stable.',
            'Responded to technical requests from stores quickly and accurately.'
        ]
    },
    {
        id: '1',
        role: 'Graphic Designer',
        company: 'Lestari Grafika Printing',
        period: '2021',
        description: [
            'Designed banners, brochures, posters, business cards, and other printing materials.',
            'Prepared print-ready files to ensure final output met professional printing standards.',
            'Actively coordinated with the production team to ensure satisfactory print results.'
        ]
    }
]

export const education: Education[] = [
    {
        id: '2',
        school: 'SMK N 1 Sukatani',
        major: 'Software Engineering',
        period: '2018 – 2021'
    }
]

export const languages: Language[] = [
    { id: '1', name: 'Indonesian', level: 'Native / Spoken & Written', proficiency: 100 },
    { id: '2', name: 'English', level: 'Intermediate / Reading, Writing, Speaking', proficiency: 60 },
]

export const additionalSkills: Skill[] = [
    { id: '1', name: 'Team Collaboration', level: 'Communication, Independent Work, Service', proficiency: 95 },
    { id: '2', name: 'Adaptability & Logic', level: 'SOP Implementation, Problem Solving, Detail Oriented', proficiency: 90 },
]

export const projects: Project[] = [
    { id: '1', title: 'Happy New Year 2025', category: 'Instagram Feed', image: '/portfolio/karya-1.jpg' },
    { id: '2', title: 'Clinic & ER Schedule Info', category: 'Informative Feed', image: '/portfolio/karya-2.jpg' },
    { id: '3', title: 'Marhaban Ya Ramadhan 1447H', category: 'Instagram Feed', image: '/portfolio/karya-3.jpg' },
    { id: '4', title: 'Congrats Health Dept Head', category: 'Instagram Feed', image: '/portfolio/karya-4.jpg' },
    { id: '5', title: 'Happy Birthday', category: 'Instagram Feed', image: '/portfolio/karya-5.jpg' },
    { id: '6', title: 'Welcome Baby Boy', category: 'Instagram Feed', image: '/portfolio/karya-6.jpg' },
    { id: '7', title: 'Congrats Purwakarta Regent', category: 'Instagram Feed', image: '/portfolio/karya-7.jpg' },
    { id: '8', title: 'Happy Eid Al-Fitr 1447H', category: 'Instagram Feed', image: '/portfolio/karya-8.jpg' },
    { id: '9', title: 'Happy Umrah Pilgrimage', category: 'Instagram Feed', image: '/portfolio/karya-9.jpg' },
    { id: '10', title: 'Dental Clinic Schedule', category: 'Informative Feed', image: '/portfolio/karya-10.jpg' },
]

export const webProjects: WebProject[] = [
    {
        id: '1',
        title: 'Clinic Administration Web',
        subtitle: 'admin.asridarangdan.com',
        description: 'A web-based management system for Clinic Asri Darangdan operations. Digitally managing patient data, inpatient care, maternity, billing, and daily reports. Built with Next.js 16 & Supabase.',
        url: 'https://admin.asridarangdan.com',
        image: '/webprojects/admin-klinik.jpg',
        stack: ['Next.js 16', 'Supabase', 'Prisma', 'Tailwind CSS'],
        color: 'from-emerald-500/20 to-teal-500/5',
    },
    {
        id: '2',
        title: 'Employee Attendance Web',
        subtitle: 'absen.asridarangdan.com',
        description: 'A PWA-based digital attendance application for clinic employees. Features include selfie check-in, live GPS location mapping, leave requests, and real-time attendance recap for management. Built with Next.js 16 & Supabase.',
        url: 'https://absen.asridarangdan.com',
        image: '/webprojects/absen-klinik.jpg',
        stack: ['Next.js 16', 'Supabase', 'PWA', 'Tailwind CSS'],
        color: 'from-indigo-500/20 to-violet-500/5',
    },
]
