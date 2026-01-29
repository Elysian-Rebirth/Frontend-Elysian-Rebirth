import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Infinity as InfinityIcon, ArrowRight, Sun, Moon, Search, Terminal, Monitor, Menu, X, Languages } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface LandingNavbarProps {
    showTerminal?: boolean;
    setShowTerminal?: (v: boolean) => void;
    isDark?: boolean;
    toggleTheme?: () => void;
}

export function LandingNavbar({ showTerminal, setShowTerminal, isDark, toggleTheme }: LandingNavbarProps) {
    const { t, locale, setLocale } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLocale(locale === 'id' ? 'en' : 'id');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['product', 'solutions', 'use-cases', 'faq'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            setMobileMenuOpen(false);
        }
    };

    const openGlobalCommand = () => {
        document.dispatchEvent(new CustomEvent('open-command-dialog'));
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: t.landingNav.products.title, id: 'product' },
        { name: t.landingNav.solutions.title, id: 'solutions' },
        { name: t.landingNav.useCases.title, id: 'use-cases' },
        { name: t.landingNav.faq.title, id: 'faq' },
    ];

    return (
        <>
            <motion.header
                initial="initial"
                animate={scrolled ? "scrolled" : "initial"}
                variants={{
                    initial: {
                        top: 0,
                        width: "100%",
                        borderRadius: "0px",
                        backgroundColor: isDark ? "rgba(15, 23, 42, 0)" : "rgba(255, 255, 255, 0)",
                        borderBottomColor: "rgba(0,0,0,0)",
                        paddingTop: "24px",
                        paddingBottom: "24px",
                        backdropFilter: "blur(0px)",
                    },
                    scrolled: {
                        top: 16,
                        width: "90%",
                        borderRadius: "9999px",
                        backgroundColor: isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.9)",
                        borderBottomColor: isDark ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 0.8)",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
                    }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={cn(
                    "fixed left-1/2 -translate-x-1/2 z-50 border border-transparent transition-all",
                    scrolled && "border-slate-200/50 dark:border-slate-700/50 md:max-w-5xl"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group cursor-pointer focus:outline-none">
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-1.5 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                            <InfinityIcon className="w-5 h-5" />
                        </div>
                        <span className={cn(
                            "font-bold text-xl tracking-wide transition-colors font-heading",
                            isDark || scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
                        )}>
                            ELYSIAN
                        </span>
                    </Link>

                    {/* Desktop Navigation - Simple Links */}
                    <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                                    activeSection === item.id
                                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        {/* Quick Search - Desktop */}
                        <button
                            onClick={openGlobalCommand}
                            className="hidden md:flex p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                            title="Search (Cmd+K)"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Language Toggle - Desktop */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden md:flex p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all gap-1 items-center font-medium text-xs uppercase"
                            title="Switch Language"
                        >
                            <Languages className="w-4 h-4" />
                            <span>{locale}</span>
                        </button>

                        {/* Terminal Toggle - Hidden on mobile */}
                        <button
                            onClick={() => setShowTerminal && setShowTerminal(!showTerminal)}
                            className={cn(
                                "hidden md:flex p-2 rounded-full transition-all duration-200",
                                showTerminal
                                    ? "bg-white dark:bg-slate-700 text-blue-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                            )}
                            title={showTerminal ? "Switch to Visual View" : "Switch to System Console"}
                        >
                            <span className="sr-only">Toggle Terminal</span>
                            {showTerminal ? <Monitor className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                        </button>

                        {/* Theme Toggle - Hidden on Mobile (moved to sidebar) */}
                        <button
                            onClick={toggleTheme}
                            className="hidden md:flex p-2 rounded-full text-slate-500 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Start Free Button - Hidden on mobile */}
                        <Link href="/register" className="hidden md:block">
                            <Button
                                className={cn(
                                    "rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 transition-all shadow-lg shadow-blue-500/20",
                                    scrolled ? "h-9 px-4 text-sm" : "h-10 px-6 text-base"
                                )}
                            >
                                <span className="font-semibold">{t.landingNav.actions.startFree || "Mulai Gratis"}</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.header>
            {/* Mobile Navigation Sidebar - Liquid Glass Design */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Sidebar Container */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.8 }}
                            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-50 md:hidden flex flex-col overflow-hidden border-l border-white/20 dark:border-slate-700/30 shadow-2xl"
                        >
                            {/* Liquid Glass Background Layer - Optimized Blur */}
                            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-0" />

                            {/* Animated Ambient Gradients */}
                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse z-0 pointer-events-none" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000 z-0 pointer-events-none" />

                            {/* Noise Texture for 'Premium' feel */}
                            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                            {/* Content Layer */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header */}
                                <div className="p-6 flex items-center justify-between border-b border-slate-100/50 dark:border-slate-800/50">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-1.5 rounded-xl shadow-lg shadow-blue-500/20 ring-1 ring-white/50">
                                            <InfinityIcon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-xl font-heading text-slate-900 dark:text-white tracking-wide">
                                            Menu
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 rounded-full hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-500 transition-colors focus:outline-none border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                                    {navLinks.map((item, i) => (
                                        <motion.a
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            key={item.name}
                                            href={`#${item.id}`}
                                            onClick={(e) => scrollToSection(e, item.id)}
                                            className={cn(
                                                "block px-5 py-4 rounded-2xl text-lg font-medium transition-all group relative overflow-hidden",
                                                activeSection === item.id
                                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 shadow-sm"
                                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                            )}
                                        >
                                            {/* Hover Gloss Effect */}
                                            <div className={cn(
                                                "absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 dark:from-white/0 dark:via-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"
                                            )} />
                                            {item.name}
                                        </motion.a>
                                    ))}

                                    <div className="mt-6 space-y-4">
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

                                        {/* Settings Grid */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {/* Language */}
                                            <button
                                                onClick={toggleLanguage}
                                                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all group"
                                            >
                                                <Languages className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                                                <div className="flex items-center gap-1.5 text-xs font-semibold">
                                                    <span className={locale === 'id' ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}>ID</span>
                                                    <span className="text-slate-300">/</span>
                                                    <span className={locale === 'en' ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}>EN</span>
                                                </div>
                                            </button>

                                            {/* Theme */}
                                            <button
                                                onClick={toggleTheme}
                                                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all group"
                                            >
                                                {isDark ? (
                                                    <Moon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                                ) : (
                                                    <Sun className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                                                )}
                                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                                    {isDark ? "Dark" : "Light"}
                                                </span>
                                            </button>
                                        </div>

                                        {/* Search */}
                                        <button
                                            onClick={openGlobalCommand}
                                            className="flex items-center gap-3 w-full px-5 py-4 text-slate-600 dark:text-slate-400 font-medium bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 hover:bg-white/60 dark:hover:bg-slate-800/60 rounded-2xl transition-all group"
                                        >
                                            <Search className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                                            {t.landingNav.actions.search || "Cari..."}
                                        </button>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="p-6 border-t border-slate-100/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
                                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 text-lg font-semibold hover:shadow-blue-500/50 transition-all active:scale-[0.98]">
                                            {t.landingNav.actions.startFree || "Mulai Gratis"}
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>
                                    <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                                        {t.landingNav.actions.microCopy || "Hanya butuh 30 detik."}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

// Helper removed as Mega Menu is gone

