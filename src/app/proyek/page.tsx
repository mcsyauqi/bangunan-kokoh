"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";
import { projects } from "@/lib/data";

const categories = ["Semua", "Perumahan", "Komersial", "Industrial"];

const projectImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800",
  "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800",
];

export default function ProyekPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F97316] font-semibold">PORTFOLIO</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Proyek yang Telah Kami Kerjakan
              </h1>
              <p className="text-slate-300 text-lg">
                Lihat berbagai proyek yang telah kami selesaikan dengan hasil memuaskan. Setiap proyek dikerjakan dengan standar kualitas tinggi dan komitmen pada kepuasan klien.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-[#1E3A5F]">500+</div>
              <div className="text-slate-600 mt-1">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-[#1E3A5F]">50+</div>
              <div className="text-slate-600 mt-1">Klien Korporat</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-[#1E3A5F]">10</div>
              <div className="text-slate-600 mt-1">Kota di Indonesia</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-[#1E3A5F]">98%</div>
              <div className="text-slate-600 mt-1">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('${projectImages[index % projectImages.length]}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#F97316] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      {project.specs}
                    </div>
                  </div>
                  <Link
                    href={`/proyek/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all"
                  >
                    Lihat Detail <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F97316]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ingin Proyek Anda Menjadi yang Berikutnya?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan proyek konstruksi Anda dengan tim profesional kami dan wujudkan bangunan impian Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-100"
          >
            Mulai Proyek Anda
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
