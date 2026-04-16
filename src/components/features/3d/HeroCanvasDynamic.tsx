'use client'

import dynamic from 'next/dynamic'

export const HeroCanvasDynamic = dynamic(() => import('./HeroCanvas').then(mod => mod.HeroCanvas), { ssr: false })
