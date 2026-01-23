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
    landing: {
        hero: {
            badge: 'Elysian v2.0 Public Beta',
            title1: 'Standar Baru untuk',
            title2: 'Manajemen Produk.',
            description: 'Sistem operasi cerdas untuk tim modern. Gabungkan roadmap, dokumen, dan AI dalam satu harmoni.',
            ctaStart: 'Mulai Sekarang',
            ctaDemo: 'Lihat Demo',
        },
        problem: {
            title1: 'Mengapa Bisnis',
            title2: 'Sering Stuck?',
            description: 'Banyak pemilik bisnis terjebak menjadi "karyawan" di bisnisnya sendiri. Waktu habis untuk hal teknis, bukan strategis.',
            items: [
                'Dokumen penting berantakan di WhatsApp & Email',
                'Keputusan lambat karena data tidak rapi',
                'SOP cuma jadi pajangan dinding',
                'Burnout mengurus operasional harian'
            ],
            solutionTitle: 'Solusi Elysian',
            solutionItems: [
                { title: 'Otomatisasi 80% Pekerjaan Admin', desc: 'Hemat 20+ jam per minggu' },
                { title: 'Pustaka Pengetahuan Terpusat', desc: 'SOP & Dokumen dalam satu akses' },
                { title: 'AI Konteks Lokal', desc: 'Mengerti bahasa bisnis Indonesia' }
            ],
            cta: 'Transformasi Bisnis Sekarang'
        },
        features: {
            title: 'Fitur yang Mengangkat Bisnis',
            subtitle: 'Platform all-in-one untuk operasional bisnis modern',
            items: {
                ai: { title: 'AI Assistant 24/7', desc: 'Jawab pertanyaan tim kapan saja' },
                docs: { title: 'Document Hub', desc: 'Semua file dalam satu tempat' },
                security: { title: 'Advanced Security', desc: 'Standar keamanan perbankan' },
                automation: { title: 'Workflow Automation', desc: 'Otomasi tugas berulang' }
            }
        },
        useCases: {
            title: 'Siapa yang Butuh Elysian?',
            subtitle: 'Platform fleksibel yang beradaptasi dengan model bisnis Anda',
            items: {
                retail: { title: 'Retail & Toko', items: ['Cek stok otomatis', 'Balas chat pelanggan', 'Deskripsi produk'] },
                logistics: { title: 'Logistik', items: ['Tracking kiriman', 'Rekap surat jalan', 'Optimasi rute'] },
                agency: { title: 'Agency', items: ['Ide konten instan', 'Draft proposal', 'Analisis brief'] },
                clinic: { title: 'Klinik', items: ['Rekap medis', 'Jadwal dokter', 'Reminder pasien'] }
            }
        },
        cta: {
            badge: 'Bergabung dengan Revolusi AI',
            title1: 'Siap Membuat Bisnis Anda',
            title2: 'Lebih Ringan?',
            description: 'Bergabunglah dengan 500+ pebisnis yang telah beralih ke cara kerja masa depan. Hemat waktu, kurangi stres.',
            btnStart: 'Mulai Uji Coba Gratis',
            btnConsult: 'Konsultasi Tim',
            foot: 'Tanpa kartu kredit. Batalkan kapan saja.'
        },
        faq: {
            title: 'Pertanyaan Umum',
            subtitle: 'Jawaban untuk keraguan Anda',
            q1: 'Apakah data bisnis saya aman?',
            a1: 'Sangat aman. Kami menggunakan enkripsi standar perbankan (AES-256) dan server yang terisolasi untuk setiap klien.',
            q2: 'Bisa integrasi dengan WhatsApp?',
            a2: 'Ya! Elysian memiliki fitur integrasi WhatsApp Business API resmi untuk auto-reply dan manajemen order.',
            q3: 'Apakah ada training penggunaan?',
            a3: 'Kami menyediakan video tutorial lengkap dan sesi onboarding 1-on-1 untuk paket Premium.',
            q4: 'Bagaimana jika saya ingin berhenti?',
            a4: 'Anda bisa berhenti berlangganan kapan saja. Data Anda bisa diekspor sepenuhnya.'
        }
    }
};
