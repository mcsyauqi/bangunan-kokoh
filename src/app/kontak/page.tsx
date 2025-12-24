"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real application, this would send to a backend
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="text-[#F97316] font-semibold">HUBUNGI KAMI</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Mari Wujudkan Proyek Anda
              </h1>
              <p className="text-slate-300 text-lg">
                Hubungi tim kami untuk konsultasi gratis. Kami siap membantu mewujudkan proyek konstruksi impian Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">Telepon</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-slate-600 hover:text-[#F97316]">
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">WhatsApp</h3>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#F97316]"
              >
                {contactInfo.whatsapp}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#F97316] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-slate-600 hover:text-[#F97316]">
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">Jam Operasional</h3>
              <p className="text-slate-600">{contactInfo.workHours}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-6">
                Kirim Pesan
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="w-20 h-20 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda dalam 1x24 jam.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#F97316] font-semibold hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                        placeholder="email@anda.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        No. Telepon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Jenis Proyek
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                      >
                        <option value="">Pilih jenis proyek</option>
                        <option value="rumah">Pembangunan Rumah</option>
                        <option value="renovasi">Renovasi</option>
                        <option value="komersial">Gedung Komersial</option>
                        <option value="infrastruktur">Infrastruktur</option>
                        <option value="interior">Interior Fit-out</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all"
                      placeholder="Subjek pesan"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 outline-none transition-all resize-none"
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full bg-[#F97316] hover:bg-[#ea6c10] text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>

            {/* Map & Address */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1E3A5F] mb-6">
                Lokasi Kantor
              </h2>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Map Placeholder */}
                <div className="h-64 bg-slate-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2862474965795!2d106.82661131476882!3d-6.224579962706825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E3A5F] mb-1">Alamat Kantor</h3>
                      <p className="text-slate-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E3A5F] mb-1">Jam Operasional</h3>
                      <p className="text-slate-600">{contactInfo.workHours}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t mt-4">
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Berapa lama proses konsultasi awal?",
                a: "Proses konsultasi awal biasanya memakan waktu 1-2 jam. Tim kami akan mendengarkan kebutuhan Anda dan memberikan gambaran umum tentang proyek.",
              },
              {
                q: "Apakah ada biaya untuk survey lokasi?",
                a: "Survey lokasi pertama gratis untuk area Jabodetabek. Untuk area di luar Jabodetabek, akan ada biaya transportasi yang akan dikonfirmasi terlebih dahulu.",
              },
              {
                q: "Berapa lama waktu pembuatan RAB?",
                a: "Pembuatan RAB (Rencana Anggaran Biaya) membutuhkan waktu 3-7 hari kerja tergantung kompleksitas proyek.",
              },
              {
                q: "Apakah pembayaran bisa dicicil?",
                a: "Ya, pembayaran bisa dilakukan secara bertahap sesuai progres pekerjaan. Detail termin pembayaran akan diatur dalam kontrak.",
              },
              {
                q: "Bagaimana dengan garansi pekerjaan?",
                a: "Kami memberikan garansi struktur bangunan selama 10 tahun dan garansi finishing selama 1 tahun setelah serah terima.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <h3 className="font-heading font-bold text-[#1E3A5F] mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
