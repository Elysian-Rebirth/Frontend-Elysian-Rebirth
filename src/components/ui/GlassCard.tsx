import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "transparent" | "solid"; // Transparent for metrics, Solid for tables
}

export function GlassCard({ className, variant = "transparent", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-xl transition-all duration-300",
                variant === "transparent" ? "glass-obsidian hover:bg-slate-900/70 hover:shadow-lg hover:-translate-y-1" : "glass-obsidian-solid",
                className
            )}
            {...props}
        />
    );
}
