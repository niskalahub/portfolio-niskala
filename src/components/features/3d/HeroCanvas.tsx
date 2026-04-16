'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
    const ref = useRef<THREE.Points>(null)

    const positions = useMemo(() => {
        // Reduce particle count on mobile for better performance
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
        const count = isMobile ? 800 : 1800
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
            arr[i] = (Math.random() - 0.5) * 12
        }
        return arr
    }, [])

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.04
            ref.current.rotation.x += delta * 0.01
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#a78bfa"
                size={0.012}
                sizeAttenuation
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    )
}

function FloatingRings() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.3
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
        }
    })

    return (
        <group ref={groupRef}>
            {[1.8, 2.6, 3.4].map((r, i) => (
                <mesh
                    key={i}
                    rotation={[Math.PI / 2 + i * 0.3, 0, i * 0.5]}
                >
                    <torusGeometry args={[r, 0.008, 16, 120]} />
                    <meshBasicMaterial
                        color={i === 0 ? '#818cf8' : i === 1 ? '#6366f1' : '#4f46e5'}
                        transparent
                        opacity={0.4 - i * 0.08}
                    />
                </mesh>
            ))}
        </group>
    )
}

function GlowingSphere() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[0.8, 64, 64]} />
            <meshStandardMaterial
                color="#312e81"
                roughness={0.1}
                metalness={0.9}
                emissive="#4338ca"
                emissiveIntensity={0.6}
            />
        </mesh>
    )
}

export function HeroCanvas() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 55 }}
                gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[4, 4, 4]} intensity={2} color="#818cf8" />
                <pointLight position={[-4, -2, -4]} intensity={1.5} color="#6366f1" />
                <StarField />
                <FloatingRings />
                <GlowingSphere />
            </Canvas>
        </div>
    )
}
