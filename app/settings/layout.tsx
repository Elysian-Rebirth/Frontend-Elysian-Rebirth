'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Lock, Bell, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const sidebarItems = [
    { href: '/settings/profile', title: 'Profil', icon: User },
    { href: '/settings/security', title: 'Keamanan', icon: Lock },
    { href: '/settings/appearance', title: 'Tampilan', icon: Palette },
    { href: '/settings/notifications', title: 'Notifikasi', icon: Bell },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {/* Settings Background */}
            <div className="fixed inset-0 z-[-1]">
                <img
                    src="/dashboard-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-75 dark:opacity-40 pointer-events-none"
                />
                {/* Elegant Blue Gradient Overlay - Allows sky/birds to be seen at top */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-white/70 to-white/95 dark:from-blue-950/30 dark:via-slate-950/70 dark:to-slate-950/95 backdrop-blur-[1px]" />
            </div>

            <div className="container max-w-6xl mx-auto py-8 space-y-8 px-4 md:px-6 relative">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Pengaturan</h1>
                    <p className="text-slate-500 dark:text-slate-400">Kelola akun dan preferensi Elysian Anda.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Desktop Sidebar */}
                    <aside className="hidden md:block w-[250px] flex-shrink-0">
                        <nav className="flex flex-col gap-1 sticky top-6">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: 'ghost' }),
                                        "justify-start",
                                        pathname === item.href
                                            ? "bg-blue-50 text-blue-700 font-semibold dark:bg-blue-900/20 dark:text-blue-400"
                                            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                                    )}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}
                                </Link>
                            ))}
                            <Link
                                href="/dashboard"
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    "justify-start text-slate-500 hover:text-slate-900 mt-4"
                                )}
                            >
                                <div className="mr-2 h-4 w-4 rotate-180">➜</div>
                                Back to Dashboard
                            </Link>
                        </nav>
                    </aside>

                    {/* Mobile Navigation (Horizontal Scroll) */}
                    <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                        <div className="flex gap-2 min-w-max">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                        pathname === item.href
                                            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                                    )}
                                >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Content Area (Will house the 2-column Main+Context) */}
                    <main className="flex-1 min-w-0">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
