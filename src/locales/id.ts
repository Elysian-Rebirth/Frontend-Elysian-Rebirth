import type { TranslationKeys } from './en';

export const translationsID: TranslationKeys = {
    common: {
        loading: 'Memuat...',
        save: 'Simpan',
        cancel: 'Batal',
        delete: 'Hapus',
        edit: 'Edit',
        close: 'Tutup',
        search: 'Cari',
        filter: 'Filter',
        export: 'Ekspor',
        import: 'Impor',
    },
    nav: {
        dashboard: 'Dasbor',
        chat: 'Obrolan',
        knowledge: 'Basis Pengetahuan',
        editor: 'Editor Dokumen',
        settings: 'Pengaturan',
        logout: 'Keluar',
        product: 'Produk',
        solutions: 'Solusi',
        enterprise: 'Perusahaan',
        pricing: 'Harga',
        login: 'Masuk',
        getStarted: 'Mulai Gratis',
        toggleTerminal: 'Ganti Terminal',
        toggleTheme: 'Ganti Tema',
    },
    auth: {
        loginTitle: 'Masuk',
        loginSubtitle: 'Masuk untuk melanjutkan',
        email: 'Email',
        password: 'Kata Sandi',
        login: 'Masuk',
        logout: 'Keluar',
        demoHint: 'Demo: Gunakan email/kata sandi apa saja untuk masuk',
        loginSuccess: 'Login berhasil!',
        loginFailed: 'Login gagal. Silakan coba lagi.',
        accessDenied: 'Akses Ditolak',
        noPermission: 'Anda tidak memiliki izin untuk mengakses halaman ini.',
    },
    dashboard: {
        title: 'Pusat Kontrol AI',
        subtitle: 'Dashboard Operasional',
        breadcrumb: 'Dasbor',
        heading: 'Dasbor',
        description: 'Monitor penggunaan token dan status pipeline.',
        documents: 'Dokumen',
        apiCalls: 'Panggilan API',
        errorRate: 'Tingkat Error',
        knowledgeHealth: 'Kesehatan Pengetahuan',
        activePipelines: 'Pipeline Aktif',
        vectorIndexSync: 'Sinkronisasi Indeks Vektor',
        docsIndexed: 'Dokumen Terindeks',
        success: 'Berhasil',
        fromLastMonth: 'dari bulan lalu',
        fromLastWeek: 'dari minggu lalu',
        withinLimits: 'Dalam batas',
        solidPerformance: 'Performa solid',
    },
    chat: {
        title: 'Obrolan AI',
        subtitle: 'Percakapan dengan Asisten AI',
        placeholder: 'Ketik pesan Anda...',
        send: 'Kirim',
    },
    knowledge: {
        title: 'Basis Pengetahuan',
        subtitle: 'Konfigurasi & Manajemen RAG',
        chunkingStrategy: 'Strategi Chunking',
        chunkSize: 'Ukuran Chunk',
        overlap: 'Overlap',
        embeddingModel: 'Model Embedding',
        sources: 'Sumber Pengetahuan',
        searchPlayground: 'Playground Pencarian',
        uploadDocument: 'Unggah Dokumen',
    },
    editor: {
        title: 'Editor Dokumen',
        subtitle: 'Pengeditan Human-in-the-Loop',
        save: 'Simpan',
        export: 'Ekspor',
        aiActions: 'Aksi AI',
        rewrite: 'Tulis Ulang',
        summarize: 'Ringkas',
        translate: 'Terjemahkan',
    },
    settings: {
        title: 'Pengaturan',
        subtitle: 'Konfigurasi Aplikasi',
        appearance: 'Tampilan',
        darkMode: 'Mode Gelap',
        language: 'Bahasa',
        languageRegion: 'Bahasa & Wilayah',
        features: 'Fitur',
        advancedMode: 'Mode Lanjutan',
        telemetry: 'Aktifkan Telemetri',
        saveSettings: 'Simpan Pengaturan',
    },
    landingNav: {
        products: {
            title: 'Produk',
        },
        solutions: {
            title: 'Solusi',
        },
        useCases: {
            title: 'Kasus Penggunaan',
        },
        faq: {
            title: 'FAQ',
        },
        actions: {
            startFree: 'Mulai Gratis',
            search: 'Cari',
            microCopy: 'Hanya butuh 30 detik.'
        }
    },
    landing: {
        hero: {
            badge: 'Platform Operasi UMKM Indonesia',
            title1: 'Kelola Bisnis UMKM',
            title2: 'Tanpa Ribet',
            description: 'Semua operasional bisnis proyek, dokumen, dan insight AI  dalam satu sistem yang rapi dan terintegrasi.',
            ctaStart: 'Mulai Gratis',
            ctaDemo: 'Lihat Cara Kerjanya',
            proof: 'Tanpa kartu kredit • Dibangun untuk UMKM Indonesia',
        },
        marquee: ['Retail', 'Logistik', 'Agency', 'Klinik', 'F&B', 'Manufaktur', 'Konsultan', 'Properti'],
        showcase: {
            badge: 'Power of Elysian',
            title1: 'Satu Platform.',
            title2: 'Tiga Kekuatan Utama.',
            description: 'Gabungan kekuatan otomatisasi, pemrosesan dokumen cerdas, dan asisten AI dalam satu ekosistem yang mulus.',
            cards: {
                dev: { title: 'Integrasi Developer', desc: 'Teknologi canggih yang bekerja di belakang layar untuk bisnis Anda.' },
                docs: { title: 'Analisis Dokumen (RAG)', desc: 'Teknologi canggih yang bekerja di belakang layar untuk bisnis Anda.' },
                insights: { title: 'Wawasan Bisnis', desc: 'Teknologi canggih yang bekerja di belakang layar untuk bisnis Anda.' }
            }
        },
        deepDive: {
            badge: 'Deep Dive',
            title1: 'Manajemen Proyek',
            title2: 'Tanpa Hambatan.',
            description: 'Elysian memberikan visibilitas total dari ide hingga eksekusi.',
            cards: {
                cycles: { title: 'Automated Cycles', desc: 'Lacak progress sprint tim Anda secara otomatis dengan grafik intuitif.' },
                inbox: { title: 'Smart Inbox', desc: 'Review, approve, atau decline request yang masuk dengan cepat.' },
                insights: { title: 'Elysian Insights', desc: 'Prediksi bottleneck dan optimalkan performa tim dengan analitik data berbasis AI.', action: 'View Report' }
            }
        },
        integration: {
            badge: 'Ecosystem',
            title1: 'Terhubung dengan',
            title2: 'Tools Favorit Anda.',
            description: 'Elysian terintegrasi dengan ratusan aplikasi untuk menjaga alur kerja tim Anda tetap lancar.',
            hint: 'Geser untuk melihat lebih banyak',
            items: {
                slack: { title: 'Slack Notification', desc: 'Dapatkan update real-time langsung di channel tim Anda.' },
                figma: { title: 'Figma Sync', desc: 'Tarik aset desain dan komentar langsung ke task manager.' },
                github: { title: 'GitHub Actions', desc: 'Otomatisasi deployment dan sync status issue.' },
                drive: { title: 'Google Drive', desc: 'Akses dan lampirkan dokumen cloud tanpa berpindah tab.' },
                notion: { title: 'Notion Pages', desc: 'Embed halaman wiki dan knowledge base internal.' },
                postgres: { title: 'PostgreSQL', desc: 'Hubungkan database Anda untuk analytics custom.' },
                gmail: { title: 'Gmail Add-on', desc: 'Ubah email menjadi task atau tiket support dalam satu klik.' },
                cta: 'Pelajari lebih lanjut'
            }
        },
        agents: {
            badge: 'Elysian Neural Network',
            title1: 'Delegasikan tugas ke',
            title2: 'AI Agents Spesialis.',
            description: 'Pilih agent yang tepat untuk setiap pekerjaan. Dari analis data hingga auditor keamanan, semua siap bekerja 24/7.',
            demo: {
                assign: 'Tugaskan ke...',
                processing: 'Memproses konteks...',
                available: '4 Agent tersedia'
            },
            items: {
                analyst: { name: 'Data Analyst AI', role: 'Financial Insights' },
                editor: { name: 'Content Editor', role: 'SEO & Copywriting' },
                compliance: { name: 'Compliance Bot', role: 'Legal & Audit' },
                coder: { name: 'Dev Assistant', role: 'Code Review' }
            }
        },
        terminal: {
            logs: {
                system: 'Memulai platform Elysian... (IAM | MDM | Compliance)',
                scan: 'Memvalidasi modul keamanan dan orkestrasi workflow...',
                ready: 'Orkestrasi workflow cerdas diaktifkan.',
                success: 'Sistem Terhubung. Menunggu instruksi operator.',
                compliance: 'SOC 2 Controls Verified ✓ CC1 (Entitas) ✓ CC2 (Komunikasi) ✓ CC3 (Risiko)',
                operational: 'Semua sistem operasional.',
                welcome: 'Selamat datang di Konsol Sistem Elysian.',
                help: 'Ketik "help" untuk melihat daftar perintah, atau klik icon terminal di atas untuk kembali ke mode visual.'
            }
        },
        problem: {
            title1: 'Mengapa Bisnis',
            title2: 'Sering Stuck?',
            description: 'Banyak tim terjebak dalam operasional manual yang mematikan inovasi. Waktu habis untuk hal teknis, bukan strategis.',
            items: [
                'Dokumen tersebar di berbagai platform',
                'Keputusan lambat tanpa data terpusat',
                'SOP sulit diakses dan dijalankan',
                'Workflow manual yang rentan human error'
            ],
            solutionTitle: 'Solusi Elysian',
            solutionItems: [
                { title: 'Otomatisasi Cerdas', desc: 'Kurangi beban kerja manual hingga 80%' },
                { title: 'Single Source of Truth', desc: 'Semua dokumen dan data dalam satu akses' },
                { title: 'AI Assistant Terintegrasi', desc: 'Bekerja lebih cepat dengan bantuan AI kontekstual' }
            ],
            cta: 'Transformasi Cara Kerja Anda'
        },
        features: {
            title: 'Fitur yang Mengangkat Bisnis',
            subtitle: 'Platform all-in-one untuk operasional modern',
            items: {
                ai: { title: 'AI Assistant', desc: 'Partner cerdas untuk setiap keputusan' },
                docs: { title: 'Document Hub', desc: 'Kolaborasi dokumen real-time' },
                security: { title: 'Enterprise Security', desc: 'Keamanan data tingkat lanjut' },
                automation: { title: 'Workflow Engine', desc: 'Jalankan proses bisnis secara otomatis' }
            }
        },
        useCases: {
            title: 'Dibangun untuk Skala Apa Saja',
            subtitle: 'Fleksibel menyesuaikan kebutuhan tim Anda, dari startup hingga enterprise.',
            items: {
                retail: { title: 'Tim Produk', items: ['Roadmap management', 'PRD Automation', 'User Feedback'] },
                logistics: { title: 'Tim Operasional', items: ['SOP Management', 'Incident Reporting', 'Resource Planning'] },
                agency: { title: 'Tim Engineering', items: ['Tech Specs', 'Sprint Planning', 'Knowledge Base'] },
                clinic: { title: 'Tim HR & Legal', items: ['Onboarding Flow', 'Contract Management', 'Compliance'] }
            }
        },
        cta: {
            badge: 'Bergabung dengan Revolusi AI',
            title1: 'Siap Membuat Bisnis Anda',
            title2: 'Lebih Ringan?',
            description: 'Bergabunglah dengan ribuan tim yang telah beralih ke cara kerja masa depan. Hemat waktu, kurangi stres.',
            btnStart: 'Mulai Uji Coba Gratis',
            btnConsult: 'Hubungi Sales',
            foot: 'Tanpa kartu kredit. Batalkan kapan saja.'
        },
        faq: {
            title: 'Pertanyaan Umum',
            subtitle: 'Jawaban untuk keraguan Anda',
            q1: 'Apakah data bisnis saya aman?',
            a1: 'Sangat aman. Kami menggunakan enkripsi standar industri (AES-256) dan SOC2 compliance.',
            q2: 'Bisa integrasi dengan tools lain?',
            a2: 'Ya! Elysian terintegrasi dengan Slack, Jira, GitHub, dan ribuan aplikasi lainnya via API.',
            q3: 'Apakah ada masa percobaan?',
            a3: 'Tentu. Anda bisa mencoba paket Pro gratis selama 14 hari tanpa komitmen.',
            q4: 'Bagaimana untuk Enterprise?',
            a4: 'Kami menyediakan private cloud, SLA khusus, dan dedicated support untuk klien Enterprise.'
        }
    }
};
