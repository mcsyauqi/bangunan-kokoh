"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Target, Eye, Users, Shield, Clock, BadgeCheck, Building2, Briefcase, GraduationCap, MapPin, Phone, Quote } from "lucide-react";
import { stats, advantages, testimonials, milestones, team, certifications, partners, detailedStats, contactInfo } from "@/lib/data";

export default function TentangPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#1E3A5F]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F97316] font-semibold">TENTANG KAMI</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Membangun Fondasi Masa Depan
              </h1>
              <p className="text-slate-300 text-lg mb-8">
                PT Bangunan Kokoh Indonesia adalah perusahaan konstruksi terpercaya dengan pengalaman lebih dari 17 tahun dalam industri konstruksi Indonesia. Kami berkomitmen memberikan layanan konstruksi berkualitas tinggi dengan integritas dan profesionalisme.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/proyek"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {detailedStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="font-heading text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
                <div className="text-slate-400 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F97316] font-semibold">SEJARAH KAMI</span>
              <h2 className="font-heading text-3xl font-bold text-[#1E3A5F] mt-2 mb-6">
                Perjalanan 17 Tahun Membangun Kepercayaan
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Didirikan pada tahun 2008, PT Bangunan Kokoh Indonesia memulai perjalanannya sebagai kontraktor rumah tinggal dengan visi memberikan layanan konstruksi berkualitas tinggi yang dapat diandalkan oleh masyarakat Indonesia.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Dengan dedikasi terhadap kualitas dan kepuasan pelanggan, kami terus berkembang menjadi salah satu kontraktor terpercaya di Indonesia. Saat ini, kami telah menyelesaikan lebih dari 500 proyek di berbagai sektor termasuk perumahan, komersial, industrial, dan infrastruktur.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Tim profesional kami yang terdiri dari arsitek, engineer, dan mandor berpengalaman siap mewujudkan proyek konstruksi Anda dengan standar kualitas internasional.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <Award className="w-8 h-8 text-[#F97316] mb-2" />
                  <p className="font-semibold text-[#1E3A5F]">ISO 9001 Certified</p>
                  <p className="text-slate-500 text-sm">Quality Management</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <Shield className="w-8 h-8 text-[#F97316] mb-2" />
                  <p className="font-semibold text-[#1E3A5F]">Garansi 10 Tahun</p>
                  <p className="text-slate-500 text-sm">Struktur Bangunan</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="h-64 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600')",
                }}
              ></div>
              <div
                className="h-64 rounded-2xl bg-cover bg-center mt-8"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600')",
                }}
              ></div>
              <div
                className="h-64 rounded-2xl bg-cover bg-center -mt-8"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600')",
                }}
              ></div>
              <div
                className="h-64 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600')",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">VISI & MISI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Komitmen Kami untuk Indonesia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-4">Visi</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Menjadi perusahaan konstruksi terdepan di Indonesia yang dikenal karena kualitas, inovasi, dan integritas dalam setiap proyek yang dikerjakan. Kami beraspirasi menjadi mitra pilihan utama untuk seluruh kebutuhan konstruksi di Indonesia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#F97316] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-4">Misi</h3>
              <ul className="text-slate-600 text-lg leading-relaxed space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316]">•</span>
                  Memberikan layanan konstruksi berkualitas tinggi dengan standar internasional
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316]">•</span>
                  Mengutamakan keselamatan kerja dan kepuasan pelanggan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316]">•</span>
                  Mengembangkan SDM profesional dan kompeten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316]">•</span>
                  Berkontribusi pada pembangunan infrastruktur Indonesia
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">NILAI-NILAI KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
              Yang Membuat Kami Berbeda
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-slate-300 mb-3">{advantage.description}</p>
                <p className="text-slate-400 text-sm">{advantage.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">PERJALANAN KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Milestone Penting
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center shrink-0 text-2xl relative z-10">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="pt-3">
                    <span className="text-[#F97316] font-bold text-lg">{milestone.year}</span>
                    <p className="text-lg text-slate-600 mt-1">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">TIM KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Manajemen Profesional
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Dipimpin oleh para profesional berpengalaman dengan rekam jejak yang terbukti di industri konstruksi Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-[#1E3A5F] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-lg font-bold text-[#1E3A5F]">{member.name}</h3>
                  <p className="text-[#F97316] font-medium text-sm">{member.role}</p>
                </div>
                <div className="mt-4 pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <span>{member.experience} pengalaman</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{member.expertise}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-semibold">SERTIFIKASI</span>
              <h2 className="font-heading text-3xl font-bold text-[#1E3A5F] mt-2 mb-6">
                Standar Kualitas Terjamin
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Kami berkomitmen untuk menjaga standar kualitas tertinggi dalam setiap proyek. Berbagai sertifikasi yang kami miliki menjadi bukti dedikasi kami terhadap kualitas dan keselamatan kerja.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck className="w-6 h-6 text-[#059669] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#1E3A5F]">{cert.name}</span>
                      <span className="text-slate-500"> - {cert.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certifications.slice(0, 4).map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                >
                  <Award className="w-12 h-12 text-[#F97316] mb-3" />
                  <p className="font-heading font-bold text-[#1E3A5F]">{cert.name}</p>
                  <p className="text-slate-500 text-sm">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F97316] font-semibold">MITRA KAMI</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F] mt-2">
              Bekerja Sama dengan Brand Terpercaya
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white px-6 py-4 rounded-xl shadow-sm text-center"
              >
                <p className="font-semibold text-[#1E3A5F]">{partner.name}</p>
                <p className="text-slate-500 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">TESTIMONI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
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
                className="bg-slate-50 rounded-2xl p-6"
              >
                <Quote className="w-10 h-10 text-[#F97316]/30 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#1E3A5F]">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-[#F97316] text-sm mt-1">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#F97316] to-[#ea6c10]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Wujudkan Proyek Anda Bersama Kami
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Dengan pengalaman 17 tahun dan tim profesional, kami siap mewujudkan proyek konstruksi impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-100"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
