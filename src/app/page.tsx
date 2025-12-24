"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { stats, services, projects, advantages, processSteps, testimonials } from "@/lib/data";

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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
                className="group bg-slate-50 hover:bg-[#1E3A5F] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1E3A5F] group-hover:bg-[#F97316] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] group-hover:text-white mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
                <Link
                  href={`/layanan#${service.id}`}
                  className="inline-flex items-center gap-1 text-[#F97316] font-medium mt-4 group-hover:text-[#F97316] transition-colors"
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

      {/* Projects Carousel Section */}
      <section className="py-20 bg-slate-50">
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
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div
                    className="h-64 lg:h-96 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
                    }}
                  ></div>
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-[#F97316] font-semibold text-sm">{projects[currentProject].category}</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mt-2">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-slate-600 mt-4">{projects[currentProject].description}</p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="bg-slate-100 px-4 py-2 rounded-lg">
                        <span className="text-slate-500 text-sm">Tahun</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].year}</p>
                      </div>
                      <div className="bg-slate-100 px-4 py-2 rounded-lg">
                        <span className="text-slate-500 text-sm">Lokasi</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].location}</p>
                      </div>
                      <div className="bg-slate-100 px-4 py-2 rounded-lg">
                        <span className="text-slate-500 text-sm">Spesifikasi</span>
                        <p className="font-semibold text-[#1E3A5F]">{projects[currentProject].specs}</p>
                      </div>
                    </div>
                    <Link
                      href={`/proyek/${projects[currentProject].slug}`}
                      className="inline-flex items-center gap-2 text-[#F97316] font-semibold mt-6"
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
              Lihat Semua Proyek
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-slate-300">{advantage.description}</p>
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
                  className="relative text-center"
                >
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
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
              <div>
                <p className="font-heading font-bold text-[#1E3A5F]">{testimonials[currentTestimonial].author}</p>
                <p className="text-slate-500">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#F97316]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan konstruksi Anda dengan tim profesional kami. Gratis!
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
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
