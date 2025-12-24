"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
              scrolled ? "bg-[#1E3A5F]" : "bg-white"
            )}>
              <Building2 className={cn(
                "w-6 h-6 transition-colors",
                scrolled ? "text-white" : "text-[#1E3A5F]"
              )} />
            </div>
            <div>
              <span className={cn(
                "font-heading font-bold text-xl transition-colors",
                scrolled ? "text-[#1E3A5F]" : "text-white"
              )}>
                {siteConfig.name}
              </span>
              <p className={cn(
                "text-xs transition-colors hidden sm:block",
                scrolled ? "text-slate-500" : "text-slate-200"
              )}>
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors relative py-2",
                  pathname === item.href
                    ? scrolled
                      ? "text-[#F97316]"
                      : "text-[#F97316]"
                    : scrolled
                    ? "text-slate-700 hover:text-[#1E3A5F]"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+622112345678"
              className={cn(
                "flex items-center gap-2 transition-colors",
                scrolled ? "text-slate-600" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">021 1234 5678</span>
            </a>
            <Link
              href="/kontak"
              className="bg-[#F97316] hover:bg-[#ea6c10] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-lg shadow-orange-500/25"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-slate-700" : "text-white"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-colors",
                      pathname === item.href
                        ? "bg-[#1E3A5F] text-white"
                        : scrolled
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/kontak"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-[#F97316] hover:bg-[#ea6c10] text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Konsultasi Gratis
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
