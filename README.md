# ZAKI — Portofolio Muhammad Faiz Al Zaki

Portofolio satu halaman untuk **Muhammad Faiz Al Zaki (ZAKI)**, siswa Rekayasa Perangkat Lunak yang sedang mendalami backend development. Tema visualnya adalah **FONDASI + JALUR**: tenang, terstruktur, dan terasa seperti gambar kerja arsitek, bukan landing page yang ramai.

Situs dibangun sebagai proyek statis dengan **HTML5 semantik, CSS3, dan JavaScript ES Modules murni**, lalu dibundel memakai **Vite**. Tidak ada framework UI, backend, database, jQuery, atau library animasi.

> **Status:** build produksi berhasil. Situs belum dideploy dan data kontak asli belum diisi.

**Daftar isi:** [Tema dan arah visual](#tema-dan-arah-visual) · [Fitur](#fitur) · [Teknologi](#teknologi) · [Mulai menjalankan](#mulai-menjalankan) · [Struktur proyek](#struktur-proyek) · [Kustomisasi](#kustomisasi) · [Deploy ke Vercel](#deploy-ke-vercel) · [Aksesibilitas dan performa](#aksesibilitas-dan-performa) · [Status pengujian](#status-pengujian)

## Tema dan Arah Visual

- **FONDASI** diwakili rumah garis tangan yang digambar sekali di hero, lalu diam.
- **JALUR** diwakili satu garis vertikal tipis dari section Beranda sampai Kontak. Garis ini digambar mengikuti scroll dengan `stroke-dashoffset` dan tetap penuh saat pengguna memilih `prefers-reduced-motion`.
- Palet utama: Warm Ivory `#FAF7F0`, Ink Navy `#172A46`, Forest Green `#16845B`, Soft Gray `#E8E8E4`, dan White `#FFFFFF`.
- Sky Blue `#8ED8F8` hanya dipakai untuk keadaan hover/focus, bukan untuk dekorasi tetap.
- Tipografi: **Bricolage Grotesque** untuk heading, **Public Sans** untuk teks, dan **IBM Plex Mono** untuk label teknis.
- Grid halus hanya muncul di hero dan section Kontak. Garis tipis, label `FIG. 01`–`FIG. 05`, crop mark, dan dimension line dipakai secukupnya.
- Tidak ada sakura, ombak dekoratif, pedang, kitsune, gradient blob, glow, glassmorphism, atau ornamen anime.

## Fitur

- Satu halaman dengan bagian **Beranda, About Me, Skills, Projects, dan Kontak**.
- Navigasi desktop dan menu mobile, penanda menu aktif, smooth scrolling, serta fokus ke heading tujuan.
- **Logo rumah simbolik** tanpa huruf, angka, atau wordmark. Logo yang sama dipakai di navbar, footer, favicon, dan gambar Open Graph.
- **Bata**, maskot pembangun/penjaga fondasi berbentuk inline SVG orisinal: badan bulat, helm kecil, dua mata titik, dan lengan yang melambai.
- Maskot besar di hero, lalu mengecil di sudut kanan bawah setelah hero terlewati.
- Balon dialog maskot mengikuti section yang sedang terlihat. Semua teksnya diatur dari `src/config/mascot.js`.
- Tombol jeda animasi maskot, plus dukungan `prefers-reduced-motion`.
- Maskot dock dan tombol kembali ke atas otomatis disembunyikan saat menutupi form, tautan, tombol, atau teks footer.
- Kalimat personal opsional di About melalui `aboutPersonalLine`.
- Kartu proyek dengan modal detail, tag teknologi, dan tautan repository/demo yang hanya muncul jika sudah diisi.
- Form kontak dengan validasi sisi klien, dukungan Formspree opsional, dan fallback `mailto:` jika email dikonfigurasi.
- Footer dengan tahun dinamis, navigasi, dan tautan GitHub opsional.
- Mockup proyek berbasis HTML/CSS sebagai ilustrasi placeholder, bukan screenshot palsu.
- Layout responsif untuk 360 px dan 390 px tanpa horizontal overflow, dengan safe-area inset, target sentuh minimal 44 px, dan ukuran teks form 16 px.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Markup | HTML5 semantik + inline SVG |
| Styling | CSS3 (custom properties, grid, flexbox, media queries) |
| Interaksi | JavaScript ES Modules |
| Build tool | Vite 7 |
| Font | Google Fonts: Bricolage Grotesque, Public Sans, IBM Plex Mono |
| Deployment | Vercel (static) |

## Mulai Menjalankan

Prasyarat: **Node.js 20.19+ atau 22.12+** (dibutuhkan Vite 7) dan npm.

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal, biasanya `http://localhost:5173`.

### Build produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`. `npm run preview` menjalankan server lokal untuk memeriksa hasil build, biasanya di `http://localhost:4173`.

## Struktur Proyek

```text
.
├── index.html                  # Markup halaman, logo, rumah, maskot, dan journey SVG
├── public/
│   ├── favicon.svg             # Rumah simbolik tanpa teks
│   ├── robots.txt
│   └── assets/images/
│       └── og-cover.png        # Gambar Open Graph 1200 × 630, tanpa teks
├── src/
│   ├── main.js                 # Entry point dan inisialisasi modul
│   ├── assets/icons/           # Ikon SVG
│   ├── config/
│   │   ├── site.js             # Identitas, aboutPersonalLine, kontak, Formspree, URL situs
│   │   ├── projects.js         # Data proyek
│   │   ├── skills.js           # Data skill dan legendanya
│   │   └── mascot.js           # Nama Bata + semua teks balon dialog
│   ├── scripts/
│   │   ├── animations.js       # Tahun footer, back-to-top, dan gambar garis JALUR
│   │   ├── contact.js          # Tautan kontak + validasi form
│   │   ├── mascot.js           # Perilaku maskot dan dock
│   │   ├── navigation.js       # Menu mobile, header, menu aktif
│   │   ├── projects.js         # Kartu proyek + modal detail
│   │   ├── skills.js           # Render skill dari konfigurasi
│   │   └── utils.js            # Escape HTML + validasi URL
│   └── styles/
│       ├── main.css            # Token, layout, journey, hero, section
│       ├── components.css      # Navbar, kartu, modal, maskot, form
│       └── responsive.css      # Breakpoint, safe area, dan target sentuh
├── vite.config.js
└── package.json
```

## Kustomisasi

### 1. Identitas, kontak, dan kalimat personal — `src/config/site.js`

```js
export const site = {
  brand: "ZAKI",
  fullName: "Muhammad Faiz Al Zaki",
  role: "RPL Student · Aspiring Backend Developer",
  school: "SMKN 64 Jakarta",
  location: "Jakarta, Indonesia",

  // Opsional. Kosongkan ("") untuk menyembunyikan paragraf ini.
  aboutPersonalLine: "Anak pertama yang ingin membangun sesuatu yang berguna untuk keluarga.",

  email: "",
  github: "",
  linkedin: "",
  formspreeEndpoint: "",
  siteUrl: "",
};
```

Catatan:

- `aboutPersonalLine` dirender sebagai paragraf pendek bergaris hijau di bagian About. Jika nilainya kosong, elemen disembunyikan otomatis.
- `email`, `github`, dan `linkedin` **sengaja kosong** di repositori ini karena data asli belum diberikan. Selama kosong, tautan kontak tidak dirender dan muncul keterangan edukatif, bukan tautan palsu.
- `github` yang kosong juga menyembunyikan tautan GitHub di footer.
- `siteUrl` dipakai untuk canonical URL dan URL absolut gambar Open Graph. Isi setelah domain final tersedia.
- Jangan menaruh API key atau secret di file frontend. Endpoint Formspree boleh publik; secret tidak boleh.

### 2. Proyek — `src/config/projects.js`

Setiap proyek mendukung:

```js
{
  id: "slug-unik",
  title: "Nama Proyek",
  type: "Web App",
  summary: "Deskripsi singkat.",
  tech: ["Laravel", "PHP", "MySQL"],
  features: ["Fitur satu", "Fitur dua"],
  repoUrl: "https://github.com/username/repo", // kosongkan jika belum ada
  demoUrl: "https://demo.example.com",          // kosongkan jika belum ada
  image: "",                                     // kosong = pakai mockup CSS
  imageAlt: "",
  mockup: "loans",                               // "loans" | "certification" | "school"
}
```

- Tautan repository/demo hanya dirender jika URL valid dan diawali `https://` atau `http://`.
- Jika keduanya kosong, modal menampilkan keterangan bahwa tautan belum ditambahkan.
- Mockup adalah **ilustrasi HTML/CSS**, bukan screenshot. Untuk gambar asli, isi `image` dengan path publik dan `imageAlt` yang deskriptif.

### 3. Skill — `src/config/skills.js`

Tambahkan atau ubah grup dan item. Level ditampilkan sebagai label jujur (`Practicing`, `Familiar`, `Learning`), bukan persentase atau progress bar. Legend otomatis dirender dari `skillLevels`.

### 4. Teks maskot — `src/config/mascot.js`

Semua dialog maskot berada di satu tempat, dikelompokkan berdasarkan id section:

```js
export const mascot = {
  name: "Bata",
  species: "Penjaga fondasi",
  messages: {
    hero: "Halo, selamat datang di rumahku.",
    tentang: "Di sini aku cerita dikit soal diriku.",
    skills: "Ini perkakas yang sehari-hari kupakai.",
    projects: "Ini yang sudah kubangun.",
    kontak: "Ada ide? Ngobrol yuk.",
  },
  defaultSection: "hero",
};
```

Maskot memakai `IntersectionObserver` untuk mengganti teks sesuai bagian yang terlihat. Tombol **Jeda animasi** hanya menghentikan animasi maskot, bukan animasi halaman lain. Saat sistem memakai `prefers-reduced-motion`, animasi dinonaktifkan otomatis dan tombolnya menjadi nonaktif.

### 5. Logo, favicon, dan gambar OG

- Logo rumah ada sebagai inline SVG di `index.html` dengan `aria-label="Beranda"` pada tautannya. Tidak ada huruf, angka, atau wordmark di dalam gambar.
- `public/favicon.svg` memakai simbol rumah yang sama, tanpa teks.
- `public/assets/images/og-cover.png` adalah gambar 1200 × 630 berisi rumah garis, grid, crop mark, dan dimension line. Tidak ada teks di dalam gambar.
- Jika mengganti salah satunya, pertahankan bentuk simbolik dan jangan menambahkan wordmark. Logo harus tetap jelas pada ukuran 24 px.

### 6. Form kontak — Formspree

Form memakai validasi JavaScript untuk nama, email, dan pesan. Ada dua kondisi:

1. **`formspreeEndpoint` kosong** — form tidak mengirim data. Pengguna melihat instruksi untuk mengisi konfigurasi. Jika `email` diisi, muncul tautan `mailto:` yang sudah terisi subjek dan isi pesan. Tidak ada pesan “berhasil” palsu.
2. **`formspreeEndpoint` diisi** — form mengirim `POST` JSON ke endpoint Formspree. Jika jaringan atau endpoint gagal, pengguna melihat pesan error dan fallback email (jika tersedia).

Langkah mengaktifkan Formspree:

1. Buat form di <https://formspree.io>.
2. Salin endpoint berbentuk `https://formspree.io/f/xxxxxxxx`.
3. Tempel ke `formspreeEndpoint` di `src/config/site.js`.
4. Build ulang dan uji pengiriman dari domain produksi.

### 7. Warna, font, dan garis JALUR

Token warna dan tipografi berada di bagian atas `src/styles/main.css`:

```css
--ivory: #FAF7F0;
--navy: #172A46;
--forest: #16845B;
--gray: #E8E8E4;
--white: #FFFFFF;
--sky: #8ED8F8; /* hanya hover/focus */
```

Garis JALUR memakai SVG di dalam `index.html`. Posisi horizontalnya dihitung dari tepi kiri container lalu disimpan sebagai `--journey-x` oleh `src/scripts/animations.js`. Pada layar kecil, garis bergeser ke tepi kiri dengan margin kecil. Panjang gambar garis diperbarui dari posisi scroll; saat `prefers-reduced-motion` aktif, garis langsung tampil penuh dan tidak berubah saat scroll.

## Deploy ke Vercel

### Lewat dashboard

1. Push proyek ini ke repository GitHub/GitLab/Bitbucket.
2. Di Vercel, pilih **Add New → Project** lalu impor repository.
3. Vercel biasanya mendeteksi Vite otomatis. Jika tidak, isi:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy.
5. Setelah domain final didapat, isi `siteUrl` di `src/config/site.js`, lalu deploy ulang agar canonical dan OG image absolut benar.

### Lewat Vercel CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

Proyek ini adalah situs statis, jadi tidak memerlukan environment variable atau server khusus. **Deployment belum dilakukan** dalam pengerjaan ini; langkah di atas adalah instruksi, bukan klaim bahwa situs sudah online.

## Aksesibilitas dan Performa

- Struktur heading, landmark, skip link, label form, dan `aria-*` sudah diterapkan.
- Fokus modal dikembalikan ke tombol pemicu setelah ditutup; `Esc` dan klik backdrop juga menutup modal.
- Menu mobile dapat ditutup dengan `Esc`, klik di luar, atau memilih tautan.
- Semua tautan dan tombol yang terlihat memiliki target sentuh minimal 44 × 44 px; teks body dan input berukuran 16 px.
- Navbar, dock maskot, dan back-to-top memakai `env(safe-area-inset-*)`.
- Animasi rumah dan maskot berhenti saat `prefers-reduced-motion: reduce`; garis JALUR tampil statis penuh.
- Dekorasi dikurangi: tidak ada shadow besar, gradient blob, glow, atau kumpulan kartu yang seragam tanpa hierarki.
- Gambar OG tidak memuat teks agar tetap bersih di berbagai rasio pratinjau.

## Status Pengujian

Yang sudah diverifikasi pada build ini:

- `npm run build` berhasil dengan Vite 7.3.7.
- Halaman produksi dimuat tanpa error di console Chromium.
- Layout diperiksa pada lebar 360, 390, 660, 1024, dan 1440 px; tidak ditemukan horizontal overflow atau teks terpotong.
- Navigasi mobile: toggle, `aria-expanded`, penutupan lewat tautan, dan fokus ke heading bagian tujuan.
- Menu aktif mengikuti bagian yang terlihat.
- Modal proyek: buka/tutup, fokus awal, `Esc`, pengembalian fokus ke tombol pemicu, dan keadaan tautan kosong.
- Form kontak: submit kosong, email tidak valid, pesan terlalu pendek, nilai valid tanpa endpoint, fokus ke field pertama yang error, dan tidak ada klaim sukses palsu.
- Maskot: teks per bagian, buka/tutup balon, tombol jeda, nama aksesibel yang memuat label visual, dan penyembunyian dock saat menutupi form kontak.
- Back-to-top: muncul setelah hero, kembali ke atas, memfokuskan heading, serta disembunyikan saat menutupi form/tautan/teks footer.
- Target sentuh dan ukuran teks form diperiksa pada 360 dan 390 px.
- Garis JALUR diperbarui saat scroll; posisi dan ketebalannya diperiksa pada layar kecil.
- `prefers-reduced-motion`: garis JALUR langsung penuh, animasi rumah selesai tanpa gerak, dan maskot berhenti dengan tombol nonaktif.
- Ikon rumah dan aset OG diperiksa tidak mengandung huruf, angka, atau wordmark.
- Lighthouse untuk **Accessibility, Best Practices, dan SEO** pada build final: skor **100** untuk ketiganya.
- Emulasi seluler 320, 360, 390, dan 412 px plus orientasi lanskap 844 × 390: tidak ada horizontal overflow, target sentuh minimal 44 px, dan input tetap 16 px.
- Emulasi user agent Android Chrome dan iPhone Safari: layout, `svh`/`dvh`, dan safe-area fallback tetap utuh (safe-area bernilai 0 di emulator, bukan pengganti perangkat berponi).
- Uji axe-core pada 390 dan 1440 px: 0 violation; kontras teks diperiksa manual terhadap latar ivory/navy.
- Form kontak diuji pada build sementara dengan endpoint HTTPS mock: kirim sukses, gagal server, offline, status mengirim, reset form, dan tautan `mailto:` cadangan. Payload dan header request ikut diperiksa.
- Tautan kontak diuji dengan data contoh: `mailto:`, GitHub/LinkedIn, `target="_blank"`, dan `rel="noopener noreferrer"`.
- Build bersih `npm ci` + `npm run build` dari salinan proyek berhasil, lalu `dist/` disajikan dengan server statis: semua aset lokal 200, path tak dikenal 404, dan tidak ada referensi `localhost` di bundel.
- Teks 200% pada 320 dan 360 px tidak lagi menimbulkan overflow; menu seluler tetap bisa digulir.

Perbaikan dari QA terakhir:

- Kontras label indeks kartu proyek dinaikkan ke `--forest-deep`.
- Tag skill dan kotak catatan kontak dibuat bisa membungkus agar zoom teks 200% tidak melebihi lebar layar.
- Tombol toggle navigasi dipindah sebelum `<nav>` di DOM supaya `Tab` setelah membuka menu langsung masuk ke tautan menu.

Yang **belum** diuji:

- Perangkat fisik (Android/iOS) dan browser selain Chromium; hasil di atas berasal dari emulasi, bukan perangkat nyata.
- Pembaca layar nyata (NVDA/JAWS/VoiceOver); yang dilakukan hanya audit axe-core dan pemeriksaan accessibility tree.
- Pengiriman Formspree nyata, karena endpoint belum dikonfigurasi; jalur sukses/gagal/offline baru diuji dengan server mock.
- Tautan email, GitHub, dan LinkedIn nyata, karena datanya belum diberikan; tautan baru diuji dengan data contoh.
- Deployment Vercel dan pengujian domain produksi; yang diuji hanya build bersih dan penyajian statis lokal.

## Lisensi dan Aset

Kode dan desain boleh disesuaikan untuk keperluan portofolio pemilik. Logo rumah, maskot **Bata**, dan ilustrasi mockup digambar khusus sebagai SVG/CSS orisinal; tidak ada aset anime, karakter berhak cipta, atau wordmark pihak lain yang dipakai. Ikon kecil di `src/assets/icons/` adalah SVG sederhana buatan sendiri. Font dimuat dari Google Fonts dan mengikuti lisensi masing-masing font.
