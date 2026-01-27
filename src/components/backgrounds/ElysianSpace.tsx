'use client';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useTheme } from 'next-themes';

function ElysianScene() {
    const colors = useMemo(() => ({
        near: '#e0f2fe',     // blue-100 (bright stars)
        mid: '#93c5fd',      // blue-300
        far: '#64748b',      // slate-500
        accent: '#22d3ee',   // cyan-400
    }), []);

    return (
        <>
            {/* LIGHTING — very soft, space-like */}
            <ambientLight intensity={0.25} />
            <directionalLight position={[4, 6, 6]} intensity={0.6} />
            <pointLight position={[-8, -4, 6]} intensity={0.6} color={colors.accent} />

            {/* DEPTH */}
            <fog attach="fog" args={['#020617', 14, 38]} />

            {/* FAR STAR FIELD (tiny + many) */}
            <Sparkles
                count={2000}
                scale={[80, 40, 80]}
                size={0.6}
                speed={0.02}
                opacity={0.12}
                color={colors.far}
            />

            {/* MID STAR FIELD */}
            <Sparkles
                count={1200}
                scale={[60, 30, 60]}
                size={0.9}
                speed={0.05}
                opacity={0.22}
                color={colors.mid}
            />

            {/* NEAR STAR FIELD (brighter but still small) */}
            <Sparkles
                count={700}
                scale={[40, 20, 40]}
                size={1.3}
                speed={0.12}
                opacity={0.45}
                color={colors.near}
            />

            {/* RARE ACCENT STARS (cyan glow) */}
            <Sparkles
                count={120}
                scale={[30, 16, 30]}
                size={1.6}
                speed={0.18}
                opacity={0.55}
                color={colors.accent}
            />
        </>
    );
}

export function ElysianSpace() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const isDark = mounted && (resolvedTheme ?? theme) === 'dark';

    return (
        <div
            className={[
                'fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-700',
                isDark ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            aria-hidden
        >
            {/* BACKGROUND — real space look */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]" />

            {/* Subtle nebula glow */}
            <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_35%,rgba(34,211,238,0.10),transparent_60%)]" />
            <div className="absolute inset-0 [background:radial-gradient(50%_35%_at_70%_60%,rgba(96,165,250,0.08),transparent_65%)]" />

            {/* Vignette */}
            <div className="absolute inset-0 [background:radial-gradient(85%_75%_at_50%_55%,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

            {/* Grain (cinematic) */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:3px_3px]" />

            <Canvas
                camera={{ position: [0, 0, 14], fov: 45 }}
                dpr={[1, 1.75]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                style={{ position: 'absolute', inset: 0 }}
            >
                <Suspense fallback={null}>
                    <ElysianScene />
                </Suspense>
            </Canvas>
        </div>
    );
}
