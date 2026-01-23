'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic'; // Dynamic import
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Shield, Zap, XCircle, Bot, FileText,
    ArrowRight, Sparkles, TrendingUp, Store, Truck, PenTool, Stethoscope, CheckCircle2
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton'; // Skeleton for lazy loading
import { useTranslation } from '@/hooks/useTranslation';

// Dynamic Imports with Loading Skeletons for Heavy Sections
const ProductShowcase = dynamic(() => import('@/components/ProductShowcase').then(mod => mod.ProductShowcase), {
    loading: () => <Skeleton className="w-full h-[600px] rounded-3xl" />,
});
const FeatureDeepDive = dynamic(() => import('@/components/FeatureDeepDive').then(mod => mod.FeatureDeepDive), {
    loading: () => <div className="py-20"><Skeleton className="w-full max-w-7xl mx-auto h-[500px] rounded-3xl" /></div>,
});
const IntegrationsCarousel = dynamic(() => import('@/components/IntegrationsCarousel').then(mod => mod.IntegrationsCarousel), {
    ssr: false, // Carousel often has hydration issues, safe to disable SSR if below fold
    loading: () => <div className="py-12"><Skeleton className="w-full h-32 rounded-xl" /></div>,
});
const CollaborationSection = dynamic(() => import('@/components/CollaborationSection').then(mod => mod.CollaborationSection), {
    loading: () => <div className="py-20"><Skeleton className="w-full max-w-5xl mx-auto h-[400px] rounded-3xl" /></div>,
});
const AiAgentsSection = dynamic(() => import('@/components/AiAgentsSection').then(mod => mod.AiAgentsSection), {
    loading: () => <div className="py-20"><Skeleton className="w-full max-w-7xl mx-auto h-[600px] rounded-3xl" /></div>,
});
const FloatingBentoGrid = dynamic(() => import('@/components/FloatingBentoGrid').then(mod => mod.FloatingBentoGrid), {
    ssr: false, // Client interaction heavy
    loading: () => <Skeleton className="w-full h-full rounded-3xl min-h-[500px]" />,
});

// Eager imports (Above the fold components)
// import { ProductShowcase } from '@/components/ProductShowcase'; // Converted to dynamic
// import { FeatureDeepDive } from '@/components/FeatureDeepDive'; // Converted to dynamic
// import { IntegrationsCarousel } from '@/components/IntegrationsCarousel'; // Converted to dynamic
// import { CollaborationSection } from '@/components/CollaborationSection'; // Converted to dynamic
// import { AiAgentsSection } from '@/components/AiAgentsSection'; // Converted to dynamic
// import { FloatingBentoGrid } from '@/components/FloatingBentoGrid'; // Converted to dynamic
import { LandingNavbar } from '@/components/LandingNavbar';
import { LandingTerminal } from '@/components/LandingTerminal';
import { LazyViewport } from '@/components/ui/LazyViewport';

export default function ElysianLanding() {
    const { t } = useTranslation();
    // mobileMenuOpen state removed as it was only for the old Navbar
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Terminal View State
    const [showTerminal, setShowTerminal] = useState(false);

    const toggleTerminal = (value: boolean) => {
        setShowTerminal(value);
    };

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen mesh-gradient-bg font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900"
        >
            {/* Floating Navigation - Custom SaaS Style */}
            {/* Floating Navigation - Custom SaaS Style */}
            <LandingNavbar
                showTerminal={showTerminal}
                setShowTerminal={toggleTerminal}
            />

            {/* Hero Section - Anti-Gravity + Floating Bento (Combined) */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background Blobs (Optimized) */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: 'translateZ(0)' }}
                    className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-[80px] rounded-full pointer-events-none hidden md:block"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{ transform: 'translateZ(0)' }}
                    className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-tl from-indigo-400/15 to-purple-400/15 blur-[100px] rounded-full pointer-events-none hidden md:block"
                />

                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                    className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
                        {/* Left Content (Typography) */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Badge */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism-premium mb-8 mx-auto lg:mx-0 shadow-xl cursor-default"
                                >
                                    <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500 animate-pulse" />
                                    <span className="text-sm font-bold text-blue-900 tracking-wider uppercase font-heading">{t.landing.hero.badge}</span>
                                </motion.div>

                                {/* Headline - Optimized for LCP (immediate paint) */}
                                <h1
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-slate-900 font-heading"
                                >
                                    {t.landing.hero.title1} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 animate-gradient-x">
                                        {t.landing.hero.title2}
                                    </span>
                                </h1>

                                <motion.p
                                    className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium px-4 sm:px-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {t.landing.hero.description}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <Link href="/dashboard" className="w-full sm:w-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 transition-all"
                                        >
                                            {t.landing.hero.ctaStart}
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all shadow-sm"
                                    >
                                        {t.landing.hero.ctaDemo}
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right: The Elysian System Console OR Bento Grid */}
                        <div className="hidden lg:flex w-full lg:w-1/2 relative min-h-[500px] items-center justify-center">
                            {showTerminal ? (
                                <LandingTerminal />
                            ) : (
                                <FloatingBentoGrid />
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* Infinite Marquee - Key visual, keep eager or high margin */}
            <InfiniteMarquee />

            <LazyViewport minHeight="600px">
                <ProductShowcase />
            </LazyViewport>

            <LazyViewport minHeight="600px">
                <FeatureDeepDive />
            </LazyViewport>

            <LazyViewport minHeight="600px">
                <AiAgentsSection />
            </LazyViewport>

            <LazyViewport minHeight="600px">
                <CollaborationSection />
            </LazyViewport>

            <LazyViewport minHeight="300px">
                <IntegrationsCarousel />
            </LazyViewport>

            <LazyViewport minHeight="500px">
                <ProblemSection />
            </LazyViewport>

            <LazyViewport minHeight="500px">
                <SolutionSection />
            </LazyViewport>

            <LazyViewport minHeight="600px">
                <UseCasesSection />
            </LazyViewport>

            <LazyViewport minHeight="500px">
                <CTASection />
            </LazyViewport>

            <LazyViewport minHeight="400px">
                <FAQSection />
            </LazyViewport>

            {/* Global footer is handled by Providers/SiteFooter, avoiding double footer here */}
        </motion.div>
    );
}

// Old Navbar Component Removed

// Infinite Marquee
function InfiniteMarquee() {
    const industries = ['Retail', 'Logistik', 'Agency', 'Klinik', 'F&B', 'Manufaktur', 'Konsultan', 'Properti'];

    return (
        <div className="relative py-12 overflow-hidden bg-white/50 backdrop-blur-sm border-y border-slate-100">
            <div className="flex gap-16">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-16 whitespace-nowrap"
                >
                    {[...industries, ...industries].map((industry, i) => (
                        <span key={i} className="text-2xl font-bold text-slate-300">
                            {industry}
                        </span>
                    ))}
                </motion.div>
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
        </div>
    );
}

// Problem Section
function ProblemSection() {
    const { t } = useTranslation();
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-slate-50/50 to-white/0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 leading-tight font-heading">
                            {t.landing.problem.title1} <br />
                            <span className="relative inline-block">
                                {t.landing.problem.title2}
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 10C50 2 150 2 198 10" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {t.landing.problem.description}
                        </p>

                        <div className="space-y-3">
                            {t.landing.problem.items.map((problem, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:border-red-200 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{problem}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-white/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-[2.5rem]" />

                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 font-heading">{t.landing.problem.solutionTitle}</h3>
                            </div>

                            <div className="space-y-6 mb-8">
                                {t.landing.problem.solutionItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                            <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg"
                            >
                                {t.landing.problem.cta}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Solution Section
function SolutionSection() {
    const { t } = useTranslation();
    const features = [
        { icon: Bot, title: t.landing.features.items.ai.title, desc: t.landing.features.items.ai.desc, color: 'from-blue-500 to-cyan-500' },
        { icon: FileText, title: t.landing.features.items.docs.title, desc: t.landing.features.items.docs.desc, color: 'from-indigo-500 to-purple-500' },
        { icon: Shield, title: t.landing.features.items.security.title, desc: t.landing.features.items.security.desc, color: 'from-emerald-500 to-teal-500' },
        { icon: Zap, title: t.landing.features.items.automation.title, desc: t.landing.features.items.automation.desc, color: 'from-orange-500 to-amber-500' }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
                        {t.landing.features.title.split(' ').map((word, i) => word === 'Mengangkat' || word === 'Elevate' ? (
                            <span key={i} className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent"> {word} </span>
                        ) : ' ' + word)}
                    </h2>
                    <p className="text-xl text-slate-600">{t.landing.features.subtitle}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                            className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Use Cases Section
function UseCasesSection() {
    const { t } = useTranslation();
    const cases = [
        { icon: Store, title: t.landing.useCases.items.retail.title, items: t.landing.useCases.items.retail.items, color: 'from-orange-500 to-red-500' },
        { icon: Truck, title: t.landing.useCases.items.logistics.title, items: t.landing.useCases.items.logistics.items, color: 'from-blue-500 to-cyan-500' },
        { icon: PenTool, title: t.landing.useCases.items.agency.title, items: t.landing.useCases.items.agency.items, color: 'from-pink-500 to-purple-500' },
        { icon: Stethoscope, title: t.landing.useCases.items.clinic.title, items: t.landing.useCases.items.clinic.items, color: 'from-emerald-500 to-teal-500' }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">{t.landing.useCases.title}</h2>
                    <p className="text-xl text-slate-600">{t.landing.useCases.subtitle}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((useCase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 transition-all cursor-default"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${useCase.color}`}>
                                <useCase.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 font-heading">{useCase.title}</h3>
                            <ul className="space-y-3">
                                {useCase.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-slate-500 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// CTA Section - Elysian Rebirth Style
function CTASection() {
    const { t } = useTranslation();
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white pointer-events-none" />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[100px] rounded-full -translate-y-1/2"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 blur-[100px] rounded-full -translate-y-1/2"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative isolate rounded-[3rem] overflow-hidden">
                        {/* Glass Container */}
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white/60" />

                        {/* Inner Gradient Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-300/20 opacity-50" />

                        <div className="relative p-12 md:p-24 text-center">
                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism-premium mb-10 mx-auto shadow-xl"
                            >
                                <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500 animate-pulse" />
                                <span className="text-sm font-bold text-blue-900 tracking-wider uppercase font-heading">{t.landing.cta.badge}</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-slate-900 font-heading"
                            >
                                {t.landing.cta.title1} <br />
                                <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                                    {t.landing.cta.title2}
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                            >
                                {t.landing.cta.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <Link href="/dashboard">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-16 px-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30 flex items-center gap-3 group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span>{t.landing.cta.btnStart}</span>
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>

                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="h-16 px-10 rounded-full bg-white/70 backdrop-blur-xl border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-blue-200 hover:text-blue-700 transition-all shadow-lg flex items-center gap-3"
                                >
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    {t.landing.cta.btnConsult}
                                </motion.button>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8 text-sm text-slate-400 font-medium"
                            >
                                {t.landing.cta.foot}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// FAQ Section
function FAQSection() {
    const { t } = useTranslation();
    const faqs = [
        { q: t.landing.faq.q1, a: t.landing.faq.a1 },
        { q: t.landing.faq.q2, a: t.landing.faq.a2 },
        { q: t.landing.faq.q3, a: t.landing.faq.a3 },
        { q: t.landing.faq.q4, a: t.landing.faq.a4 }
    ];

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900 font-heading">{t.landing.faq.title}</h2>
                    <p className="text-lg text-slate-600">{t.landing.faq.subtitle}</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                        >
                            <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">{item.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
