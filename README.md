# AkunAsisten - Aplikasi Pencatatan Akuntansi Digital UMKM

> **Aplikasi web pencatatan akuntansi dan manajemen keuangan digital untuk UMKM** berbasis Next.js App Router, TypeScript, Tailwind CSS, Recharts, dan Supabase PostgreSQL.

Didesain secara presisi mengikuti prototype layanan AkunAsisten dengan dominasi warna pink (#F4519A), layout dashboard modern, kartu ringkasan keuangan otomatis, grafik bar per minggu, komposisi donut beban pengeluaran, tabel transaksi interaktif, manajemen stok persediaan, pencatatan utang-piutang, ekspor laporan ke PDF/Excel, dan modul pelatihan edukasi akuntansi UMKM.

---

## 🚀 Fitur Utama

1. **Dashboard Keuangan (Real-Time Calculation)**
   - 4 Kartu Metrik Keuangan: Pemasukan, Pengeluaran, Laba Bersih, dan Saldo Kas (otomatis dihitung dari mutasi kas).
   - Filter Periode: Harian, Mingguan, Bulanan (September 2026 default), dan Tahunan.
   - Grafik Recharts "Pemasukan vs Pengeluaran" per minggu (Mg 1 s/d Mg 4).
   - Grafik Donut "Komposisi Pengeluaran" (Bahan baku 55%, Gaji 20%, Operasional 15%, Lainnya 10%).
   - Tabel Transaksi Terbaru dengan tombol "Unduh Laporan" dan "Tambah Transaksi".

2. **Pencatatan Transaksi (CRUD Lengkap)**
   - Tambah, Edit, Hapus (dengan konfirmasi aman), dan Detail Transaksi.
   - Pencarian kata kunci & filter berdasarkan jenis, kategori, rentang tanggal, dan metode bayar (Tunai, QRIS, Transfer Bank).
   - Upload & preview foto bukti nota transaksi.
   - Ekspor transaksi ke format CSV / Excel.

3. **Stok Barang & Persediaan (Inventory Management)**
   - Pantau kode, nama, kategori, stok fisik, satuan, harga beli modal, harga jual, dan total nilai persediaan.
   - Peringatan stok menipis (*low stock alert*) otomatis berdasarkan batas minimum stok.
   - Catat stok masuk (+stok), stok keluar (-stok), dan opname fisik dengan riwayat pergerakan (*audit trail*).

4. **Utang & Piutang Usaha**
   - Tab terpisah antara **Utang Pemasok** dan **Piutang Pelanggan**.
   - Catat tanggal jatuh tempo dengan indikator peringatan tempo atau terlambat.
   - Fitur cicilan / pelunasan bertahap dan histori pembayaran.
   - Terintegrasi otomatis ke mutasi kas transaksi tanpa pencatatan ganda.

5. **Laporan Keuangan Komprehensif**
   - Laporan Laba Rugi (*Income Statement*): Pendapatan, HPP Bahan Baku, Beban Operasional, Laba Bersih & Margin Keuntungan.
   - Laporan Arus Kas (*Cash Flow Statement*).
   - Laporan Saldo Kas & Mutasi Fisik.
   - Laporan Utang & Piutang.
   - Laporan Nilai Persediaan Stok.
   - Fitur **Cetak Langsung (Print)**, **Unduh PDF Resmi (jsPDF + autoTable)**, dan **Unduh Excel (.xlsx)**.

6. **Pelatihan & Edukasi Akuntansi UMKM**
   - 7 Modul interaktif pembukuan praktis (Dasar akuntansi, cara catat pemasukan/pengeluaran, hitung laba bersih, manajemen stok, utang-piutang, membaca laporan, dan tips memisahkan uang pribadi & usaha).
   - Status modul selesai / belum selesai.
   - Form konsultasi "Hubungi Pendamping" terhubung langsung dengan WhatsApp dan tiket konsultasi.

7. **Desain Mobile App-Ready**
   - Halaman **`/catat`** dengan layout smartphone khusus sesuai prototype (toggle Pemasukan/Pengeluaran cepat, nominal besar, upload nota, tombol pink simpan transaksi).
   - Navigasi bawah mobile (*bottom bar*): Beranda, Catat, Stok, Utang, Laporan, Akun.

8. **Hybrid Storage Layer (Supabase PostgreSQL + Local Storage Fallback)**
   - Dapat langsung dijalankan secara instan dengan data demo prototype (Warung Makan Bu Sari).
   - Terintegrasi penuh dengan Supabase PostgreSQL melalui file skema `supabase/schema.sql` dan Row Level Security (RLS).

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Ikon**: Lucide React
- **Grafik & Visualisasi**: Recharts
- **Database & Auth**: Supabase PostgreSQL & Supabase Auth
- **Dokumen & Ekspor**: jsPDF, jspdf-autotable, SheetJS (xlsx)
- **Deployment**: Vercel & GitHub

---

## ⚙️ Panduan Menjalankan Proyek Secara Lokal

### 1. Prasyarat
Pastikan komputer Anda telah terinstal Node.js (versi 18+ atau 20+).

### 2. Instalasi Dependency
Buka terminal pada folder proyek ini, lalu jalankan:
```bash
npm install
```

### 3. Konfigurasi Environment Variables (Opsional untuk Supabase)
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

Isi kredensial Supabase Anda (bisa didapatkan gratis dari [supabase.com](https://supabase.com)):
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_ENABLE_DEMO_DATA=true
```

> **Catatan:** Jika Anda belum mengisi kredensial Supabase, aplikasi akan **otomatis tetap berfungsi 100%** menggunakan local storage dan seed data Warung Makan Bu Sari sesuai prototype.

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses: [http://localhost:3000](http://localhost:3000)

### 5. Menjalankan Build Produksi
```bash
npm run build
npm run start
```

---

## 🗄️ Panduan Setup Supabase Database

1. Buka [https://supabase.com](https://supabase.com) dan buat Project baru.
2. Buka menu **SQL Editor** pada Supabase Dashboard.
3. Buka file `supabase/schema.sql` dari repositori ini, salin seluruh kodenya, lalu tempelkan ke SQL Editor Supabase.
4. Klik tombol **Run**. Skema akan membuat seluruh tabel:
   - `profiles`, `businesses`, `transactions`, `transaction_categories`, `inventory_items`, `stock_movements`, `debts`, `receivables`, `debt_payments`, `receivable_payments`, `training_materials`, `accounts`, `journal_entries`, `journal_entry_lines`.
   - Menyiapkan kebijakan Row Level Security (RLS).
   - Memasukkan data awal kategori dan materi pelatihan.
5. Salin URL dan Anon Key dari **Project Settings > API**, lalu tempelkan pada `.env.local` atau pada dashboard Vercel.

---

## 🌐 Panduan Publikasi / Deployment ke Vercel

1. Inisialisasi Git dan commit file proyek:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit akunasisten application"
   ```
2. Buat repository baru di GitHub (misal: `akunasisten`), lalu push:
   ```bash
   git remote add origin https://github.com/USERNAME/akunasisten.git
   git branch -M main
   git push -u origin main
   ```
3. Buka [https://vercel.com](https://vercel.com), klik **"Add New Project"**, lalu import repository GitHub `akunasisten`.
4. Pada bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Klik **Deploy**. Website akan langsung live dalam hitungan detik!

---

## 📂 Struktur Direktori Proyek

```
c:\AkunAsisten\
├── app\
│   ├── layout.tsx             # Root layout with font & AppProvider
│   ├── page.tsx               # Dashboard Keuangan (Prototype exact match)
│   ├── catat\page.tsx         # Mobile Quick Record Transaction page
│   ├── transaksi\page.tsx     # CRUD Transaksi, Filter, Search, Ekspor
│   ├── stok\page.tsx          # Stok Persediaan & Riwayat Mutasi
│   ├── utang-piutang\page.tsx # Utang & Piutang, Cicilan, Jatuh Tempo
│   ├── laporan\page.tsx       # Laporan Laba Rugi, Kas, Export PDF & Excel
│   ├── pelatihan\page.tsx     # Edukasi Akuntansi UMKM & Hubungi Pendamping
│   ├── profil\page.tsx        # Profil Usaha, Saldo Awal, Pengaturan
│   └── login\page.tsx         # Login, Register, & Demo Switch
├── components\
│   ├── Logo.tsx               # Logo resmi AK AkunAsisten
│   ├── Sidebar.tsx            # Pink Sidebar with active pill indicators
│   ├── Header.tsx             # Header bar with period selector & Supabase pill
│   ├── MobileNav.tsx          # Mobile bottom bar
│   ├── TransactionModal.tsx   # Add/Edit transaction with receipt upload
│   ├── AdvisorModal.tsx       # Modal konsultasi & WhatsApp pendamping
│   ├── SupabaseModal.tsx      # Modal petunjuk SQL & status database
│   └── ToastContainer.tsx     # Floating notification toast
├── context\
│   └── AppContext.tsx         # Global state, computed metrics, & persistence
├── lib\
│   ├── initial-data.ts        # Seed data matching prototype figures
│   ├── supabase.ts            # Safe Supabase client initializer
│   └── utils.ts               # Rupiah formatter, date formatter, parser
├── supabase\
│   └── schema.sql             # Skema lengkap PostgreSQL + RLS + Triggers
├── types\
│   └── index.ts               # Definisi tipe TypeScript
├── tailwind.config.ts         # Konfigurasi warna pink prototype & styling
└── package.json
```

---

Dibuat dengan ❤️ untuk kemajuan UMKM Indonesia.

