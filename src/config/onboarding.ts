export interface OnboardingStep {
    id: number;
    title: string;
    description: string;
    targetId: string; // The DOM ID to highlight
    label?: string;
    outcome?: string;
    ctaLabel: string;
}

export const onboardingSteps: OnboardingStep[] = [
    {
        id: 1,
        title: "Pusat Kendali Anda",
        description: "Ini adalah Dashboard utama Elysian. Di sini Anda bisa melihat ringkasan aktivitas, performa AI, dan status workflow terkini.",
        targetId: "dashboard-header", // Need to ensure this ID exists in dashboard 
        label: "START",
        outcome: "Pemahaman navigasi dasar",
        ctaLabel: "Lanjut"
    },
    {
        id: 2,
        title: "Navigasi Global",
        description: "Gunakan sidebar ini untuk berpindah antar modul: Chat, Workbench, Knowledge Base, dan Pengaturan Enterprise.",
        targetId: "main-sidebar", // Need to ensure this ID exists
        label: "NAVIGASI",
        ctaLabel: "Mengerti"
    },
    {
        id: 3,
        title: "AI Assistant",
        description: "Klik di sini untuk mulai berkolaborasi dengan Elysian AI. Anda bisa bertanya, memberi perintah, atau meminta analisis data.",
        targetId: "ai-assistant-trigger", // Need to ensure this ID exists
        label: "AI CORE",
        outcome: "Akses ke fitur utama",
        ctaLabel: "Coba Nanti"
    },
    {
        id: 4,
        title: "Profil & Pengaturan",
        description: "Kelola profil, preferensi notifikasi, dan keamanan akun Anda di sini.",
        targetId: "user-menu-trigger", // Need to ensure this ID exists
        label: "AKUN",
        ctaLabel: "Selesai"
    }
];
