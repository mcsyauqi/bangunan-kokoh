import { Home, Wrench, Building2, Construction, Paintbrush, Settings } from "lucide-react";

export const siteConfig = {
  name: "Bangunan Kokoh",
  tagline: "Membangun Fondasi Masa Depan",
  description: "Bangunan Kokoh | Jasa Kontraktor Bangunan Jakarta | Konstruksi Profesional",
  url: "https://bangunankokoh.co.id",
  company: "PT Bangunan Kokoh Indonesia",
};

export const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Proyek", href: "/proyek" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
];

export const stats = [
  { value: "500+", label: "Proyek Selesai" },
  { value: "17", label: "Tahun Pengalaman" },
  { value: "ISO 9001", label: "Certified" },
];

export const services = [
  {
    id: "pembangunan-rumah",
    icon: Home,
    title: "Pembangunan Rumah",
    description: "Rumah tinggal dari desain sampai finishing dengan kualitas terbaik dan harga kompetitif.",
    fullDescription: "Kami menyediakan layanan pembangunan rumah tinggal lengkap mulai dari konsultasi desain, perencanaan struktur, hingga finishing. Tim arsitek dan engineer kami akan membantu mewujudkan rumah impian Anda dengan standar kualitas tinggi.",
    features: ["Konsultasi desain arsitektur", "Perencanaan struktur", "Pengerjaan pondasi hingga atap", "Finishing interior dan eksterior", "Instalasi MEP (Mekanikal, Elektrikal, Plumbing)"],
  },
  {
    id: "renovasi",
    icon: Wrench,
    title: "Renovasi",
    description: "Renovasi rumah, kantor, toko dengan hasil yang memuaskan dan sesuai budget.",
    fullDescription: "Layanan renovasi profesional untuk memperbaharui atau memperluas properti Anda. Kami menangani renovasi dari skala kecil hingga besar dengan tetap memperhatikan kenyamanan penghuni.",
    features: ["Renovasi struktural", "Perluasan bangunan", "Perbaikan atap dan dinding", "Upgrade fasilitas", "Renovasi fasad bangunan"],
  },
  {
    id: "gedung-komersial",
    icon: Building2,
    title: "Gedung Komersial",
    description: "Pembangunan ruko, kantor, gudang, pabrik dengan standar konstruksi tinggi.",
    fullDescription: "Spesialis pembangunan gedung komersial untuk berbagai kebutuhan bisnis. Mulai dari ruko, kantor bertingkat, gudang, hingga pabrik dengan standar konstruksi industrial.",
    features: ["Gedung perkantoran", "Ruko dan rukan", "Gudang dan warehouse", "Pabrik dan fasilitas industri", "Pusat perbelanjaan"],
  },
  {
    id: "infrastruktur",
    icon: Construction,
    title: "Infrastruktur",
    description: "Pembangunan jalan, jembatan, saluran air dengan standar teknis yang ketat.",
    fullDescription: "Pengerjaan proyek infrastruktur dengan standar teknis tinggi untuk mendukung pembangunan kawasan. Kami berpengalaman dalam proyek infrastruktur skala menengah hingga besar.",
    features: ["Jalan dan perkerasan", "Jembatan", "Saluran drainase", "Gorong-gorong", "Retaining wall"],
  },
  {
    id: "interior-fitout",
    icon: Paintbrush,
    title: "Interior Fit-out",
    description: "Pengerjaan interior komersial profesional untuk ruang bisnis yang mengesankan.",
    fullDescription: "Layanan fit-out interior untuk ruang komersial termasuk kantor, retail, restoran, dan hospitality. Kami bekerja sama dengan desainer interior untuk hasil yang optimal.",
    features: ["Partisi dan ceiling", "Flooring", "Custom furniture", "Instalasi pencahayaan", "Branding dan signage"],
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance",
    description: "Perawatan bangunan berkala untuk menjaga kondisi bangunan tetap prima.",
    fullDescription: "Program perawatan berkala untuk menjaga kondisi bangunan Anda. Kami menyediakan paket maintenance bulanan, quarterly, atau tahunan sesuai kebutuhan.",
    features: ["Inspeksi berkala", "Perawatan struktur", "Maintenance MEP", "Perbaikan minor", "Laporan kondisi bangunan"],
  },
];

export const projects = [
  {
    slug: "perumahan-green-valley",
    title: "Perumahan Green Valley",
    category: "Perumahan",
    description: "Pembangunan 200 unit rumah dengan konsep green living",
    fullDescription: "Proyek pembangunan kompleks perumahan Green Valley yang terdiri dari 200 unit rumah dengan berbagai tipe. Mengadopsi konsep green living dengan banyak ruang terbuka hijau dan sistem pengelolaan air yang ramah lingkungan.",
    specs: "200 unit rumah",
    year: "2023",
    location: "Tangerang",
    client: "PT Green Valley Development",
    duration: "24 bulan",
    image: "/images/project-1.jpg",
    gallery: ["/images/project-1-1.jpg", "/images/project-1-2.jpg", "/images/project-1-3.jpg"],
  },
  {
    slug: "gedung-kantor-pt-abc",
    title: "Gedung Kantor PT ABC",
    category: "Komersial",
    description: "Pembangunan gedung kantor 8 lantai dengan desain modern",
    fullDescription: "Gedung perkantoran modern 8 lantai untuk PT ABC Corporation. Dilengkapi dengan sistem building automation, lift berkecepatan tinggi, dan basement 2 lantai untuk parkir.",
    specs: "8 lantai + 2 basement",
    year: "2024",
    location: "Jakarta Selatan",
    client: "PT ABC Corporation",
    duration: "18 bulan",
    image: "/images/project-2.jpg",
    gallery: ["/images/project-2-1.jpg", "/images/project-2-2.jpg", "/images/project-2-3.jpg"],
  },
  {
    slug: "pabrik-tekstil-xyz",
    title: "Pabrik Tekstil XYZ",
    category: "Industrial",
    description: "Pembangunan pabrik tekstil modern dengan area produksi 5000m2",
    fullDescription: "Fasilitas manufaktur tekstil dengan standar industrial modern. Dilengkapi dengan sistem ventilasi khusus, loading dock, dan area warehouse terintegrasi.",
    specs: "5000m2",
    year: "2023",
    location: "Karawang",
    client: "PT XYZ Textile Industries",
    duration: "12 bulan",
    image: "/images/project-3.jpg",
    gallery: ["/images/project-3-1.jpg", "/images/project-3-2.jpg", "/images/project-3-3.jpg"],
  },
  {
    slug: "mall-community-center",
    title: "Mall Community Center",
    category: "Komersial",
    description: "Pembangunan pusat perbelanjaan 3 lantai sebagai community center",
    fullDescription: "Pusat perbelanjaan modern yang dirancang sebagai community center. Terdiri dari area retail, food court, bioskop mini, dan area bermain anak.",
    specs: "3 lantai",
    year: "2024",
    location: "Bekasi",
    client: "PT Maju Jaya Property",
    duration: "15 bulan",
    image: "/images/project-4.jpg",
    gallery: ["/images/project-4-1.jpg", "/images/project-4-2.jpg", "/images/project-4-3.jpg"],
  },
];

export const advantages = [
  {
    title: "Tim Profesional",
    description: "Arsitek, engineer, dan mandor berpengalaman dengan sertifikasi keahlian",
    icon: "👷",
  },
  {
    title: "Material Berkualitas",
    description: "Hanya menggunakan material berstandar SNI dari supplier terpercaya",
    icon: "🏗️",
  },
  {
    title: "Tepat Waktu",
    description: "Komitmen penyelesaian sesuai timeline yang telah disepakati",
    icon: "⏱️",
  },
  {
    title: "Garansi Konstruksi",
    description: "Garansi struktur 10 tahun untuk ketenangan pikiran Anda",
    icon: "🛡️",
  },
];

export const processSteps = [
  { step: 1, title: "Survey & Konsultasi", description: "Tim kami akan melakukan survey lokasi dan konsultasi kebutuhan proyek Anda" },
  { step: 2, title: "RAB & Timeline", description: "Pembuatan Rencana Anggaran Biaya dan timeline pengerjaan yang detail" },
  { step: 3, title: "Kontrak", description: "Penandatanganan kontrak kerja yang jelas dan transparan" },
  { step: 4, title: "Pengerjaan", description: "Pelaksanaan proyek dengan pengawasan ketat oleh tim engineer kami" },
  { step: 5, title: "Quality Check", description: "Pemeriksaan kualitas di setiap tahap untuk memastikan standar terpenuhi" },
  { step: 6, title: "Serah Terima", description: "Serah terima proyek dengan dokumentasi lengkap dan garansi" },
];

export const testimonials = [
  {
    quote: "Kualitas bangunan bagus, selesai tepat waktu. Recommended!",
    author: "Bapak Hendro",
    company: "PT ABC Corporation",
    role: "General Manager",
  },
  {
    quote: "Sudah 3 proyek dikerjakan Bangunan Kokoh. Hasilnya selalu memuaskan.",
    author: "Ibu Sarah",
    company: "Developer Green Valley",
    role: "Project Director",
  },
  {
    quote: "Tim yang profesional dan responsif. Komunikasi selalu lancar dari awal sampai akhir proyek.",
    author: "Bapak Andi",
    company: "PT XYZ Textile Industries",
    role: "Owner",
  },
];

export const contactInfo = {
  address: "Jl. Konstruksi Raya No. 123, Jakarta Selatan 12345",
  phone: "+62 21 1234 5678",
  whatsapp: "+62 812 3456 7890",
  email: "info@bangunankokoh.co.id",
  workHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
};
