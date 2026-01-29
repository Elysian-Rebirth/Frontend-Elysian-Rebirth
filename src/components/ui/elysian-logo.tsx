import Image from 'next/image';

interface ElysianLogoProps {
    className?: string;
    size?: number;
    variant?: 'default' | 'white';
}

export function ElysianLogo({ className = "", size = 64 }: ElysianLogoProps) {
    return (
        <div className={`relative flex items-center justify-center p-4 ${className}`} style={{ width: size + 32, height: size + 32 }}>
            {/* Softer Transparent Highlight Container */}
            <div className="absolute inset-0 bg-white/10 dark:bg-blue-900/10 backdrop-blur-xl border border-white/20 dark:border-blue-400/10 rounded-[2rem] shadow-xl" />

            {/* Logo Highlight Glow */}
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl opacity-50" />

            <Image
                src="/logo.svg"
                alt="Elysian Logo"
                width={size}
                height={size}
                className="relative z-10 w-full h-full object-contain scale-110 transform drop-shadow-[0_0_20px_rgba(255,255,255,0.65)]"
            />
        </div>
    );
}

export function ElysianTextLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <ElysianLogo size={32} />
            <span className="font-bold text-xl tracking-tight text-slate-900">
                Elysian
            </span>
        </div>
    )
}
