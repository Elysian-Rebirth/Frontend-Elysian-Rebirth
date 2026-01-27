
"use client";


import { Separator } from '@/components/ui/separator';
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Send,
} from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="relative w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border-t border-slate-100 dark:border-slate-800">
            {/* Elegant Top Separator (Subtle Shadow/Glow) */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-900 dark:to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column - Wider */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-heading tracking-tighter">
                                ELYSIAN
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md font-medium">
                                Asisten Operasional Cerdas terdepan di Indonesia yang didedikasikan untuk membantu UMKM. Kami menggabungkan kecerdasan buatan canggih untuk mengotomatiskan proses, memberikan wawasan mendalam, dan memacu pertumbuhan bisnis Anda.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 shadow-sm transition-all border border-slate-200 dark:border-slate-700">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 shadow-sm transition-all border border-slate-200 dark:border-slate-700">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-700 shadow-sm transition-all border border-slate-200 dark:border-slate-700">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 shadow-sm transition-all border border-slate-200 dark:border-slate-700">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">Solusi Bisnis</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400" />Otomatisasi Dokumen</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400" />Analisis Keuangan AI</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400" />Manajemen Inventaris</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400" />Prediksi Tren Pasar</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400" />Integrasi ERP</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">Dukungan</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/help" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pusat Bantuan</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dokumentasi API</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Status Server</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Komunitas Pengguna</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Hubungi Sales</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">Hubungi Kami</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded text-blue-600 dark:text-blue-400"><Send className="h-3 w-3" /></div>
                                <span>Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan SCBD, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded text-blue-600 dark:text-blue-400"><Twitter className="h-3 w-3" /></div>
                                <span>hello@elysian.ai</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded text-blue-600 dark:text-blue-400"><Facebook className="h-3 w-3" /></div>
                                <span>+62 21 5555 8888</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-slate-200 dark:bg-slate-800" />

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                    <p>© 2024 Elysian Rebirth Intelligence. Terdaftar di PSE Kominfo.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kebijakan Privasi</Link>
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link>
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pernyataan Aksesibilitas</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
