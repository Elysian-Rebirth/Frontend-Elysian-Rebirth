'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Check, Moon, Sun, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function AppearancePage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="max-w-7xl mx-auto md:mx-0">

            {/* 3-Col Layout */}
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Main Content: Theme Cards */}
                <div className="flex-1 min-w-0 space-y-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Appearance</h2>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                                <Laptop className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">System</h3>
                                <p className="text-xs text-slate-500">Follows device settings</p>
                            </div>
                        </div>
                        {theme === 'system' && (
                            <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Info Tip */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3 text-xs text-blue-700 dark:text-blue-300">
                <div className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                </div>
                <p>
                    Changes will apply to this device only. Your other sessions will remain unchanged.
                </p>
            </div>
        </div>
    );
}
