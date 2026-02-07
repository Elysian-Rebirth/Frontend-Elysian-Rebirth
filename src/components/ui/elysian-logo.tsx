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
        <div className={`flex items-center gap-2 ${className}`}>
            <ElysianLogo size={40} />
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-[#338DB0] to-[#479BBA] dark:from-blue-100 dark:via-blue-200 dark:to-white bg-clip-text text-transparent font-heading drop-shadow-sm transition-all hover:brightness-110">
                Elysian
            </span>
        </div>
    )
}
