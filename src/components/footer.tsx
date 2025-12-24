import Link from "next/link";
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { siteConfig, navigation, services, contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl">{siteConfig.name}</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {siteConfig.tagline}. Kontraktor bangunan profesional dengan pengalaman lebih dari 17 tahun dalam industri konstruksi Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Menu</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-300 hover:text-[#F97316] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/layanan#${service.id}`} className="text-slate-300 hover:text-[#F97316] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <span className="text-slate-300">{contactInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#F97316] shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-slate-300 hover:text-[#F97316] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#F97316] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-[#F97316] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-[#F97316] shrink-0" />
                <span className="text-slate-300">{contactInfo.workHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              &copy; 2025 {siteConfig.company}. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Website ini dibuat dengan <span className="text-red-400">&hearts;</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F97316] hover:text-[#fb923c] transition-colors font-medium"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
