/**
 * Konfigurasi utama situs.
 *
 * PENTING: nilai yang masih kosong ("") sengaja tidak diisi dengan data palsu.
 * Isi nilainya dengan data asli sebelum deploy. Komponen yang membutuhkan
 * nilai kosong akan disembunyikan atau menampilkan keterangan.
 */
export const site = {
  brand: "ZAKI",
  fullName: "Muhammad Faiz Al Zaki",
  role: "RPL Student · Aspiring Backend Developer",
  school: "SMKN 64 Jakarta",
  location: "Jakarta, Indonesia",

  /**
   * Kalimat personal opsional untuk bagian About.
   * Kosongkan ("") bila tidak ingin menampilkannya; elemen akan hilang otomatis.
   */
  aboutPersonalLine: "Anak pertama yang ingin membangun sesuatu yang berguna untuk keluarga.",

  // Contoh: "halo@zaki.dev"
  email: "",

  // Contoh: "https://github.com/username"
  github: "",

  // Contoh: "https://www.linkedin.com/in/username"
  linkedin: "",

  /**
   * Endpoint Formspree untuk form kontak.
   * Buat form di https://formspree.io lalu tempel URL endpoint-nya di sini.
   * Contoh: "https://formspree.io/f/xxxxxxxx"
   *
   * Jangan pernah menaruh API key/secret di file frontend.
   */
  formspreeEndpoint: "",

  /**
   * URL situs final untuk metadata Open Graph.
   * Contoh: "https://zaki.vercel.app"
   */
  siteUrl: "",
};
