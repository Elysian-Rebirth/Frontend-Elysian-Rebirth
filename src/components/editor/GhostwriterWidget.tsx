import React from 'react';
import { Sparkles, MoveRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface GhostwriterWidgetProps {
    suggestion: string | null;
    isLoading: boolean;
    onAccept: () => void;
    onDiscard: () => void;
    isMobile?: boolean;
}

export function GhostwriterWidget({
    suggestion,
    isLoading,
    onAccept,
    onDiscard,
    isMobile = false
}: GhostwriterWidgetProps) {
    // Determine positioning based on device
    // Desktop: Following cursor is hard without coordinates, so we'll use a Fixed "smart" position 
    // (e.g., bottom-center or floated right) for this version.
    // A safe bet is bottom-right of the viewport or editor container.

    // Using bottom-center for maximum visibility as requested by "Active Suggestion"

    return (
        <AnimatePresence>
            {(suggestion || isLoading) && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={cn(
                        "z-50 flex items-center gap-3 p-4 rounded-2xl border border-blue-100/50 shadow-2xl shadow-blue-500/10 backdrop-blur-xl",
                        "bg-gradient-to-br from-white/95 to-blue-50/90 dark:from-slate-900/95 dark:to-slate-800/90 dark:border-blue-500/20",
                        isMobile
                            ? "fixed bottom-20 left-4 right-4" // Above keyboard/nav
                            : "absolute bottom-8 right-8 max-w-md" // Inside relative editor container
                    )}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2 text-blue-500">
                            <Sparkles className="h-4 w-4 animate-spin" />
                            <span className="text-xs font-medium animate-pulse">Elysian AI sedang berpikir...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <Sparkles className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                                        SARAN AI
                                    </span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 rounded-full hover:bg-red-50 hover:text-red-500 text-slate-400 dark:hover:bg-slate-800 transition-colors"
                                    onClick={onDiscard}
                                >
                                    <X className="h-3.5 w-3.5" />
                                </Button>
                            </div>

                            <p className="text-sm text-slate-600 dark:text-slate-300 italic pl-3 border-l-2 border-cyan-400 leading-relaxed font-medium">
                                &quot;{suggestion}&quot;
                            </p>

                            <div className="flex justify-end pt-1">
                                <Button
                                    size="sm"
                                    onClick={onAccept}
                                    className="h-8 text-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white gap-2 shadow-lg shadow-blue-500/20 border-0 rounded-lg px-4 transition-all duration-300 hover:scale-105"
                                >
                                    <span className="font-semibold">Terima</span>
                                    <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] hidden sm:inline-block font-mono tracking-tighter">TAB</span>
                                    <MoveRight className="h-3 w-3 sm:hidden" />
                                </Button>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
