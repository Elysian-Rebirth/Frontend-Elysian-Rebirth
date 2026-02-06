'use client';

import { Sidebar } from '@/components/Sidebar';
import { DashboardNavbar } from '@/components/DashboardNavbar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full bg-slate-50 dark:bg-zinc-950">
            {/* Sidebar Sticky for Desktop */}
            <div className="hidden md:block sticky top-0 h-screen flex-none">
                <Sidebar />
            </div>

            <main className="flex-1 flex flex-col min-h-screen relative w-full overflow-x-hidden">
                {/* Navbar is strictly static here to push content down */}
                <div className="flex-none">
                    <DashboardNavbar staticMode />
                </div>

                <div id="main-scroll-container" className="flex-1 pb-16 md:pb-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
