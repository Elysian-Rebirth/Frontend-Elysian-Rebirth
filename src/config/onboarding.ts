export interface OnboardingStep {
    id: number;
    title: string;
    description: string;
    targetId: string; // The DOM ID to highlight
    label?: string;
    outcome?: string;
    ctaLabel: string;
    navigateTo?: string; // Optional: Auto-navigate to this route
}

export const onboardingSteps: OnboardingStep[] = [
    // INTRO - Dashboard
    {
        id: 1,
        title: "Selamat Datang di Elysian!",
        description: "Ini adalah Dashboard utama Anda. Di sini Anda bisa melihat ringkasan aktivitas, penggunaan token, dan status pipeline terkini.",
        targetId: "dashboard-header",
        label: "MULAI",
        outcome: "Anda sekarang paham pusat kontrol aplikasi",
        ctaLabel: "Mulai Tour",
        navigateTo: "/dashboard"
    },

    // NAVIGATION
    {
        id: 2,
        title: "Navigasi Global",
        description: "Gunakan sidebar ini untuk berpindah antar modul: Dashboard, Chat AI, Knowledge Base, Editor, Workflow, dan Settings.",
        targetId: "main-sidebar",
        label: "NAVIGASI",
        outcome: "Anda tau cara berpindah antar fitur",
        ctaLabel: "Mengerti"
    },

    // AI CHAT
    {
        id: 3,
        title: "AI Assistant - Otak Sistem",
        description: "Klik di sini untuk membuka Chat AI. Anda bisa bertanya apa saja, meminta analisis data, atau memberi perintah otomasi.",
        targetId: "ai-assistant-trigger",
        label: "AI CORE",
        outcome: "Akses ke asisten AI utama",
        ctaLabel: "Lanjut"
    },

    // KNOWLEDGE BASE
    {
        id: 4,
        title: "Knowledge Base - Pustaka Cerdas",
        description: "Upload dokumen perusahaan Anda di sini (SOP, Invoice, Kontrak). AI akan mengindeks dan siap menjawab pertanyaan berdasarkan dokumen ini.",
        targetId: "knowledge-base-trigger",
        label: "KNOWLEDGE",
        outcome: "Sistem 'belajar' dari dokumen Anda",
        ctaLabel: "Paham",
        navigateTo: "/knowledge"
    },

    // EDITOR
    {
        id: 5,
        title: "Smart Editor - Tulis dengan AI",
        description: "Editor canggih untuk menulis dokumen, proposal, atau laporan dengan bantuan AI. Markdown + AI Completion dalam satu tempat.",
        targetId: "editor-trigger",
        label: "EDITOR",
        outcome: "Tool untuk konten berkualitas tinggi",
        ctaLabel: "Oke"
    },

    // WORKFLOW
    {
        id: 6,
        title: "Workflow Builder - Otomasi Visual",
        description: "Buat alur kerja otomatis dengan drag-and-drop. Contoh: 'Saat email masuk → Ekstrak data → Simpan ke database → Kirim notifikasi'",
        targetId: "workflow-trigger",
        label: "AUTOMATION",
        outcome: "Otomasi tanpa coding",
        ctaLabel: "Menarik!"
    },

    // SETTINGS
    {
        id: 7,
        title: "Settings - Kontrol Penuh",
        description: "Kelola tim, API keys, model AI, dan preferensi sistem enterprise di sini.",
        targetId: "settings-trigger",
        label: "SETTINGS",
        outcome: "Kustomisasi sesuai kebutuhan",
        ctaLabel: "Jelas"
    },

    // USER MENU
    {
        id: 8,
        title: "Profil & Akun",
        description: "Akses profil Anda, ganti password, atur notifikasi, atau logout di sini.",
        targetId: "user-menu-trigger",
        label: "AKUN",
        outcome: "Manajemen akun personal",
        ctaLabel: "Selesai"
    }
];
