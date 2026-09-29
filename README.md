# 🚀 Personal Portfolio & Service Portal (Week 4)

**Nama:** Winda N.V. Sitorus  
**NIM:** 12S24019  
**Mata Kuliah:** Pemrograman dan Pengujian Web  
**Program Studi:** S1 Sistem Informasi - Institut Teknologi Del  

---

## 📝 Deskripsi Proyek Keseluruhan

Proyek ini dikembangkan sebagai bagian dari penugasan mata kuliah Pemrograman dan Pengujian Web. Website ini dirancang sebagai media portofolio personal dan portal layanan interaktif yang menampilkan identitas akademik, galeri proyek keahlian dengan tema warna *Soft Blue* yang elegan, serta formulir pemesanan layanan konsultasi profesional. Dalam perancangannya, proyek ini berfokus pada penerapan standar rekayasa perangkat lunak web kontemporer yang estetik, responsif, aksesibel, dan memiliki performa tinggi.

### Evolusi Arsitektur & Implementasi Teknis
Pembangunan aplikasi ini melalui tiga fase transformasi arsitektur utama:
1. **Pondasi Semantik & Styling Mandiri (Minggu 2):** 
   Halaman web diinisialisasi menggunakan struktur tag semantik HTML5 standar (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) untuk menjamin aksesibilitas dan kemudahan navigasi. Tampilan visual dibangun menggunakan CSS murni dengan pendekatan *Box Model*, aturan harmonisasi warna *60-30-10*, tipografi modern, serta tata letak berbasis *Flexbox* dan *Grid*[cite: 1].
2. **Modernisasi Kerangka Kerja Bootstrap 5 (Minggu 3):** 
   Proyek mengalami *refactoring* visual dengan mengintegrasikan kerangka kerja *Bootstrap 5.3* dan *Bootstrap Icons* via CDN. Desain antarmuka ditingkatkan menggunakan sistem grid responsif 12-kolom, komponen *Responsive Navbar* dengan tombol *hamburger toggle*, *Cards*, serta *Floating Labels* pada formulir interaktif[cite: 2]. Kustomisasi gaya diperhalus melalui arsitektur variabel CSS (`:root`) tanpa mengandalkan deklarasi `!important`[cite: 2].
3. **Arsitektur Decoupled Multi-Tier & Dynamic CSR (Minggu 4):** 
   Transformasi mutakhir diterapkan dengan memisahkan lapisan presentasi dan lapisan data (*Separation of Concerns*). Seluruh data statis diekstrak ke dalam direktori `/data` dalam format file JSON mandiri (`profile.json`, `projects.json`, `services.json`)[cite: 7]. Halaman web kini menerapkan model *Dynamic Client-Side Rendering* (CSR), di mana browser menggunakan JavaScript modern (`fetch()` dan `async/await`) untuk memuat dan merender konten secara asinkron[cite: 7]. Selain itu, diterapkan pula komponen *Universal Dynamic Modal* untuk detail proyek, serta pengiriman formulir asinkron dengan penyimpanan data lokal menggunakan `localStorage`[cite: 7].

---

## 🏗️ Diagram Arsitektur C4 Container Model

Diagram berikut memetakan pemisahan tugas (*Separation of Concerns*) antara lapisan presentasi, logika asinkron, dan lapisan data terstruktur:

```mermaid
graph TD
    Client[Browser Pengguna / Frontend] -->|Memuat HTML Shell| CDN[Static Server / GitHub Pages]
    Client -->|Fetch API / Async| DataLayer[JSON Data Providers]
    Client -->|HTTP POST| FormAPI[Mock REST API]
    
    subgraph Layer Penyimpanan Data (Data Storage Tier)
        DataLayer --> P[projects.json]
        DataLayer --> S[services.json]
        DataLayer --> U[profile.json]
    end