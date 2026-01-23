import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Infinity as InfinityIcon, ArrowRight, Sun, Moon, Terminal, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/hooks/useTranslation';

export function LandingNavbar({ showTerminal, setShowTerminal }: { showTerminal?: boolean; setShowTerminal?: (v: boolean) => void }) {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            style={{ transform: 'translateZ(0)' }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/50 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-1.5 rounded-lg shadow-xl shadow-blue-500/20 shine-effect relative overflow-hidden">
                        <InfinityIcon className="w-5 h-5" />
                    </div>
                    <span className={cn(
                        "font-bold text-2xl tracking-tighter transition-colors font-heading",
                        scrolled ? "text-slate-900 dark:text-white" : "text-slate-900"
                    )}>
                        ELYSIAN
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: t.nav.product, href: '/product' },
                        { name: t.nav.solutions, href: '/solutions' },
                        { name: t.nav.enterprise, href: '/enterprise' },
                        { name: t.nav.pricing, href: '/pricing' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side: Auth & Toggles */}
                <div className="flex items-center gap-3">
                    {/* Visual Toggles */}
                    <div className="hidden md:flex items-center gap-1 mr-2 px-3 py-1.5 rounded-full bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                        <button
                            onClick={() => setShowTerminal && setShowTerminal(!showTerminal)}
                            className={cn(
                                "p-2 rounded-full transition-all duration-200",
                                showTerminal
                                    ? "bg-white dark:bg-slate-700 text-blue-600 shadow-sm"
                                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            )}
                            title={showTerminal ? "Switch to Visual View" : "Switch to System Console"}
                        >
                            <span className="sr-only">Toggle Terminal</span>
                            {showTerminal ? <Monitor className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                        </button>

                        <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-400 hover:text-amber-500 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-200"
                            title="Toggle Theme"
                        >
                            <span className="sr-only">Toggle Theme</span>
                            {mounted && theme === 'dark' ? (
                                <Sun className="w-4 h-4" />
                            ) : (
                                <Moon className="w-4 h-4" />
                            )}
                        </button>
                    </div>

                    <Link href="/login">
                        <Button
                            variant="ghost"
                            className="hidden sm:inline-flex text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                        >
                            {t.nav.login}
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button
                            className={cn(
                                "rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/25 shadow-lg shadow-blue-500/20 border border-transparent transition-all",
                                scrolled ? "h-9 px-4 text-sm" : "h-10 px-6"
                            )}
                        >
                            {t.nav.getStarted}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
