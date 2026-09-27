# Portofolio Pribadi & Portal Layanan Konsultasi - Winda N.V. Sitorus

Proyek ini adalah pemenuhan Tugas Mandiri Praktikum Pemrograman Web (Modul 3) - Institut Teknologi Del. Website ini merupakan **Personal Portfolio & Service Portal** yang dirancang secara modern, responsif, dan interaktif menggunakan *framework* Bootstrap 5.3 dan arsitektur CSS tingkat lanjut.

## 📖 Tentang Website Ini
Website ini berfungsi sebagai identitas digital profesional dan galeri karya akademik milik Winda N.V. Sitorus, mahasiswa Sistem Informasi. Melalui website ini, pengunjung dapat:
*   **Mengenal Profil Pengembang:** Membaca latar belakang, minat eksplorasi, dan fokus keahlian utama (UI/UX, Basis Data T-SQL, Pemrograman Java, dan aktivitas *Public Speaking* / MC).
*   **Melihat Portofolio:** Menjelajahi riwayat proyek akademik dan praktikum (seperti Konsep Aplikasi Kesehatan, Trigger & Audit Logging, hingga Platform Kantin) yang disajikan dalam bentuk *Grid Card* responsif dengan detail informasi yang muncul melalui *Pop-up Modal*.
*   **Mengajukan Kolaborasi:** Menggunakan formulir layanan interaktif untuk menghubungi dan menawarkan kolaborasi proyek, bantuan desain, atau kebutuhan MC secara langsung.

## 👤 Informasi Pengembang
* **Nama:** Winda N.V. Sitorus
* **NIM:** 12S24019
* **Program Studi:** S1 Sistem Informasi
* **Mata Kuliah:** Pemrograman dan Pengujian Web (12S3101)

## 🌐 Live Demo
[🔗 Klik di sini untuk melihat Live Demo Web Portofolio (GitHub Pages)](#) 
*(Catatan: Ganti tanda # dengan tautan GitHub Pages milikmu yang aktif)*

## 🚀 Spesifikasi Teknis & Pembaruan (Refactoring Modul 3)
Website ini telah direfaktor dari versi HTML murni (Tugas 2) menjadi standar web modern dengan spesifikasi berikut:
1. **Responsive Navbar & Hero:** Implementasi navigasi `sticky-top` dengan tombol *hamburger toggle* yang berfungsi sempurna di perangkat seluler tanpa *error console*, serta *hero section* yang proporsional.
2. **Sistem Grid 12-Kolom & Modal Dialog:** Data riwayat proyek diubah dari bentuk tabel menjadi kumpulan Kartu Proyek (`.card`) yang responsif. Dilengkapi dengan interaktivitas Bootstrap Modal untuk menampilkan detail riwayat proyek.
3. **Modernisasi Formulir:** Pembaruan antarmuka formulir konsultasi menggunakan *Floating Labels* (`.form-floating`), *Input Groups* berikon, dan integrasi umpan balik validasi visual otomatis (`.valid-feedback` & `.invalid-feedback`).
4. **Custom CSS Overrides & Variabel Global:** Pendefinisian variabel CSS khusus pada `:root` untuk standarisasi tema warna, penerapan *advanced pseudo-classes*, serta mikro-interaksi kustom tanpa menggunakan deklarasi `!important`.

## 📊 Komparasi: Sebelum vs Sesudah Integrasi Framework

| Area Evaluasi | Minggu 2 (Sebelum) | Minggu 3 (Sesudah Integrasi Bootstrap 5) |
| :--- | :--- | :--- |
| **Tata Letak & Grid** | Menggunakan CSS Flexbox manual dan penyajian proyek dengan Tabel HTML statis. | Menggunakan sistem Grid 12-kolom responsif (`row-cols-md-2`, dll) dan komponen Cards. |
| **Navigasi Utama** | Menu tautan horizontal biasa yang terpotong di layar ponsel. | Komponen Navbar modern dengan *collapsible hamburger menu* (`data-bs-toggle="collapse"`). |
| **Komponen Formulir** | Tipe *input* bawaan *browser* biasa dengan tag `<fieldset>`. | Desain profesional dengan *Floating Labels*, *Input Group*, dan validasi warna otomatis (hijau/merah). |
| **Gaya Visual (CSS)** | Aturan CSS manual (reset bawaan) dan nilai warna ditulis berulang (*hardcode*). | Implementasi CSS Variables di `:root` untuk tema terpusat dan penimpaan gaya Bootstrap secara elegan. |
| **Interaktivitas** | Hanya mengandalkan efek *hover* sederhana pada teks/tautan. | Dilengkapi interaksi tingkat lanjut seperti *Modal pop-up* dan animasi dari *pseudo-element* `::before`. |