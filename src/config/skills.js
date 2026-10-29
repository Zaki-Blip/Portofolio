/**
 * Data skill dan level.
 *
 * Level ditampilkan sebagai label, bukan persentase atau progress bar.
 * Sesuaikan secara jujur saat kemampuanmu berkembang.
 *
 * Level yang tersedia:
 * - "Practicing": sedang dilatih dan dipakai untuk latihan/proyek
 * - "Familiar": sudah pernah dipakai, masih di tahap dasar
 * - "Learning": sedang dipelajari, belum dipakai di proyek nyata
 */
export const skillGroups = [
  {
    id: "programming-web",
    title: "Programming & Web",
    description: "Dipakai untuk latihan dan proyek sekolah.",
    items: [
      { name: "PHP", level: "Practicing" },
      { name: "Laravel", level: "Practicing" },
      { name: "MySQL", level: "Practicing" },
      { name: "HTML5", level: "Practicing" },
      { name: "CSS3", level: "Practicing" },
      { name: "JavaScript", level: "Practicing" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Lingkungan kerja untuk belajar dan membangun proyek.",
    items: [
      { name: "Git", level: "Familiar" },
      { name: "GitHub", level: "Familiar" },
      { name: "Visual Studio Code", level: "Familiar" },
      { name: "Laragon", level: "Familiar" },
    ],
  },
];

export const skillLevels = {
  Practicing: "Sedang dilatih dan dipakai untuk latihan atau proyek.",
  Familiar: "Sudah pernah dipakai, masih di tahap dasar.",
  Learning: "Sedang dipelajari, belum dipakai di proyek nyata.",
};
