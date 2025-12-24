import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Clock, Building2, User, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";

const projectImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200",
  "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600",
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.title} | Proyek`,
    description: project.fullDescription,
  };
}

export default function ProyekDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 min-h-[60vh] flex items-end"
        style={{
          backgroundImage: `url('${projectImages[projectIndex % projectImages.length]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Portfolio
          </Link>
          <span className="inline-block bg-[#F97316] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-6">
                Tentang Proyek
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Highlights */}
              <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-4">
                Highlights Proyek
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-slate-600">Pengerjaan sesuai timeline yang disepakati</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-slate-600">Material berkualitas tinggi berstandar SNI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-slate-600">Quality control ketat di setiap tahap</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-slate-600">Garansi struktur bangunan 10 tahun</span>
                </li>
              </ul>

              {/* Gallery */}
              <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-4">
                Galeri Proyek
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="h-40 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                <h3 className="font-heading text-lg font-bold text-[#1E3A5F] mb-6">
                  Detail Proyek
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Lokasi</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Tahun</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Durasi</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Spesifikasi</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.specs}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Klien</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.client}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-slate-600 text-sm mb-4">
                    Tertarik dengan proyek serupa?
                  </p>
                  <Link
                    href="/kontak"
                    className="block w-full text-center bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
            Proyek Lainnya
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p, index) => (
                <Link
                  key={p.slug}
                  href={`/proyek/${p.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${projectImages[(projects.indexOf(p)) % projectImages.length]}')`,
                    }}
                  ></div>
                  <div className="p-4">
                    <span className="text-[#F97316] text-sm font-medium">{p.category}</span>
                    <h3 className="font-heading font-bold text-[#1E3A5F] group-hover:text-[#F97316] transition-colors mt-1">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">{p.location} | {p.year}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
