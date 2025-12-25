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

export const detailedStats = [
  { value: "500+", label: "Proyek Selesai", description: "Berbagai skala proyek" },
  { value: "50+", label: "Klien Korporat", description: "Perusahaan terpercaya" },
  { value: "200+", label: "Tim Profesional", description: "Tenaga ahli berpengalaman" },
  { value: "10", label: "Kota di Indonesia", description: "Jangkauan nasional" },
  { value: "98%", label: "Kepuasan Klien", description: "Rating kepuasan tinggi" },
  { value: "10 Tahun", label: "Garansi Struktur", description: "Jaminan kualitas" },
];

export const services = [
  {
    id: "pembangunan-rumah",
    icon: Home,
    title: "Pembangunan Rumah",
    shortDesc: "Rumah tinggal dari desain sampai finishing",
    description: "Rumah tinggal dari desain sampai finishing dengan kualitas terbaik dan harga kompetitif.",
    fullDescription: "Kami menyediakan layanan pembangunan rumah tinggal lengkap mulai dari konsultasi desain, perencanaan struktur, hingga finishing. Tim arsitek dan engineer kami akan membantu mewujudkan rumah impian Anda dengan standar kualitas tinggi. Setiap proyek rumah dikerjakan dengan perhatian detail dan menggunakan material terbaik untuk memastikan kenyamanan dan keamanan jangka panjang.",
    features: [
      "Konsultasi desain arsitektur gratis",
      "Perencanaan struktur oleh engineer bersertifikat",
      "Pengerjaan pondasi hingga atap",
      "Finishing interior dan eksterior premium",
      "Instalasi MEP (Mekanikal, Elektrikal, Plumbing)",
      "Lansekap dan area outdoor",
      "Smart home integration (opsional)",
      "Garansi struktur 10 tahun"
    ],
    process: [
      "Survey lokasi dan analisa tanah",
      "Konsultasi desain dengan arsitek",
      "Pembuatan gambar kerja dan RAB",
      "Pengurusan IMB",
      "Pelaksanaan konstruksi",
      "Quality control berkala",
      "Serah terima dan garansi"
    ],
    priceRange: "Mulai dari Rp 3.5 juta/m²",
    duration: "4-8 bulan (tergantung luas)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
  },
  {
    id: "renovasi",
    icon: Wrench,
    title: "Renovasi",
    shortDesc: "Renovasi rumah, kantor, dan toko",
    description: "Renovasi rumah, kantor, toko dengan hasil yang memuaskan dan sesuai budget.",
    fullDescription: "Layanan renovasi profesional untuk memperbaharui atau memperluas properti Anda. Kami menangani renovasi dari skala kecil hingga besar dengan tetap memperhatikan kenyamanan penghuni. Tim kami berpengalaman dalam berbagai jenis renovasi mulai dari perbaikan struktural, perluasan bangunan, hingga redesign interior.",
    features: [
      "Renovasi struktural dan non-struktural",
      "Perluasan bangunan vertikal & horizontal",
      "Perbaikan atap dan waterproofing",
      "Upgrade fasilitas elektrikal & plumbing",
      "Renovasi fasad bangunan",
      "Redesign layout ruangan",
      "Penambahan lantai/tingkat",
      "Retrofit bangunan tua"
    ],
    process: [
      "Survey kondisi existing",
      "Analisa kerusakan dan kebutuhan",
      "Desain renovasi dan RAB",
      "Persiapan area kerja",
      "Pelaksanaan renovasi bertahap",
      "Finishing dan pembersihan",
      "Serah terima"
    ],
    priceRange: "Mulai dari Rp 2.5 juta/m²",
    duration: "2-6 bulan",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800"
  },
  {
    id: "gedung-komersial",
    icon: Building2,
    title: "Gedung Komersial",
    shortDesc: "Ruko, kantor, gudang, dan pabrik",
    description: "Pembangunan ruko, kantor, gudang, pabrik dengan standar konstruksi tinggi.",
    fullDescription: "Spesialis pembangunan gedung komersial untuk berbagai kebutuhan bisnis. Mulai dari ruko, kantor bertingkat, gudang, hingga pabrik dengan standar konstruksi industrial. Kami memahami bahwa gedung komersial harus efisien, fungsional, dan representatif untuk bisnis Anda.",
    features: [
      "Gedung perkantoran modern",
      "Ruko dan rukan strategis",
      "Gudang dan warehouse logistik",
      "Pabrik dan fasilitas industri",
      "Pusat perbelanjaan dan retail",
      "Hotel dan hospitality",
      "Gedung parkir bertingkat",
      "Mixed-use development"
    ],
    process: [
      "Studi kelayakan proyek",
      "Desain arsitektur dan struktur",
      "Pengurusan perizinan lengkap",
      "Konstruksi dengan metode modern",
      "Instalasi sistem building automation",
      "Testing dan komisioning",
      "Serah terima dan training"
    ],
    priceRange: "Mulai dari Rp 4 juta/m²",
    duration: "12-24 bulan",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    id: "infrastruktur",
    icon: Construction,
    title: "Infrastruktur",
    shortDesc: "Jalan, jembatan, dan saluran air",
    description: "Pembangunan jalan, jembatan, saluran air dengan standar teknis yang ketat.",
    fullDescription: "Pengerjaan proyek infrastruktur dengan standar teknis tinggi untuk mendukung pembangunan kawasan. Kami berpengalaman dalam proyek infrastruktur skala menengah hingga besar dengan mengutamakan keselamatan dan kualitas.",
    features: [
      "Jalan dan perkerasan aspal/beton",
      "Jembatan beton dan baja",
      "Saluran drainase dan irigasi",
      "Gorong-gorong dan box culvert",
      "Retaining wall dan turap",
      "Pekerjaan tanah dan galian",
      "Paving block dan pedestrian",
      "Infrastruktur kawasan industri"
    ],
    process: [
      "Survey topografi dan geoteknik",
      "Desain teknis dan DED",
      "Mobilisasi alat berat",
      "Pelaksanaan pekerjaan tanah",
      "Konstruksi struktur",
      "Pengaspalan/pengecoran",
      "Quality test dan serah terima"
    ],
    priceRange: "Sesuai volume pekerjaan",
    duration: "6-18 bulan",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800"
  },
  {
    id: "interior-fitout",
    icon: Paintbrush,
    title: "Interior Fit-out",
    shortDesc: "Interior komersial profesional",
    description: "Pengerjaan interior komersial profesional untuk ruang bisnis yang mengesankan.",
    fullDescription: "Layanan fit-out interior untuk ruang komersial termasuk kantor, retail, restoran, dan hospitality. Kami bekerja sama dengan desainer interior untuk hasil yang optimal dan sesuai dengan brand identity klien.",
    features: [
      "Partisi gypsum dan kaca",
      "Ceiling dan plafon dekoratif",
      "Flooring premium (vinyl, parquet, marble)",
      "Custom furniture built-in",
      "Instalasi pencahayaan arsitektural",
      "Branding dan signage",
      "Acoustic treatment",
      "MEP untuk interior"
    ],
    process: [
      "Konsultasi kebutuhan dan budget",
      "Desain interior 3D",
      "Material selection",
      "Produksi custom item",
      "Instalasi on-site",
      "Finishing dan detailing",
      "Handover dan training"
    ],
    priceRange: "Mulai dari Rp 3 juta/m²",
    duration: "1-4 bulan",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Maintenance",
    shortDesc: "Perawatan bangunan berkala",
    description: "Perawatan bangunan berkala untuk menjaga kondisi bangunan tetap prima.",
    fullDescription: "Program perawatan berkala untuk menjaga kondisi bangunan Anda. Kami menyediakan paket maintenance bulanan, quarterly, atau tahunan sesuai kebutuhan. Perawatan rutin dapat mencegah kerusakan besar dan memperpanjang usia bangunan.",
    features: [
      "Inspeksi berkala struktur",
      "Perawatan atap dan waterproofing",
      "Maintenance sistem MEP",
      "Perbaikan minor dan touch up",
      "Pembersihan dan sanitasi",
      "Pest control",
      "Laporan kondisi bangunan",
      "Emergency response 24/7"
    ],
    process: [
      "Assessment kondisi bangunan",
      "Pembuatan jadwal maintenance",
      "Pelaksanaan perawatan rutin",
      "Dokumentasi dan reporting",
      "Rekomendasi perbaikan",
      "Evaluasi berkala"
    ],
    priceRange: "Mulai dari Rp 5 juta/bulan",
    duration: "Kontrak tahunan",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
  },
];

export const projects = [
  {
    slug: "perumahan-green-valley",
    title: "Perumahan Green Valley",
    category: "Perumahan",
    description: "Pembangunan 200 unit rumah dengan konsep green living",
    fullDescription: "Proyek pembangunan kompleks perumahan Green Valley yang terdiri dari 200 unit rumah dengan berbagai tipe. Mengadopsi konsep green living dengan banyak ruang terbuka hijau dan sistem pengelolaan air yang ramah lingkungan. Setiap unit dilengkapi dengan panel surya dan sistem rainwater harvesting.",
    specs: "200 unit rumah",
    year: "2023",
    location: "Tangerang",
    client: "PT Green Valley Development",
    duration: "24 bulan",
    value: "Rp 150 Miliar",
    scope: [
      "Land clearing dan cut & fill",
      "Infrastruktur kawasan (jalan, drainase, utilitas)",
      "Pembangunan 200 unit rumah (tipe 36-120)",
      "Fasilitas umum (clubhouse, taman, jogging track)",
      "Gerbang dan pos keamanan",
      "Sistem pengelolaan air terpadu"
    ],
    challenges: "Kondisi tanah yang memerlukan perkuatan khusus dan timeline ketat untuk memenuhi target penjualan developer.",
    solutions: "Menggunakan metode konstruksi prefabrikasi untuk mempercepat pembangunan dan sistem pondasi yang disesuaikan dengan kondisi tanah.",
    testimonial: {
      quote: "Bangunan Kokoh berhasil menyelesaikan proyek tepat waktu dengan kualitas yang sangat baik. Sudah 3 proyek kami percayakan kepada mereka.",
      author: "Ibu Sarah",
      role: "Project Director, PT Green Valley Development"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=600",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=600"
    ]
  },
  {
    slug: "gedung-kantor-pt-abc",
    title: "Gedung Kantor PT ABC",
    category: "Komersial",
    description: "Pembangunan gedung kantor 8 lantai dengan desain modern",
    fullDescription: "Gedung perkantoran modern 8 lantai untuk PT ABC Corporation. Dilengkapi dengan sistem building automation, lift berkecepatan tinggi, dan basement 2 lantai untuk parkir. Fasad menggunakan curtain wall yang elegan dengan sistem pencahayaan hemat energi.",
    specs: "8 lantai + 2 basement",
    year: "2024",
    location: "Jakarta Selatan",
    client: "PT ABC Corporation",
    duration: "18 bulan",
    value: "Rp 85 Miliar",
    scope: [
      "Pekerjaan struktur beton bertulang",
      "Basement 2 lantai dengan sistem dewatering",
      "Fasad curtain wall",
      "Instalasi 4 unit lift penumpang",
      "Sistem HVAC dan fire protection",
      "Interior fit-out lantai lobby dan executive floor"
    ],
    challenges: "Lokasi di area padat dengan akses terbatas dan harus meminimalisir gangguan terhadap bangunan sekitar.",
    solutions: "Menggunakan metode top-down construction untuk basement dan manajemen logistik yang ketat dengan pengiriman material di malam hari.",
    testimonial: {
      quote: "Kualitas bangunan bagus, selesai tepat waktu. Recommended! Gedung kami sekarang menjadi landmark di kawasan ini.",
      author: "Bapak Hendro",
      role: "General Manager, PT ABC Corporation"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=600",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600"
    ]
  },
  {
    slug: "pabrik-tekstil-xyz",
    title: "Pabrik Tekstil XYZ",
    category: "Industrial",
    description: "Pembangunan pabrik tekstil modern dengan area produksi 5000m²",
    fullDescription: "Fasilitas manufaktur tekstil dengan standar industrial modern. Dilengkapi dengan sistem ventilasi khusus, loading dock, dan area warehouse terintegrasi. Lantai menggunakan epoxy industrial grade untuk mendukung operasional mesin berat.",
    specs: "5000m² area produksi",
    year: "2023",
    location: "Karawang",
    client: "PT XYZ Textile Industries",
    duration: "12 bulan",
    value: "Rp 45 Miliar",
    scope: [
      "Struktur baja bentang lebar",
      "Lantai industrial dengan epoxy coating",
      "Sistem ventilasi dan exhaust khusus tekstil",
      "Loading dock dan area manuver truck",
      "Warehouse 1500m²",
      "Office building 3 lantai",
      "Instalasi listrik kapasitas tinggi"
    ],
    challenges: "Spesifikasi khusus untuk industri tekstil termasuk kontrol kelembaban dan sistem ventilasi yang memadai.",
    solutions: "Bekerja sama dengan konsultan MEP spesialis industri tekstil untuk memastikan semua requirement terpenuhi.",
    testimonial: {
      quote: "Tim yang profesional dan responsif. Komunikasi selalu lancar dari awal sampai akhir proyek. Pabrik kami beroperasi dengan lancar.",
      author: "Bapak Andi",
      role: "Owner, PT XYZ Textile Industries"
    },
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=600",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600"
    ]
  },
  {
    slug: "mall-community-center",
    title: "Mall Community Center",
    category: "Komersial",
    description: "Pembangunan pusat perbelanjaan 3 lantai sebagai community center",
    fullDescription: "Pusat perbelanjaan modern yang dirancang sebagai community center. Terdiri dari area retail, food court, bioskop mini, dan area bermain anak. Konsep arsitektur mengusung tema tropical modern dengan banyak pencahayaan alami.",
    specs: "3 lantai, 15.000m² GFA",
    year: "2024",
    location: "Bekasi",
    client: "PT Maju Jaya Property",
    duration: "15 bulan",
    value: "Rp 120 Miliar",
    scope: [
      "Struktur beton bertulang 3 lantai",
      "Basement parkir 2 lantai (500 mobil)",
      "Atrium dengan skylight",
      "Anchor tenant area",
      "Food court dan F&B outlets",
      "Bioskop 4 studio",
      "Kids playground area",
      "Sistem MEP komersial lengkap"
    ],
    challenges: "Desain yang kompleks dengan atrium besar dan requirement tenant yang beragam.",
    solutions: "Koordinasi intensif dengan berbagai tenant untuk memastikan infrastruktur MEP sesuai kebutuhan masing-masing.",
    testimonial: {
      quote: "Proyek yang kompleks tapi Bangunan Kokoh berhasil mengelolanya dengan baik. Hasil akhirnya melebihi ekspektasi kami.",
      author: "Bapak Tommy",
      role: "Development Director, PT Maju Jaya Property"
    },
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=600",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600",
      "https://images.unsplash.com/photo-1567449303078-57ad995bd329?q=80&w=600",
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=600",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600"
    ]
  },
  {
    slug: "renovasi-hotel-bintang",
    title: "Renovasi Hotel Bintang",
    category: "Renovasi",
    description: "Renovasi total hotel bintang 4 dengan 150 kamar",
    fullDescription: "Proyek renovasi komprehensif hotel bintang 4 yang sudah beroperasi selama 20 tahun. Meliputi upgrade seluruh kamar, lobby, restoran, dan fasilitas pendukung dengan konsep desain kontemporer.",
    specs: "150 kamar, 12.000m²",
    year: "2023",
    location: "Bandung",
    client: "PT Bintang Hospitality Group",
    duration: "8 bulan",
    value: "Rp 35 Miliar",
    scope: [
      "Renovasi 150 kamar hotel",
      "Redesign lobby dan reception",
      "Upgrade restoran dan ballroom",
      "Pembaruan sistem MEP",
      "Renovasi fasad bangunan",
      "Penambahan rooftop bar"
    ],
    challenges: "Renovasi dilakukan sambil hotel tetap beroperasi parsial.",
    solutions: "Pembagian zona kerja per lantai dan jadwal kerja malam untuk meminimalisir gangguan tamu.",
    testimonial: {
      quote: "Renovasi berjalan lancar tanpa mengganggu operasional hotel. Occupancy rate kami naik 40% setelah renovasi.",
      author: "Ibu Linda",
      role: "General Manager, Hotel Bintang"
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=600"
    ]
  },
  {
    slug: "jalan-kawasan-industri",
    title: "Jalan Kawasan Industri Cikarang",
    category: "Infrastruktur",
    description: "Pembangunan jalan akses kawasan industri sepanjang 5 km",
    fullDescription: "Pembangunan jalan akses utama kawasan industri baru di Cikarang dengan panjang 5 km dan lebar 14 meter. Dilengkapi dengan drainase, penerangan jalan, dan median.",
    specs: "5 km, lebar 14m",
    year: "2024",
    location: "Cikarang, Bekasi",
    client: "PT Kawasan Industri Jababeka",
    duration: "10 bulan",
    value: "Rp 55 Miliar",
    scope: [
      "Land clearing dan earthwork",
      "Lapisan perkerasan rigid pavement",
      "Sistem drainase dan box culvert",
      "2 jembatan kecil",
      "Median dan landscape",
      "Penerangan jalan umum",
      "Marka dan signage"
    ],
    challenges: "Kondisi tanah lunak yang memerlukan perbaikan tanah sebelum perkerasan.",
    solutions: "Menggunakan metode preloading dan vertical drain untuk stabilisasi tanah.",
    testimonial: {
      quote: "Kualitas jalan sangat baik dan sesuai spesifikasi teknis. Mendukung operasional kawasan industri kami.",
      author: "Bapak Rudi",
      role: "Infrastructure Manager, PT Kawasan Industri Jababeka"
    },
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600",
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=600",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600",
      "https://images.unsplash.com/photo-1621335223658-0ebbe9e1ee8f?q=80&w=600",
      "https://images.unsplash.com/photo-1597766659330-ba4d78a98a18?q=80&w=600",
      "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?q=80&w=600"
    ]
  },
  {
    slug: "rumah-sakit-medika",
    title: "Rumah Sakit Medika",
    category: "Komersial",
    description: "Pembangunan rumah sakit tipe C dengan 100 tempat tidur",
    fullDescription: "Pembangunan rumah sakit tipe C lengkap dengan fasilitas rawat inap, UGD, ruang operasi, dan penunjang medis. Desain mengikuti standar akreditasi rumah sakit.",
    specs: "100 TT, 6 lantai",
    year: "2023",
    location: "Depok",
    client: "PT Medika Sehat Indonesia",
    duration: "20 bulan",
    value: "Rp 180 Miliar",
    scope: [
      "Struktur gedung 6 lantai + basement",
      "Instalasi gas medis",
      "Ruang operasi standar kelas A",
      "UGD dan ICU/ICCU",
      "Laboratorium dan radiologi",
      "Sistem HVAC khusus rumah sakit",
      "Helipad di rooftop"
    ],
    challenges: "Spesifikasi teknis rumah sakit yang sangat ketat dan requirement akreditasi.",
    solutions: "Bekerja sama dengan konsultan rumah sakit berpengalaman dan melakukan koordinasi intensif dengan Kemenkes.",
    testimonial: {
      quote: "Bangunan Kokoh memahami kompleksitas pembangunan rumah sakit. Kami berhasil mendapat akreditasi paripurna.",
      author: "dr. Hendra",
      role: "Direktur, RS Medika"
    },
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600",
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=600",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600",
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=600",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600"
    ]
  },
  {
    slug: "apartemen-skyview",
    title: "Apartemen Skyview Residence",
    category: "Perumahan",
    description: "Pembangunan tower apartemen 25 lantai dengan 500 unit",
    fullDescription: "Tower apartemen modern dengan 25 lantai dan 500 unit hunian. Dilengkapi dengan fasilitas lengkap termasuk sky lounge, infinity pool, gym, dan co-working space.",
    specs: "25 lantai, 500 unit",
    year: "2024",
    location: "Jakarta Barat",
    client: "PT Skyview Development",
    duration: "30 bulan",
    value: "Rp 350 Miliar",
    scope: [
      "Struktur beton bertulang 25 lantai",
      "Basement 3 lantai parkir",
      "500 unit apartemen berbagai tipe",
      "Sky lounge dan rooftop facilities",
      "Infinity pool dan gym",
      "Lobby premium dan concierge",
      "Sistem keamanan terintegrasi"
    ],
    challenges: "Konstruksi high-rise di lahan terbatas dengan requirement premium.",
    solutions: "Menggunakan formwork system modern dan metode konstruksi efisien untuk memenuhi timeline.",
    testimonial: {
      quote: "Kualitas finishing apartemen sangat premium. Bangunan Kokoh membuktikan expertise mereka di proyek high-rise.",
      author: "Bapak Kevin",
      role: "CEO, PT Skyview Development"
    },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600"
    ]
  }
];

export const advantages = [
  {
    title: "Tim Profesional",
    description: "Arsitek, engineer, dan mandor berpengalaman dengan sertifikasi keahlian",
    icon: "👷",
    details: "Tim kami terdiri dari 200+ profesional berpengalaman dengan berbagai sertifikasi seperti SKA, SKT, dan sertifikasi internasional."
  },
  {
    title: "Material Berkualitas",
    description: "Hanya menggunakan material berstandar SNI dari supplier terpercaya",
    icon: "🏗️",
    details: "Kami bermitra dengan supplier material terkemuka dan melakukan quality control ketat untuk setiap material yang digunakan."
  },
  {
    title: "Tepat Waktu",
    description: "Komitmen penyelesaian sesuai timeline yang telah disepakati",
    icon: "⏱️",
    details: "Track record 95% proyek selesai tepat waktu. Kami menggunakan project management tools modern untuk monitoring progress."
  },
  {
    title: "Garansi Konstruksi",
    description: "Garansi struktur 10 tahun untuk ketenangan pikiran Anda",
    icon: "🛡️",
    details: "Garansi struktur 10 tahun dan garansi finishing 1 tahun. Layanan after-sales responsif untuk setiap keluhan."
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Survey & Konsultasi",
    description: "Tim kami akan melakukan survey lokasi dan konsultasi kebutuhan proyek Anda",
    details: "Gratis survey untuk area Jabodetabek. Tim akan menganalisa kondisi lahan, akses, dan mendiskusikan requirement proyek Anda."
  },
  {
    step: 2,
    title: "RAB & Timeline",
    description: "Pembuatan Rencana Anggaran Biaya dan timeline pengerjaan yang detail",
    details: "RAB transparan dengan breakdown detail. Timeline realistis dengan milestone yang jelas."
  },
  {
    step: 3,
    title: "Kontrak",
    description: "Penandatanganan kontrak kerja yang jelas dan transparan",
    details: "Kontrak yang melindungi kedua belah pihak dengan terms yang jelas termasuk garansi dan mekanisme pembayaran."
  },
  {
    step: 4,
    title: "Pengerjaan",
    description: "Pelaksanaan proyek dengan pengawasan ketat oleh tim engineer kami",
    details: "Laporan progress mingguan dengan foto. Site meeting reguler. Akses portal untuk memantau proyek real-time."
  },
  {
    step: 5,
    title: "Quality Check",
    description: "Pemeriksaan kualitas di setiap tahap untuk memastikan standar terpenuhi",
    details: "Quality control di setiap milestone. Dokumentasi lengkap. Testing material dan struktur sesuai standar."
  },
  {
    step: 6,
    title: "Serah Terima",
    description: "Serah terima proyek dengan dokumentasi lengkap dan garansi",
    details: "Serah terima formal dengan checklist lengkap. As-built drawing, manual operasional, dan sertifikat garansi."
  },
];

export const testimonials = [
  {
    quote: "Kualitas bangunan bagus, selesai tepat waktu. Recommended!",
    author: "Bapak Hendro",
    company: "PT ABC Corporation",
    role: "General Manager",
    project: "Gedung Kantor PT ABC"
  },
  {
    quote: "Sudah 3 proyek dikerjakan Bangunan Kokoh. Hasilnya selalu memuaskan.",
    author: "Ibu Sarah",
    company: "Developer Green Valley",
    role: "Project Director",
    project: "Perumahan Green Valley"
  },
  {
    quote: "Tim yang profesional dan responsif. Komunikasi selalu lancar dari awal sampai akhir proyek.",
    author: "Bapak Andi",
    company: "PT XYZ Textile Industries",
    role: "Owner",
    project: "Pabrik Tekstil XYZ"
  },
  {
    quote: "Renovasi berjalan lancar tanpa mengganggu operasional hotel. Occupancy rate kami naik 40% setelah renovasi.",
    author: "Ibu Linda",
    company: "Hotel Bintang",
    role: "General Manager",
    project: "Renovasi Hotel Bintang"
  },
  {
    quote: "Bangunan Kokoh memahami kompleksitas pembangunan rumah sakit. Kami berhasil mendapat akreditasi paripurna.",
    author: "dr. Hendra",
    company: "RS Medika",
    role: "Direktur",
    project: "Rumah Sakit Medika"
  },
  {
    quote: "Kualitas finishing apartemen sangat premium. Bangunan Kokoh membuktikan expertise mereka di proyek high-rise.",
    author: "Bapak Kevin",
    company: "PT Skyview Development",
    role: "CEO",
    project: "Apartemen Skyview Residence"
  },
];

export const contactInfo = {
  address: "Jl. Konstruksi Raya No. 123, Jakarta Selatan 12345",
  phone: "+62 21 1234 5678",
  whatsapp: "+62 812 3456 7890",
  email: "info@bangunankokoh.co.id",
  workHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
};

export const partners = [
  { name: "Semen Indonesia", category: "Material" },
  { name: "Krakatau Steel", category: "Material" },
  { name: "Schneider Electric", category: "MEP" },
  { name: "Daikin", category: "HVAC" },
  { name: "Kone", category: "Elevator" },
  { name: "Dulux", category: "Paint" },
  { name: "Toto", category: "Sanitary" },
  { name: "Holcim", category: "Material" }
];

export const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "OHSAS 18001", desc: "Occupational Health and Safety" },
  { name: "SBU Grade 5", desc: "Sertifikasi Badan Usaha" },
  { name: "GAPENSI", desc: "Member Asosiasi Konstruksi" },
  { name: "ISO 14001", desc: "Environmental Management" }
];

export const milestones = [
  { year: "2008", event: "PT Bangunan Kokoh Indonesia didirikan", icon: "🏢" },
  { year: "2010", event: "Menyelesaikan proyek pertama 100 unit rumah", icon: "🏠" },
  { year: "2013", event: "Mendapatkan sertifikasi ISO 9001", icon: "📜" },
  { year: "2015", event: "Ekspansi ke proyek komersial dan industri", icon: "🏗️" },
  { year: "2018", event: "Pencapaian 300 proyek selesai", icon: "🎯" },
  { year: "2020", event: "Memulai proyek infrastruktur", icon: "🛤️" },
  { year: "2023", event: "Mencapai 500+ proyek dengan kepuasan 98%", icon: "🏆" },
  { year: "2024", event: "Ekspansi ke 10 kota di Indonesia", icon: "🌏" },
];

export const team = [
  {
    name: "Ir. Budi Santoso, M.T.",
    role: "Direktur Utama",
    experience: "25 tahun",
    education: "S2 Teknik Sipil ITB",
    expertise: "Strategic Management, Project Development"
  },
  {
    name: "Ir. Ahmad Wijaya, IPM",
    role: "Direktur Teknik",
    experience: "20 tahun",
    education: "S1 Teknik Sipil UI",
    expertise: "Structural Engineering, Quality Assurance"
  },
  {
    name: "Dra. Siti Rahayu, M.M.",
    role: "Direktur Keuangan",
    experience: "18 tahun",
    education: "S2 Manajemen Keuangan UGM",
    expertise: "Financial Management, Risk Management"
  },
  {
    name: "Ir. Hendro Kusuma, PMP",
    role: "Project Manager Senior",
    experience: "15 tahun",
    education: "S1 Teknik Sipil ITS",
    expertise: "Project Management, Construction Method"
  },
];

export const faqs = [
  {
    q: "Berapa lama proses konsultasi awal?",
    a: "Proses konsultasi awal biasanya memakan waktu 1-2 jam. Tim kami akan mendengarkan kebutuhan Anda dan memberikan gambaran umum tentang proyek. Konsultasi ini gratis dan tanpa komitmen."
  },
  {
    q: "Apakah ada biaya untuk survey lokasi?",
    a: "Survey lokasi pertama gratis untuk area Jabodetabek. Untuk area di luar Jabodetabek, akan ada biaya transportasi yang akan dikonfirmasi terlebih dahulu."
  },
  {
    q: "Berapa lama waktu pembuatan RAB?",
    a: "Pembuatan RAB (Rencana Anggaran Biaya) membutuhkan waktu 3-7 hari kerja tergantung kompleksitas proyek. RAB kami sangat detail dengan breakdown per item pekerjaan."
  },
  {
    q: "Apakah pembayaran bisa dicicil?",
    a: "Ya, pembayaran dilakukan secara bertahap sesuai progres pekerjaan. Umumnya terdiri dari DP 20-30%, lalu pembayaran per termin berdasarkan milestone yang dicapai. Detail termin pembayaran akan diatur dalam kontrak."
  },
  {
    q: "Bagaimana dengan garansi pekerjaan?",
    a: "Kami memberikan garansi struktur bangunan selama 10 tahun dan garansi finishing selama 1 tahun setelah serah terima. Selama masa garansi, kami akan memperbaiki kerusakan yang disebabkan oleh cacat material atau pengerjaan tanpa biaya tambahan."
  },
  {
    q: "Apakah bisa request desain custom?",
    a: "Tentu! Kami menyediakan layanan desain arsitektur custom sesuai kebutuhan dan preferensi Anda. Tim arsitek kami akan membantu mewujudkan rumah impian Anda."
  },
  {
    q: "Material apa yang digunakan?",
    a: "Kami hanya menggunakan material berstandar SNI dari supplier terpercaya seperti Semen Indonesia, Krakatau Steel, dan lainnya. Setiap material melewati quality control ketat sebelum digunakan."
  },
  {
    q: "Bagaimana cara memantau progress proyek?",
    a: "Kami menyediakan laporan progress mingguan dengan dokumentasi foto. Selain itu, kami juga menyediakan akses portal online untuk memantau proyek secara real-time. Site meeting juga diadakan secara reguler."
  },
  {
    q: "Apakah melayani proyek di luar Jakarta?",
    a: "Ya, kami melayani proyek di seluruh Indonesia. Saat ini kami sudah beroperasi di 10 kota besar termasuk Jabodetabek, Bandung, Surabaya, Semarang, Medan, dan lainnya."
  },
  {
    q: "Berapa minimal nilai proyek yang ditangani?",
    a: "Untuk pembangunan rumah, kami melayani proyek mulai dari luas 100m². Untuk renovasi, tidak ada batasan minimum. Untuk proyek komersial dan industrial, silakan hubungi kami untuk diskusi lebih lanjut."
  }
];

export const serviceAreas = [
  "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi",
  "Bandung", "Surabaya", "Semarang", "Medan", "Makassar"
];
