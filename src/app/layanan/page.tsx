"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services, advantages } from "@/lib/data";

export default function LayananPage() {
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
              <span className="text-[#F97316] font-semibold">LAYANAN KAMI</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Layanan Konstruksi Profesional
              </h1>
              <p className="text-slate-300 text-lg">
                Kami menyediakan berbagai layanan konstruksi berkualitas tinggi untuk memenuhi setiap kebutuhan proyek Anda, dari pembangunan rumah hingga infrastruktur skala besar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-[#1E3A5F] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Konsultasi Layanan Ini
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="h-80 lg:h-96 rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        index === 0
                          ? "1600585154340-be6161a56a0c"
                          : index === 1
                          ? "1581094794329-c8112a89af12"
                          : index === 2
                          ? "1486406146926-c627a92ad1ab"
                          : index === 3
                          ? "1590674899484-d5640e854abe"
                          : index === 4
                          ? "1497366216548-37526070297c"
                          : "1504307651254-35680f356dfd"
                      }?q=80&w=800')`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">MENGAPA MEMILIH KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Keunggulan Layanan Kami
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
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Butuh Layanan Konstruksi?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+622112345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
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
