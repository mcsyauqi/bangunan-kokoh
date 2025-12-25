"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Ruler, Building2, Banknote, Clock, Quote, Filter } from "lucide-react";
import { projects, detailedStats, testimonials } from "@/lib/data";

const categories = ["Semua", "Perumahan", "Komersial", "Industrial", "Renovasi", "Infrastruktur"];

export default function ProyekPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Get category counts
  const getCategoryCount = (category: string) => {
    if (category === "Semua") return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  // Featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1E3A5F]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
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
              <p className="text-slate-300 text-lg mb-8">
                Lihat berbagai proyek yang telah kami selesaikan dengan hasil memuaskan. Setiap proyek dikerjakan dengan standar kualitas tinggi dan komitmen pada kepuasan klien.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-white">500+</div>
                  <div className="text-slate-300 text-sm">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-white">Rp 1.5T+</div>
                  <div className="text-slate-300 text-sm">Total Nilai Proyek</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-white">98%</div>
                  <div className="text-slate-300 text-sm">Kepuasan Klien</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {detailedStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-2xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">PROYEK UNGGULAN</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Proyek Terbaru Kami
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div
                  className="h-[400px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-3 group-hover:text-[#F97316] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mt-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Banknote className="w-4 h-4" />
                      {project.value}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>
                  <Link
                    href={`/proyek/${project.slug}`}
                    className="inline-flex items-center gap-2 mt-4 text-[#F97316] font-semibold hover:gap-3 transition-all"
                  >
                    Lihat Detail <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & All Projects */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">SEMUA PROYEK</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Jelajahi Portfolio Kami
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 mr-4 text-slate-500">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => {
              const count = getCategoryCount(category);
              if (count === 0 && category !== "Semua") return null;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                    activeCategory === category
                      ? "bg-[#1E3A5F] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {category}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category
                      ? "bg-white/20"
                      : "bg-slate-200"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-56 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 text-[#1E3A5F] px-3 py-1 rounded-full text-sm font-bold">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-2 group-hover:text-[#F97316] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {project.specs}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm">
                        <span className="text-slate-500">Nilai: </span>
                        <span className="font-semibold text-[#1E3A5F]">{project.value}</span>
                      </div>
                      <Link
                        href={`/proyek/${project.slug}`}
                        className="inline-flex items-center gap-1 text-[#F97316] font-semibold text-sm hover:gap-2 transition-all"
                      >
                        Detail <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">Belum ada proyek dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">TESTIMONI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
              Apa Kata Klien Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <Quote className="w-10 h-10 text-[#F97316] mb-4" />
                <p className="text-white mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-slate-300 text-sm">{testimonial.role}, {testimonial.company}</p>
                  <Link
                    href={`/proyek/${projects.find(p => p.title === testimonial.project)?.slug || '#'}`}
                    className="text-[#F97316] text-sm mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    {testimonial.project}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">KATEGORI PROYEK</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Spesialisasi Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Perumahan",
                desc: "Rumah tinggal, cluster, dan apartemen",
                count: projects.filter(p => p.category === "Perumahan").length,
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
              },
              {
                name: "Komersial",
                desc: "Gedung kantor, mall, hotel, rumah sakit",
                count: projects.filter(p => p.category === "Komersial").length,
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
              },
              {
                name: "Industrial",
                desc: "Pabrik, gudang, dan warehouse",
                count: projects.filter(p => p.category === "Industrial").length,
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600"
              },
              {
                name: "Infrastruktur",
                desc: "Jalan, jembatan, dan drainase",
                count: projects.filter(p => p.category === "Infrastruktur").length,
                image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600"
              },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.name)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group h-64"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${category.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[#F97316] font-bold text-3xl mb-1">{category.count}</div>
                  <h3 className="font-heading text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-slate-300 text-sm">{category.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F97316] to-[#ea6c10]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ingin Proyek Anda Menjadi yang Berikutnya?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan proyek konstruksi Anda dengan tim profesional kami dan wujudkan bangunan impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-100"
            >
              Mulai Proyek Anda
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
