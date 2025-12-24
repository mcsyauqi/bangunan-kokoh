"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Target, Eye, Users, Shield, Clock, BadgeCheck } from "lucide-react";
import { stats, advantages, testimonials } from "@/lib/data";

const milestones = [
  { year: "2008", event: "PT Bangunan Kokoh Indonesia didirikan" },
  { year: "2010", event: "Menyelesaikan proyek pertama 100 unit rumah" },
  { year: "2013", event: "Mendapatkan sertifikasi ISO 9001" },
  { year: "2015", event: "Ekspansi ke proyek komersial dan industri" },
  { year: "2018", event: "Pencapaian 300 proyek selesai" },
  { year: "2020", event: "Memulai proyek infrastruktur" },
  { year: "2023", event: "Mencapai 500+ proyek dengan kepuasan 98%" },
];

const team = [
  { name: "Ir. Budi Santoso", role: "Direktur Utama", experience: "25 tahun" },
  { name: "Ir. Ahmad Wijaya", role: "Direktur Teknik", experience: "20 tahun" },
  { name: "Dra. Siti Rahayu", role: "Direktur Keuangan", experience: "18 tahun" },
  { name: "Ir. Hendro Kusuma", role: "Project Manager Senior", experience: "15 tahun" },
];

const certifications = [
  "ISO 9001:2015 - Quality Management System",
  "OHSAS 18001 - Occupational Health and Safety",
  "Sertifikasi Badan Usaha (SBU) Grade 5",
  "Member of Gapensi (Gabungan Pelaksana Konstruksi Nasional)",
];

export default function TentangPage() {
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
              <span className="text-[#F97316] font-semibold">TENTANG KAMI</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Membangun Fondasi Masa Depan
              </h1>
              <p className="text-slate-300 text-lg">
                PT Bangunan Kokoh Indonesia adalah perusahaan konstruksi terpercaya dengan pengalaman lebih dari 17 tahun dalam industri konstruksi Indonesia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-semibold">SEJARAH KAMI</span>
              <h2 className="font-heading text-3xl font-bold text-[#1E3A5F] mt-2 mb-6">
                Perjalanan 17 Tahun Membangun Kepercayaan
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Didirikan pada tahun 2008, PT Bangunan Kokoh Indonesia memulai perjalanannya sebagai kontraktor rumah tinggal. Dengan dedikasi terhadap kualitas dan kepuasan pelanggan, kami terus berkembang menjadi salah satu kontraktor terpercaya di Indonesia.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Saat ini, kami telah menyelesaikan lebih dari 500 proyek di berbagai sektor termasuk perumahan, komersial, industrial, dan infrastruktur. Tim profesional kami yang terdiri dari arsitek, engineer, dan mandor berpengalaman siap mewujudkan proyek konstruksi Anda.
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
            </div>
            <div
              className="h-96 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
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
                Menjadi perusahaan konstruksi terdepan di Indonesia yang dikenal karena kualitas, inovasi, dan integritas dalam setiap proyek yang dikerjakan.
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
              <ul className="text-slate-600 text-lg leading-relaxed space-y-2">
                <li>• Memberikan layanan konstruksi berkualitas tinggi</li>
                <li>• Mengutamakan keselamatan dan kepuasan pelanggan</li>
                <li>• Mengembangkan SDM profesional dan kompeten</li>
                <li>• Berkontribusi pada pembangunan infrastruktur Indonesia</li>
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

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">PERJALANAN KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Milestone Penting
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-lg text-slate-600">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#1E3A5F]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1E3A5F]">{member.name}</h3>
                <p className="text-[#F97316] font-medium text-sm">{member.role}</p>
                <p className="text-slate-500 text-sm mt-2">Pengalaman {member.experience}</p>
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
                  <li key={index} className="flex items-start gap-3">
                    <BadgeCheck className="w-6 h-6 text-[#059669] shrink-0" />
                    <span className="text-slate-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center">
                <Award className="w-16 h-16 text-[#F97316] mb-4" />
                <p className="font-heading font-bold text-[#1E3A5F]">ISO 9001</p>
                <p className="text-slate-500 text-sm">Certified</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center">
                <Shield className="w-16 h-16 text-[#F97316] mb-4" />
                <p className="font-heading font-bold text-[#1E3A5F]">OHSAS 18001</p>
                <p className="text-slate-500 text-sm">Certified</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center">
                <BadgeCheck className="w-16 h-16 text-[#F97316] mb-4" />
                <p className="font-heading font-bold text-[#1E3A5F]">SBU Grade 5</p>
                <p className="text-slate-500 text-sm">Sertifikasi</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center">
                <Users className="w-16 h-16 text-[#F97316] mb-4" />
                <p className="font-heading font-bold text-[#1E3A5F]">GAPENSI</p>
                <p className="text-slate-500 text-sm">Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Wujudkan Proyek Anda Bersama Kami
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Dengan pengalaman 17 tahun dan tim profesional, kami siap mewujudkan proyek konstruksi impian Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-100"
          >
            Hubungi Kami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
