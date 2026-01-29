# Implementation Plan: Elysian Single-Page Experience & Navbar Refactor

## 1. Analisis & Masalah Saat Ini
*   **Masalah**: Setup Mega Menu (popup) terlalu kompleks dan "cluttered".
*   **Konten**: Konten spesifik (PT Emran, Percetakan) tidak relevan dengan identitas core Product (Elysian).
*   **UX**: User merasa terganggu dengan navigasi yang "membual" atau terlalu spesifik. User menginginkan "1 Page" flow yang seamless.

## 2. Strategi Baru: "Linear Enterprise Narrative"
Kita akan mengubah landing page menjadi **Single Page Application (SPA)** flow yang linear. Navigasi tidak lagi membuka popup besar, melainkan menghantarkan user ke bagian relevan di halaman yang sama dengan smooth scroll. Ini standar umum untuk SaaS modern (Linear, Raycast, Vercel) yang fokus pada konversi.

### Perubahan Navigasi (Navbar)
*   **Tipe**: Sticky Glassmorphism (Tetap di atas saat scroll).
*   **Item Menu**:
    1.  **Produk** → Scroll ke `#features` (Product Showcase).
    2.  **Solusi** → Scroll ke `#solutions` (Use Cases / Problems).
    3.  **Harga** → Scroll ke `#pricing` (Section Baru).
    4.  **Perusahaan** → Scroll ke `#faq` atau Footer.
*   **Interaksi**: Tidak ada dropdown. Klik langsung scroll. Sederhana, Cepat, Elegan.
*   **Action Kanan**:
    *   Search (Cmd+K) untuk akses cepat.
    *   Theme Toggle (Siang/Malam).
    *   **Primary CTA**: "Mulai Gratis" (Glow Effect).

## 3. Perubahan Halaman Utama (`app/page.tsx`)
Kita akan menambahkan ID pada section agar navigasi berfungsi, dan menambahkan section **Pricing** yang hilang.

*   **Hero Section**: Tetap (Elysian V2.0 Public Beta).
*   **Feature Section**: Tambahkan `id="features"`. Fokus pada: "AI Assistant", "Document Hub", "Workflow".
*   **Solution Section**: Tambahkan `id="solutions"`. Hapus referensi spesifik toko/percetakan jika ada di copy hardcoded, ganti dengan "Enterprise Efficiency", "Automated Operations".
*   **Pricing Section (BARU)**: Tambahkan `id="pricing"`. Tampilkan 3 tier simpel:
    *   **Starter** (Gratis/Murah).
    *   **Pro** (Best Value - Fokus UMKM).
    *   **Enterprise** (Custom).
*   **FAQ/Footer**: Target untuk link "Perusahaan".

## 4. Visual & "Feel"
*   **Warna**: Dominan Putih & Soft Blue (Elysian Ether) di Light Mode. Deep Slate & Neon Blue di Dark Mode.
*   **Animasi**: Smooth scroll, fade-in elements. Tidak ada animasi "bouncy" yang berlebihan di menu.
*   **Copywriting**: Fokus ke **Capabilities** (Kemampuan Sistem), bukan Studi Kasus spesifik.
    *   *Bad*: "Solusi untuk Percetakan Pak Budi".
    *   *Good*: "Otomatisasi Operasional untuk Bisnis Modern".

## 5. Langkah Eksekusi
1.  **Refactor `LandingNavbar.tsx`**: Hapus kode Mega Menu komplek. Ganti dengan simple Links.
2.  **Update `app/page.tsx`**:
    *   Tambahkan prop `id` ke section utama.
    *   Buat komponen `PricingSection` sederhana namun elegan.
    *   Pastikan scroll offset akurat (memperhitungkan tinggi navbar).
3.  **Cleanup Locales**: Hapus terjemahan "Percetakan/Emran" dari `src/locales/id.ts`.

---
*Plan ini memastikan fokus 100% pada Brand Elysian, menghilangkan distraksi "PT Emran", dan memberikan pengalaman *Enterprise Grade* yang mulus.*
