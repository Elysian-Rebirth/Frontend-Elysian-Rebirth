import Image from 'next/image';

interface ElysianLogoProps {
    className?: string;
    size?: number;
    variant?: 'default' | 'white';
}

export function ElysianLogo({ className = "", size = 54 }: ElysianLogoProps) {
    return (
        <Image
            src="/logo.svg"
            alt="Elysian Logo"
            width={size}
            height={size}
            className={`relative z-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] ${className}`}
        />
    );
}

export function ElysianTextLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <ElysianLogo size={54} />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#338DB0] to-[#479BBA] dark:from-blue-100 dark:via-blue-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm font-heading">
                Elysian
            </span>
        </div>
    )
}
