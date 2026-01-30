'use client';

import { Command, Search, Bell, Menu, LayoutDashboard, Users, Shield, ToggleLeft, FileText, Activity, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: Users, label: "Tenants", href: "/admin/tenants" },
    { icon: Shield, label: "RBAC Matrix", href: "/admin/rbac" },
    { icon: ToggleLeft, label: "Feature Flags", href: "/admin/flags" },
    { icon: FileText, label: "Audit Logs", href: "/admin/audit" },
    { icon: Activity, label: "AI Observability", href: "/admin/ai-monitor" },
];

export function AdminHeader() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50 backdrop-blur-sm bg-slate-950/80 border-b border-white/5">
            {/* Mobile Menu Trigger */}
            <div className="md:hidden mr-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-400">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-72 bg-slate-950 border-r border-white/10 p-0 text-slate-200">
                        <div className="flex flex-col h-full">
                            <div className="p-5 flex items-center gap-3 bg-gradient-to-b from-rose-950/20 to-transparent">
                                <div className="p-2 bg-rose-600/20 border border-rose-500/30 rounded-lg shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                                    <ShieldAlert className="w-5 h-5 text-rose-500" />
                                </div>
                                <div>
                                    <h1 className="font-bold text-sm tracking-[0.2em] text-rose-500">GOD MODE</h1>
                                    <p className="text-[10px] uppercase text-slate-500 tracking-wider">Mobile Access</p>
                                </div>
                            </div>

                            <nav className="flex-1 px-3 py-4 space-y-1">
                                {menuItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                                                isActive
                                                    ? "bg-rose-600/10 text-rose-400 border border-rose-500/20"
                                                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                                            )}
                                        >
                                            <item.icon className={cn("w-5 h-5", isActive ? "text-rose-400" : "text-slate-500")} />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Search Trigger (Hidden on very small mobile) */}
            <div className="flex items-center flex-1 max-w-sm hidden md:flex">
                <Button
                    variant="outline"
                    className="w-full justify-start text-slate-400 bg-white/5 border-white/10 hover:bg-white/10 hover:text-slate-200 transition-colors rounded-xl h-10"
                    onClick={() => { }}
                >
                    <Search className="mr-2 h-4 w-4" />
                    <span className="text-xs">Type &gt; to run commands...</span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-white/10 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100 ml-auto border border-white/5 hidden lg:inline-flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4 ml-auto">
                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full">
                    <Bell className="h-5 w-5" />
                </Button>
                <div className="h-6 w-px bg-white/10 mx-2 hidden md:block"></div>
                <div className="flex flex-col items-end hidden md:flex">
                    <span className="text-xs font-bold text-slate-200">Super Admin</span>
                    <span className="text-[10px] text-slate-500 font-mono">security@elysian.com</span>
                </div>
                <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-gradient-to-br from-rose-500 to-indigo-600 ring-2 ring-offset-2 ring-offset-slate-950 ring-rose-500/50 shadow-[0_0_15px_rgba(225,29,72,0.4)]"></div>
            </div>
        </header>
    );
}
