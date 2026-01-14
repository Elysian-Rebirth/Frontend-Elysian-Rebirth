'use client';

import { Button } from '@/ui/primitives/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/primitives/card';
import {
    Rocket,
    Zap,
    Shield,
    Store,
    Truck,
    PenTool,
    Stethoscope,
    Utensils,
    Factory,
    GraduationCap,
    FileText,
    Bot,
    Workflow,
    Database,
    Users,
    CheckCircle2,
    XCircle
} from 'lucide-react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/config';
import { LandingNavbar } from '@/components/LandingNavbar';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <LandingNavbar />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[url('/dashboard-bg.png')] bg-cover bg-center bg-no-repeat pt-32 pb-80">
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                        {APP_NAME}
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 drop-shadow-sm">
                        Platform AI Enterprise untuk UMKM Indonesia
                    </p>
                    <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                        Elysian Rebirth adalah platform AI terpadu yang membantu UMKM dan organisasi bisnis di Indonesia mengubah dokumen, proses, dan operasi sehari-hari menjadi alur kerja otomatis yang cerdas dan efisien.
                        <br /><span className="text-slate-900 font-bold block mt-2">Tidak perlu tim IT besar—cukup unggah data, atur alur kerja, dan AI akan bekerja untuk Anda.</span>
                    </p>
                    <Link href="/dashboard">
                        <Button
                            size="lg"
                            className="h-14 px-12 text-lg rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 bg-blue-600 hover:bg-blue-700 text-white transition-all transform hover:-translate-y-1"
                        >
                            <Rocket className="mr-2 h-5 w-5" />
                            Mulai Sekarang
                        </Button>
                    </Link>
                </div>
                {/* Background Grid/Effect */}
                {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div> */}
            </section>

            {/* Trusted By Section (Infinite Slider) */}
            <section className="py-10 bg-white/80 border-b border-border backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm font-medium text-muted-foreground mb-8">
                        DIPERCAYA OLEH BERBAGAI UMKM INDONESIA
                    </p>
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row w-full max-w-5xl">
                            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-scroll flex-row min-w-full">
                                <LogoItem name="Paper.id" />
                                <LogoItem name="Kopi Kenangan" />
                                <LogoItem name="J&T Cargo" />
                                <LogoItem name="Hijra Bank" />
                                <LogoItem name="eFishery" />
                                <LogoItem name="Halodoc" />
                                <LogoItem name="Sayurbox" />
                                <LogoItem name="Fore Coffee" />
                            </div>
                            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-scroll flex-row min-w-full" aria-hidden="true">
                                <LogoItem name="Paper.id" />
                                <LogoItem name="Kopi Kenangan" />
                                <LogoItem name="J&T Cargo" />
                                <LogoItem name="Hijra Bank" />
                                <LogoItem name="eFishery" />
                                <LogoItem name="Halodoc" />
                                <LogoItem name="Sayurbox" />
                                <LogoItem name="Fore Coffee" />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa yang Bisa Dilakukan Elysian Rebirth?</h2>
                        <p className="text-lg text-muted-foreground">Solusi lengkap untuk modernisasi bisnis Anda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="h-6 w-6 text-blue-400" />
                                </div>
                                <CardTitle>Otomatisasi Dokumen</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-2">
                                <p>• Membaca dan merangkum kontrak & invoice</p>
                                <p>• Ekstraksi data dari PDF & nota</p>
                                <p>• Susun SOP, proposal, & laporan otomatis</p>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Bot className="h-6 w-6 text-teal-400" />
                                </div>
                                <CardTitle>Asisten AI Internal</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-2">
                                <p>• Chatbot untuk tanya jawab staf</p>
                                <p>• Cari data di seluruh dokumen perusahaan</p>
                                <p>• FAQ otomatis untuk training karyawan</p>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Workflow className="h-6 w-6 text-amber-400" />
                                </div>
                                <CardTitle>Workflow Tanpa Koding</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-2">
                                <p>• Proses approval otomatis</p>
                                <p>• Notifikasi follow-up pelanggan</p>
                                <p>• Order → Stok → Invoice otomatis</p>
                            </CardContent>
                        </Card>

                        {/* Feature 4 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Database className="h-6 w-6 text-purple-400" />
                                </div>
                                <CardTitle>Manajemen Pengetahuan</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-2">
                                <p>• Sentralisasi dokumen penting</p>
                                <p>• Ubah file lama jadi knowledge base</p>
                                <p>• Pencarian cerdas dalam hitungan detik</p>
                            </CardContent>
                        </Card>

                        {/* Feature 5 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors lg:col-span-2 lg:mx-auto lg:w-2/3">
                            <CardHeader>
                                <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-rose-400" />
                                </div>
                                <CardTitle>Human-In-The-Loop (HIL)</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-2">
                                <p>• AI bekerja cepat, manusia tetap pegang kendali.</p>
                                <p>• Ideal untuk Keuangan, Legal, Kesehatan, & Konsultan.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Feature Spotlight Section */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 text-blue-500 font-semibold bg-blue-500/10 px-4 py-2 rounded-full">
                                <FileText className="h-5 w-5" />
                                <span>Otomatisasi Dokumen</span>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">
                                Praktis, Cepat, <span className="text-blue-500">Akurasi Tinggi</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Upload invoice, kontrak, atau laporan keuangan Anda, dan biarkan AI kami mengekstrak data penting dalam hitungan detik. Dokumen digital Anda kini siap diolah tanpa input manual yang melelahkan.
                            </p>

                            <ul className="space-y-4 pt-4">
                                <FeatureCheckItem text="Ekstraksi data otomatis dari PDF & Gambar" />
                                <FeatureCheckItem text="Export langsung ke Excel atau Database" />
                                <FeatureCheckItem text="Validasi data cerdas untuk meminimalkan error" />
                            </ul>

                            <div className="pt-6">
                                <Link href="/dashboard">
                                    <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                                        Lihat Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="flex-1 w-full relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl opacity-50"></div>

                            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-md shadow-2xl p-8 aspect-video flex items-center justify-center group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 group-hover:scale-105 transition-transform duration-700"></div>

                                <div className="text-center relative z-10">
                                    <div className="w-24 h-24 bg-background border border-border rounded-xl shadow-lg mx-auto mb-6 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <FileText className="h-10 w-10 text-blue-500" />
                                    </div>
                                    <div className="w-64 h-3 bg-muted rounded-full mx-auto mb-3 overflow-hidden">
                                        <div className="h-full bg-blue-500/50 w-2/3 animate-pulse"></div>
                                    </div>
                                    <div className="w-48 h-3 bg-muted rounded-full mx-auto overflow-hidden">
                                        <div className="h-full bg-teal-500/50 w-1/2 animate-pulse delay-75"></div>
                                    </div>
                                    <p className="mt-8 text-sm font-medium text-muted-foreground">AI Scanning in Progress...</p>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-10 left-10 p-3 bg-background rounded-lg shadow-lg border border-border animate-bounce slow-bounce">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    </div>
                                </div>
                                <div className="absolute bottom-10 right-10 p-3 bg-background rounded-lg shadow-lg border border-border animate-bounce slow-bounce delay-300">
                                    <div className="text-xs font-bold text-foreground">100% Digital</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Siapa yang Cocok Menggunakan Ini?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <UseCaseCard
                            icon={Store}
                            color="text-orange-400"
                            title="Produk & Retail"
                            items={['Analisis transaksi harian', 'Manajemen stok otomatis', 'AI Copywriting untuk produk']}
                        />
                        <UseCaseCard
                            icon={Truck}
                            color="text-blue-400"
                            title="Logistik & Ekspor"
                            items={['Dokumen pengiriman', 'Manajemen bea cukai', 'Tracking info barang']}
                        />
                        <UseCaseCard
                            icon={PenTool}
                            color="text-pink-400"
                            title="Creative Agency"
                            items={['Copywriting otomatis', 'Pembuat pitch & proposal', 'Analisis insight customer']}
                        />
                        <UseCaseCard
                            icon={Stethoscope}
                            color="text-red-400"
                            title="Kesehatan"
                            items={['SOP Otomatis', 'Ringkasan operasional', 'Kepatuhan regulasi']}
                        />
                        <UseCaseCard
                            icon={Utensils}
                            color="text-yellow-400"
                            title="F&B (Kuliner)"
                            items={['SOP Dapur', 'Checklist harian', 'Hitung HPP & Resep']}
                        />
                        <UseCaseCard
                            icon={Factory}
                            color="text-slate-400"
                            title="Manufaktur Kecil"
                            items={['Manual mesin & alat', 'Quality Assurance (QA) AI', 'Tracking produksi']}
                        />
                        <UseCaseCard
                            icon={GraduationCap}
                            color="text-indigo-400"
                            title="Pendidikan"
                            items={['Pembuatan kurikulum', 'Otomatisasi laporan', 'Asisten siswa/anggota']}
                        />
                    </div>
                </div>
            </section>

            {/* Problem Solving Section */}
            <section className="py-20 bg-secondary/10 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Masalah UMKM yang Diselesaikan</h2>
                            <div className="space-y-4">
                                <ProblemItem text="Dokumen penting tercecer & hilang" />
                                <ProblemItem text="Pengambilan keputusan lambat karena data tidak siap" />
                                <ProblemItem text="Tidak ada standar operasional (SOP) yang jelas" />
                                <ProblemItem text="Ketergantungan tinggi pada tenaga manual" />
                                <ProblemItem text="Pengetahuan bisnis hilang saat karyawan keluar" />
                                <ProblemItem text="Owner terjebak mengerjakan hal teknis sendirian" />
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Nilai Utama Elysian Rebirth</h3>
                            <ul className="space-y-4">
                                <ValueItem text="Lebih Cepat Operasional" />
                                <ValueItem text="Hemat Waktu & Tenaga Kerja" />
                                <ValueItem text="Meningkatkan Akurasi Kerja" />
                                <ValueItem text="Scale Tanpa Tambah Orang" />
                                <ValueItem text="Informasi Selalu Siap Sedia" />
                            </ul>
                            <div className="mt-8 pt-6 border-t border-border">
                                <Link href="/dashboard">
                                    <Button className="w-full text-lg h-12">
                                        Coba Gratis Sekarang
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function UseCaseCard({ icon: Icon, title, items, color }: { icon: any, title: string, items: string[], color: string }) {
    return (
        <Card className="hover:shadow-lg transition-shadow border-border/60">
            <CardHeader className="pb-2">
                <div className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-2 ${color}`}>
                    <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

function ProblemItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-lg text-muted-foreground">
            <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
            <span>{text}</span>
        </div>
    )
}

function ValueItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 font-medium">
            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
            <span>{text}</span>
        </div>
    )
}

function LogoItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center px-4 py-2 bg-secondary/20 rounded-lg text-muted-foreground font-semibold text-lg whitespace-nowrap hover:text-foreground hover:bg-secondary/40 transition-colors cursor-default">
            {name}
        </div>
    )
}

function FeatureCheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-foreground/80 font-medium">{text}</span>
        </div>
    )
}
