/**
 * Data proyek portofolio.
 *
 * - repoUrl / demoUrl: kosongkan jika belum ada. Tombolnya tidak akan dirender
 *   sebagai tautan aktif, melainkan diganti keterangan "belum ditautkan".
 * - image: kosongkan untuk memakai mockup ilustratif CSS. Jika screenshot asli
 *   sudah tersedia, isi dengan path publik, contoh "/assets/images/proyek-1.png".
 *   Mockup CSS BUKAN screenshot dan hanya placeholder visual.
 * - mockup: jenis ilustrasi CSS ("loans" | "certification" | "school").
 */
export const projects = [
  {
    id: "peminjaman-alat",
    title: "Aplikasi Peminjaman Alat",
    type: "Web App",
    summary:
      "Aplikasi web untuk mengelola proses peminjaman dan pengembalian alat, membantu pencatatan inventaris, serta mendukung pemantauan kondisi alat dan denda.",
    tech: ["Laravel", "PHP", "MySQL", "Filament"],
    features: [
      "Pencatatan peminjaman dan pengembalian alat",
      "Manajemen data inventaris",
      "Pemantauan kondisi alat",
      "Pencatatan denda",
    ],
    repoUrl: "",
    demoUrl: "",
    image: "",
    imageAlt: "",
    mockup: "loans",
  },
  {
    id: "sertifikasi-siswa",
    title: "Web Sertifikasi Siswa",
    type: "Web App",
    summary:
      "Aplikasi pengelolaan peserta sertifikasi dan skema sertifikasi dengan fitur CRUD, relasi data, validasi, serta pembatasan akses berdasarkan role.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: [
      "CRUD peserta",
      "CRUD skema sertifikasi",
      "Relasi peserta–skema",
      "Pencarian dan validasi data",
      "Login dengan akses admin/user",
    ],
    repoUrl: "",
    demoUrl: "",
    image: "",
    imageAlt: "",
    mockup: "certification",
  },
  {
    id: "profil-tk-angkasa-8",
    title: "Website Profil Sekolah (TK Angkasa 8)",
    type: "Website",
    summary:
      "Website profil sekolah yang menyajikan informasi sekolah dalam tampilan responsif dan mudah diakses.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5"],
    features: ["Halaman profil sekolah", "Tampilan responsif"],
    repoUrl: "",
    demoUrl: "",
    image: "",
    imageAlt: "",
    mockup: "school",
  },
];
