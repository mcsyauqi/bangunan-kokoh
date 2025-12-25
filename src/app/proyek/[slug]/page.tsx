"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Clock, Building2, User, CheckCircle2, Banknote, Quote, Target, Lightbulb, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProyekDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-[#1E3A5F] mb-4">
            Proyek Tidak Ditemukan
          </h1>
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 text-[#F97316] font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <img
              src={project.gallery[selectedImage]}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 text-white/80">
              {selectedImage + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 min-h-[70vh] flex items-end"
        style={{
          backgroundImage: `url('${project.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Portfolio
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block bg-[#F97316] text-white px-4 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                {project.year}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-8">{project.description}</p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <p className="text-slate-300 text-sm">Nilai Proyek</p>
                <p className="text-white font-bold text-lg">{project.value}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <p className="text-slate-300 text-sm">Durasi</p>
                <p className="text-white font-bold text-lg">{project.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <p className="text-slate-300 text-sm">Lokasi</p>
                <p className="text-white font-bold text-lg">{project.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-6">
                  Tentang Proyek
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#F97316]" />
                  Lingkup Pekerjaan
                </h3>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.scope.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 mb-12"
              >
                <div className="bg-[#1E3A5F] rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#F97316]" />
                    Tantangan
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div className="bg-[#059669] rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-300" />
                    Solusi
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F97316] to-[#ea6c10] rounded-2xl p-8 mb-12"
              >
                <Quote className="w-12 h-12 text-white/30 mb-4" />
                <p className="text-white text-xl leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{project.testimonial.author}</p>
                    <p className="text-white/80 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-4">
                  Galeri Proyek
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className="h-40 md:h-48 rounded-xl bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity relative group overflow-hidden"
                      style={{ backgroundImage: `url('${img}')` }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Lihat
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                      <p className="text-slate-500 text-sm">Tahun Selesai</p>
                      <p className="font-semibold text-[#1E3A5F]">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Durasi Pengerjaan</p>
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
                      <Banknote className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Nilai Proyek</p>
                      <p className="font-semibold text-[#F97316]">{project.value}</p>
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
                    className="block w-full text-center bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-3"
                  >
                    Konsultasi Sekarang
                  </Link>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">PROYEK LAINNYA</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mt-2">
              Lihat Proyek Kami yang Lain
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/proyek/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('${p.image}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-[#1E3A5F] group-hover:text-[#F97316] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {p.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {p.year}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <span className="font-semibold text-[#1E3A5F]">{p.value}</span>
                      <span className="text-[#F97316] font-semibold inline-flex items-center gap-1">
                        Detail <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Lihat Semua Proyek
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan wujudkan proyek konstruksi impian Anda bersama tim profesional kami.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
