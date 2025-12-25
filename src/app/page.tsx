"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, CheckCircle2, Phone, MapPin, Award, Users, Building2, Hammer, Shield, Clock, MessageCircle } from "lucide-react";
import { stats, services, projects, advantages, processSteps, testimonials, detailedStats, partners, certifications, serviceAreas } from "@/lib/data";

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')",
          }}
        >
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🏗️</span> Kontraktor Terpercaya Sejak 2008
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Bangun Impian dengan <span className="text-[#F97316]">Pondasi Terpercaya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed"
            >
              Jasa konstruksi profesional untuk rumah, gedung, dan infrastruktur dengan standar kualitas tinggi dan tepat waktu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
              >
                Konsultasi Proyek
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/proyek"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20"
              >
                Lihat Portfolio
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-2xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/10">
                <div className="font-heading text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-300 text-sm md:text-base mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F97316] font-semibold">TENTANG KAMI</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2 mb-6">
                Lebih dari 17 Tahun Membangun Kepercayaan
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                PT Bangunan Kokoh Indonesia adalah perusahaan konstruksi terpercaya yang telah berdiri sejak 2008. Dengan pengalaman lebih dari 17 tahun, kami telah menyelesaikan lebih dari 500 proyek di berbagai sektor.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Tim profesional kami yang terdiri dari arsitek, engineer, dan mandor berpengalaman siap mewujudkan proyek konstruksi impian Anda dengan standar kualitas tertinggi.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">ISO 9001</p>
                    <p className="text-slate-500 text-sm">Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">10 Tahun</p>
                    <p className="text-slate-500 text-sm">Garansi Struktur</p>
                  </div>
                </div>
              </div>

              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all"
              >
                Pelajari Lebih Lanjut <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200')",
                }}
              ></div>
              <div className="absolute -bottom-6 -left-6 bg-[#F97316] text-white p-6 rounded-xl shadow-xl">
                <div className="font-heading text-4xl font-bold">500+</div>
                <div className="text-white/90">Proyek Selesai</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">LAYANAN KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Solusi Konstruksi Lengkap
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white hover:bg-[#1E3A5F] rounded-2xl p-6 transition-all duration-300 shadow-lg"
              >
                <div className="w-14 h-14 bg-[#1E3A5F] group-hover:bg-[#F97316] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] group-hover:text-white mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors mb-4">
                  {service.description}
                </p>
                <div className="text-sm text-slate-500 group-hover:text-slate-400 mb-4">
                  <span className="font-medium">{service.priceRange}</span>
                </div>
                <Link
                  href={`/layanan#${service.id}`}
                  className="inline-flex items-center gap-1 text-[#F97316] font-medium group-hover:text-[#F97316] transition-colors"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {detailedStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-[#F97316] font-semibold mt-1">{stat.label}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">PROYEK UNGGULAN</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Portfolio Proyek Kami
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Beberapa proyek yang telah kami selesaikan dengan hasil memuaskan
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div
                    className="h-64 lg:h-[450px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${projects[currentProject].image}')`,
                    }}
                  ></div>
                  <div className="bg-slate-50 p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-[#F97316] font-semibold text-sm">{projects[currentProject].category}</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mt-2">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-slate-600 mt-4">{projects[currentProject].description}</p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-slate-500 text-sm">Tahun</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].year}</p>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-slate-500 text-sm">Lokasi</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].location}</p>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-slate-500 text-sm">Spesifikasi</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].specs}</p>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                        <span className="text-slate-500 text-sm">Nilai Proyek</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].value}</p>
                      </div>
                    </div>
                    <Link
                      href={`/proyek/${projects[currentProject].slug}`}
                      className="inline-flex items-center gap-2 text-[#F97316] font-semibold mt-6 hover:gap-3 transition-all"
                    >
                      Lihat Detail Proyek <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#1E3A5F] hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#1E3A5F] hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? "bg-[#F97316]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Semua Proyek ({projects.length})
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">MENGAPA KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
              Keunggulan Kami
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-slate-300 mb-4">{advantage.description}</p>
                <p className="text-slate-400 text-sm">{advantage.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">PROSES KERJA</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Proses yang transparan dan terstruktur untuk hasil yang optimal
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center group"
                >
                  <div className="w-16 h-16 bg-[#1E3A5F] group-hover:bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-lg transition-colors">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{step.description}</p>
                  <p className="text-slate-400 text-xs hidden lg:block">{step.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Mulai Konsultasi Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">TESTIMONI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Apa Kata Klien Kami
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="w-12 h-12 text-[#F97316] mb-6" />
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-heading font-bold text-[#1E3A5F]">{testimonials[currentTestimonial].author}</p>
                  <p className="text-slate-500">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#F97316] font-medium text-sm">Proyek:</p>
                  <p className="text-slate-600">{testimonials[currentTestimonial].project}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#1E3A5F] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-[#F97316]" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#1E3A5F] hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">PARTNER KAMI</span>
            <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mt-2">
              Bekerja Sama dengan Brand Terpercaya
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-slate-100 group-hover:bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center transition-colors">
                  <div className="text-center">
                    <Building2 className="w-8 h-8 text-[#1E3A5F] mx-auto mb-1" />
                    <p className="text-xs font-medium text-slate-600">{partner.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">SERTIFIKASI</span>
            <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mt-2">
              Kualitas Terjamin
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3"
              >
                <Award className="w-8 h-8 text-[#F97316]" />
                <div>
                  <p className="font-semibold text-[#1E3A5F]">{cert.name}</p>
                  <p className="text-slate-500 text-sm">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">AREA LAYANAN</span>
            <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mt-2">
              Kami Melayani di Berbagai Kota
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-100 hover:bg-[#1E3A5F] hover:text-white px-5 py-2 rounded-full font-medium transition-colors cursor-default flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F97316]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan konstruksi Anda dengan tim profesional kami. Gratis survey dan konsultasi untuk area Jabodetabek!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-100"
            >
              <CheckCircle2 className="w-5 h-5" />
              Konsultasi Gratis
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Kami
            </a>
            <a
              href="tel:+622112345678"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/30"
            >
              <Phone className="w-5 h-5" />
              021 1234 5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
