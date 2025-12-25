"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Clock, Banknote, ChevronDown, ChevronUp, MapPin, Handshake, HelpCircle } from "lucide-react";
import { services, advantages, processSteps, faqs, serviceAreas, partners } from "@/lib/data";

export default function LayananPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1E3A5F]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
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
              <p className="text-slate-300 text-lg mb-8">
                Kami menyediakan berbagai layanan konstruksi berkualitas tinggi untuk memenuhi setiap kebutuhan proyek Anda, dari pembangunan rumah hingga infrastruktur skala besar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+622112345678"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  021 1234 5678
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex-shrink-0 px-4 py-2 bg-slate-100 hover:bg-[#1E3A5F] hover:text-white rounded-lg text-sm font-medium transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
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

                    {/* Price and Duration */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg">
                        <Banknote className="w-5 h-5 text-[#059669]" />
                        <span className="text-slate-700 font-medium">{service.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg">
                        <Clock className="w-5 h-5 text-[#F97316]" />
                        <span className="text-slate-700 font-medium">{service.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Process Toggle */}
                    <button
                      onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                      className="flex items-center gap-2 text-[#1E3A5F] font-semibold mb-4 hover:text-[#F97316] transition-colors"
                    >
                      Lihat Proses Pengerjaan
                      {activeService === service.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mb-8"
                        >
                          <div className="bg-slate-50 rounded-xl p-6">
                            <h4 className="font-heading font-bold text-[#1E3A5F] mb-4">Proses Pengerjaan</h4>
                            <ol className="space-y-3">
                              {service.process.map((step, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                    {i + 1}
                                  </span>
                                  <span className="text-slate-600">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
                      className="h-80 lg:h-[500px] rounded-2xl bg-cover bg-center shadow-xl"
                      style={{
                        backgroundImage: `url('${service.image}')`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-semibold">CARA KERJA KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
              Proses Kerjasama yang Transparan
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Kami memastikan setiap tahap proyek berjalan lancar dengan proses yang jelas dan komunikasi yang terbuka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 mb-3">{step.description}</p>
                <p className="text-slate-400 text-sm">{step.details}</p>
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-bold text-[#1E3A5F] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 mb-3">{advantage.description}</p>
                <p className="text-slate-500 text-sm">{advantage.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Handshake className="w-6 h-6 text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">MITRA KAMI</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F]">
              Supplier & Partner Terpercaya
            </h2>
            <p className="text-slate-600 mt-2">
              Kami bermitra dengan brand-brand terkemuka untuk memastikan kualitas terbaik
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-50 px-6 py-4 rounded-xl text-center"
              >
                <p className="font-semibold text-[#1E3A5F]">{partner.name}</p>
                <p className="text-slate-500 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">AREA LAYANAN</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1E3A5F]">
              Melayani di Seluruh Indonesia
            </h2>
            <p className="text-slate-600 mt-2">
              Saat ini kami beroperasi di 10 kota besar dengan jangkauan nasional
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span className="font-medium text-[#1E3A5F]">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <HelpCircle className="w-6 h-6 text-[#F97316]" />
                <span className="text-[#F97316] font-semibold">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.slice(0, 8).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1E3A5F] pr-4">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#F97316] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-slate-600">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">Masih ada pertanyaan lain?</p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:underline"
              >
                Hubungi tim kami
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2d4a6f]">
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
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Kami
            </a>
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
