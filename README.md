# 🚀 Personal Portfolio & Service Portal (Week 4)

**Nama:** Winda N.V. Sitorus  
**NIM:** 12S24019  
**Mata Kuliah:** Pemrograman dan Pengujian Web  
**Program Studi:** S1 Sistem Informasi - Institut Teknologi Del  

---

## 🌐 Latar Belakang & Tujuan Proyek
Proyek ini dikembangkan sebagai bentuk penerapan praktis dari mata kuliah Pemrograman dan Pengujian Web. Tujuan utamanya adalah membangun sebuah platform digital profesional yang berfungsi ganda sebagai **Portofolio Akademik** (menampilkan profil mahasiswa dan galeri proyek keahlian) serta **Portal Layanan Interaktif** (tempat pengguna dapat mengajukan permohonan layanan atau konsultasi).

Dalam pengembangannya, proyek ini dirancang agar memenuhi standar rekayasa perangkat lunak modern, yaitu:
1. **Responsif & Estetik:** Tampilan antarmuka menyesuaikan berbagai ukuran layar dan menggunakan palet warna yang menenangkan (*Soft Blue Theme*).
2. **Performa Tinggi:** Memanfaatkan teknik pemuatan data asinkron dan pengelolaan *caching* yang efisien.
3. **Pemisahan Tugas (Separation of Concerns):** Memisahkan struktur tampilan, logika pemrosesan, dan sumber data agar kode mudah dirawat (*maintainable*) dan dikembangkan.

---

## 📈 Evolusi dan Transformasi Arsitektur

Pembangunan aplikasi ini melalui tiga fase transformasi arsitektur utama yang merefleksikan kemajuan tingkat penguasaan materi web:

### 1. Pondasi Semantik & Styling Mandiri (Minggu 2)
* **Fokus:** Membangun struktur dasar dokumen menggunakan elemen semantik HTML5 murni (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* **Penerapan:** Mengatur tata letak visual (*layout*) menggunakan CSS murni dengan pendekatan *Box Model*, aturan harmonisasi warna *60-30-10*, tipografi yang mudah dibaca, serta formulir interaktif dasar. Pada tahap ini, seluruh data teks masih ditulis langsung di dalam file HTML (*hardcoded*).

### 2. Modernisasi Kerangka Kerja & CSS Advanced (Minggu 3)
* **Fokus:** Meningkatkan skalabilitas desain antarmuka dengan mengintegrasikan kerangka kerja profesional, yaitu **Bootstrap 5.3** dan **Bootstrap Icons** via CDN.
* **Penerapan:** Mengganti *styling* manual dengan sistem *grid* responsif 12-kolom milik Bootstrap, membuat *Responsive Navbar* yang dilengkapi tombol *hamburger toggle* untuk tampilan seluler, serta memanfaatkan *Cards* dan *Floating Labels*. *Styling* diperhalus menggunakan variabel CSS kustom (`:root`) untuk memudahkan pengelolaan tema warna.

### 3. Arsitektur Decoupled Multi-Tier & Dynamic CSR (Minggu 4)
* **Fokus:** Mengubah total arsitektur aplikasi menjadi sistem berlapis yang modern dan dinamis (*Decoupled Architecture*).
* **Penerapan:** 
  1. **Decoupled Data Layer:** Seluruh data teks (profil, daftar proyek, dan katalog layanan) dikeluarkan dari file HTML dan dipindahkan ke dalam direktori `/data` dalam format file JSON mandiri (`profile.json`, `projects.json`, `services.json`).
  2. **Client-Side Rendering (CSR):** Halaman web kini menggunakan JavaScript modern (`fetch()` API dan `async/await`) untuk mengambil data dari file JSON secara asinkron dan merendernya langsung ke dalam DOM peramban.
  3. **Komponen Interaktif Lanjutan:** Mengonfigurasi *Universal Dynamic Modal* (satu elemen modal tunggal yang kontennya berubah dinamis berdasarkan ID proyek yang diklik) serta menerapkan sistem *asynchronous form submission* yang menyimpan riwayat pesanan ke dalam `localStorage` peramban.

---

## 📊 Analisis Kinerja Jaringan (Network Profiling DevTools)

Berdasarkan hasil pengujian menggunakan peramban DevTools, berikut adalah tabel perbandingan performa pemuatan halaman web:

| Parameter Evaluasi | Cold Load (Akses Pertama) | Warm Load (Refresh / Akses Ulang) |
| :--- | :--- | :--- |
| **Status Kode HTTP** | `200 OK` | `304 Not Modified` / `(disk cache)` |
| **Time to First Byte (TTFB)** | ~180 ms | ~4 ms |
| **Total Waktu Pemuatan (FCP)**| ~450 ms | ~35 ms |
| **Analisis Perbandingan** | Peramban mengunduh seluruh aset berkas secara penuh dari server, sehingga membutuhkan waktu muat awal standar. | Terjadi penghematan *bandwidth* secara drastis dan pemuatan halaman menjadi jauh lebih cepat berkat pemanfaatan *caching* lokal peramban. |