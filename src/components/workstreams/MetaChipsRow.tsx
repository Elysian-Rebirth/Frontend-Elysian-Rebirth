import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type MetaChip = {
    label?: string;
    value: string | ReactNode;
    icon?: ReactNode;
};

type MetaChipsRowProps = {
    items: MetaChip[];
    className?: string;
};

// Use React.memo as requested by the Senior Engineer to prevent re-renders when tokens tick up quickly
export const MetaChipsRow = React.memo(function MetaChipsRow({ items, className }: MetaChipsRowProps) {
    return (
        <div className={cn("flex flex-wrap items-center gap-2", className)}>
            {items.map((item, idx) => (
                <div key={`${item.label || 'chip'}-${idx}`} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-[#0B1120]/60 border border-slate-200/50 dark:border-slate-800/60 backdrop-blur-md shadow-sm transition-all hover:bg-white/60 dark:hover:bg-slate-800/60">
                        {item.icon ? <span className="text-slate-400 dark:text-slate-500 flex-shrink-0">{item.icon}</span> : null}
                        {item.label && <span className="text-[11px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{item.label}:</span>}
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {item.value}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
});
