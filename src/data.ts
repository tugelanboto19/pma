import { Project, Skill, Certificate, TimelineEvent } from './types';

export const personalInfo = {
  name: "Imam Falahi, S.Kom",
  handle: "pma.wtf",
  tagline: "Profesional IT & Legal Operations",
  role: "Profesional IT & Legal",
  location: "Sleman, Yogyakarta, Indonesia",
  phone: "087 888 780 999",
  bio: "Profesional IT & Legal Operations dengan pengalaman lintas industri selama lebih dari 10 tahun. Mengintegrasikan keahlian tingkat lanjut di bidang Informatika dengan hukum korporasi, administrasi pertanahan, perizinan terintegrasi, dan manajemen data perbankan.",
  github: "https://github.com/pmamediajogja-cyber",
  email: "mobho@ymail.com",
  instagram: "https://instagram.com/imamfalahi_",
  philosophy: "Menghadirkan solusi teknologi inovatif, efisien, dan patuh regulasi hukum yang berlaku."
};

export const projectsData: Project[] = [
  {
    id: "fidusia-processor",
    title: "Jaminan Fidusia Processing System",
    description: "Operasional registrasi jaminan Fidusia perbankan terenkripsi berkapasitas tinggi, mengelola standardisasi draf Akta dan finalisasi dokumen digital secara end-to-end.",
    longDescription: "Sistem alur kerja operasional untuk pendaftaran, validasi, dan standardisasi draf Akta Fidusia perbankan. Memiliki rekam jejak penyelesaian bervolume tinggi yang konsisten mencapai 300 dokumen per bulan secara akurat, tanpa cacat hukum, dengan enkripsi data lokal untuk melindungi kerahasiaan arsip legal klien.",
    tags: ["Legal Operations", "Database Security", "Encryption", "Excel Automation"],
    category: "security",
    imageUrl: "https://picsum.photos/seed/fidusia-proc/800/600",
    features: [
      "Pemrosesan registrasi jaminan Fidusia hingga 300 dokumen per bulan",
      "Protokol keamanan enkripsi database lokal untuk arsip klien",
      "Standardisasi template draft Akta otomatis",
      "Integrasi cepat dengan portal registrasi legal perbankan"
    ],
    githubUrl: "https://github.com/pmamediajogja-cyber/fidusia-system",
    liveUrl: "#"
  },
  {
    id: "oss-rba-integration",
    title: "OSS RBA & SIMBG Integration Engine",
    description: "Pendampingan teknis dan pengurusan legalitas usaha terintegrasi secara dinamis bagi puluhan UMKM dan korporasi lokal.",
    longDescription: "Arsitektur konsultasi teknis end-to-end untuk mempercepat pengurusan izin usaha melalui sistem OSS RBA, aktivasi NPWP Badan/Pribadi, dan Persetujuan Bangunan Gedung (PBG) via portal SIMBG. Mengeliminasi bottleneck administratif untuk memastikan kepatuhan absolut terhadap hukum.",
    tags: ["OSS RBA", "SIMBG", "NPWP Activation", "Compliance"],
    category: "development",
    imageUrl: "https://picsum.photos/seed/oss-rba/800/600",
    features: [
      "Pendampingan perizinan usaha komprehensif untuk puluhan UMKM",
      "Penyelarasan alur kerja digital dengan standar kepatuhan pemerintah",
      "Optimasi integrasi portal SIMBG untuk perizinan gedung",
      "Penerbitan dokumen legalitas tanpa kendala administratif"
    ],
    githubUrl: "#"
  },
  {
    id: "payroll-attendance-hr",
    title: "Automated HR Ops & Payroll Tracker",
    description: "Sistem pelaporan rekapitulasi absensi terotomatisasi berbasis spreadsheet untuk akurasi data harian payroll karyawan.",
    longDescription: "Desain sistem pelaporan kehadiran dan manajemen SDM terotomatisasi. Mengintegrasikan rumus logika terstruktur pada Google Sheets untuk melacak data harian kehadiran karyawan secara presisi, yang berfungsi sebagai landasan perhitungan payroll bulanan bebas kesalahan bagi manajemen.",
    tags: ["Spreadsheet Automation", "HR Operations", "Data Precision", "Payroll Engine"],
    category: "development",
    imageUrl: "https://picsum.photos/seed/hrops/800/600",
    features: [
      "Rumus spreadsheet terotomatisasi untuk kalkulasi kehadiran dinamis",
      "Sistem pelaporan akurat yang terintegrasi dengan pengawasan harian",
      "Minimasi human-error dalam perhitungan payroll bulanan",
      "Peningkatan produktivitas operasional tim HR"
    ],
    githubUrl: "#"
  },
  {
    id: "pos-network-infosec",
    title: "Point-of-Sale & Network Architecture",
    description: "Implementasi dan pemeliharaan infrastruktur jaringan LAN/WLAN serta stabilitas sistem POS ritel.",
    longDescription: "Manajemen siklus hidup infrastruktur operasional IT secara menyeluruh. Meliputi optimalisasi Sistem POS (Point of Sale), desain arsitektur jaringan lokal (LAN/WLAN) yang stabil, serta pemeliharaan preventif hardware pendukung kelancaran transaksi bisnis ritel.",
    tags: ["LAN/WLAN", "POS Systems", "Network Security", "Hardware Support"],
    category: "both",
    imageUrl: "https://picsum.photos/seed/pos-net/800/600",
    features: [
      "Arsitektur jaringan LAN/WLAN kantor & ritel yang aman",
      "Optimalisasi server & hardware POS untuk zero-downtime transaksi",
      "Pemeliharaan preventif infrastruktur IT pendukung",
      "Troubleshooting proaktif untuk mitigasi masalah konektivitas"
    ],
    githubUrl: "#"
  }
];

export const skillsData: Skill[] = [
  // Legal & Administrasi
  { name: "Sistem OSS RBA & SIMBG (PBG)", level: 95, category: "legal", iconName: "Landmark" },
  { name: "Registrasi Jaminan Fidusia", level: 95, category: "legal", iconName: "FileCheck" },
  { name: "Administrasi & Regulasi Pertanahan", level: 90, category: "legal", iconName: "Map" },
  { name: "Pemetaan Lahan", level: 85, category: "legal", iconName: "Layers" },
  { name: "Manajemen Data Perbankan & Kredit", level: 88, category: "legal", iconName: "Database" },
  { name: "Pengurusan NPWP Badan/Pribadi", level: 90, category: "legal", iconName: "FileText" },
  { name: "Microsoft Office Suite", level: 95, category: "legal", iconName: "FileSpreadsheet" },

  // IT & Infrastruktur
  { name: "IT Technical Support", level: 95, category: "it", iconName: "Settings" },
  { name: "Network Maintenance (LAN/WLAN)", level: 90, category: "it", iconName: "Wifi" },
  { name: "Hardware Troubleshooting", level: 95, category: "it", iconName: "Monitor" },
  { name: "OS Administration (macOS, Linux, Win)", level: 92, category: "it", iconName: "Terminal" },
  { name: "Keamanan & Manajemen Database", level: 88, category: "it", iconName: "Database" },
  { name: "Web Development", level: 85, category: "it", iconName: "Code" },
  { name: "AutoCAD Design", level: 80, category: "it", iconName: "PenTool" },

  // IoT & Inovasi Kerja
  { name: "IoT Development (ESP32)", level: 85, category: "iot", iconName: "Cpu" },
  { name: "Sensor Integration", level: 85, category: "iot", iconName: "Activity" },

  // Digital & Media Kreatif
  { name: "Digital Marketing Strategy", level: 90, category: "creative", iconName: "TrendingUp" },
  { name: "Adobe Creative Suite", level: 88, category: "creative", iconName: "Palette" },
  { name: "CorelDRAW Vector Art", level: 85, category: "creative", iconName: "Brush" },
  { name: "Canva Design Studio", level: 95, category: "creative", iconName: "Paintbrush" },
  { name: "Fotografi Profesional", level: 90, category: "creative", iconName: "Camera" },
  { name: "Video Editing (CapCut)", level: 90, category: "creative", iconName: "Video" }
];

export const certificatesData: Certificate[] = [
  {
    title: "Sarjana Informatika (S.Kom)",
    issuer: "Universitas Siber Muhammadiyah",
    date: "2026",
    credentialId: "IPK 3.82 (Pujian / Cum Laude)",
    imageUrl: "https://picsum.photos/seed/usm-cyber/400/250"
  },
  {
    title: "Sertifikasi Konsultan Perizinan OSS RBA",
    issuer: "Lembaga Kajian Regulasi Usaha",
    date: "2021",
    credentialId: "OSS-RBA-991024",
    imageUrl: "https://picsum.photos/seed/oss-lic/400/250"
  },
  {
    title: "Sertifikasi Administrasi Jaminan Fidusia",
    issuer: "Ikatan Notaris & PPAT Yogyakarta",
    date: "2020",
    credentialId: "FID-CERT-77192",
    imageUrl: "https://picsum.photos/seed/fid-cert/400/250"
  }
];

export const timelineData: TimelineEvent[] = [
  {
    year: "2020 – Sekarang",
    role: "IT Support & Administrasi Legal",
    company: "Notaris & PPAT Endri Purwani, S.H., M.Kn., Sleman",
    description: "Memegang kendali penuh atas pemeliharaan dan stabilitas IT kantor. Melakukan troubleshooting preventif, enkripsi database lokal untuk keamanan arsip hukum klien, pengelolaan siklus legalitas pertanahan (peralihan hak, pecah lahan, IPPT), serta registrasi jaminan Fidusia perbankan bervolume tinggi hingga 300 dokumen per bulan.",
    type: "work"
  },
  {
    year: "2020 – Sekarang",
    role: "Konsultan Perizinan & Regulasi",
    company: "PMA Media, Sleman",
    description: "Menyediakan layanan konsultasi teknis end-to-end untuk pengurusan legalitas usaha terintegrasi (OSS RBA, NPWP Badan/Pribadi, PBG melalui SIMBG). Memberikan pendampingan kepatuhan hukum yang solid bagi puluhan pelaku usaha mikro, kecil, menengah (UMKM) dan korporasi lokal.",
    type: "work"
  },
  {
    year: "2021 – Sekarang",
    role: "IT & Digital Marketing Specialist",
    company: "Omah Kopi Mrisen, Sleman",
    description: "Mengelola POS ritel, LAN/WLAN kantor, dan pemeliharaan hardware. Merancang sistem pelaporan rekapitulasi absensi otomatis berbasis spreadsheet untuk payroll karyawan, serta mendesain materi branding visual (fotografi sinematik dan desain grafis) untuk kampanye media sosial.",
    type: "work"
  },
  {
    year: "2022 – 2026",
    role: "Pendidikan Sarjana Informatika (S.Kom)",
    company: "Universitas Siber Muhammadiyah, Sleman",
    description: "Lulus dengan Indeks Prestasi Kumulatif (IPK) 3.82 dengan Predikat Pujian (Cum Laude). Mempelajari pemrograman web, keamanan database, sistem terdistribusi, serta integrasi teknologi IoT.",
    type: "education"
  },
  {
    year: "2013 – 2014",
    role: "Desain Grafis Specialist",
    company: "PT. INDOKOM, Sleman",
    description: "Memproduksi aset visual beresolusi tinggi untuk branding korporat global dan materi kampanye pemasaran digital multimedia yang didistribusikan di berbagai kanal media.",
    type: "work"
  }
];
