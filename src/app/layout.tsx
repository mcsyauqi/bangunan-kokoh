import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Jasa Kontraktor Bangunan Jakarta | Konstruksi Profesional`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Jasa kontraktor bangunan profesional di Jakarta. Pembangunan rumah, renovasi, gedung komersial, dan infrastruktur dengan standar kualitas tinggi dan tepat waktu. Pengalaman 17+ tahun, ISO 9001 Certified.",
  keywords: ["kontraktor", "bangunan", "konstruksi", "Jakarta", "renovasi", "pembangunan rumah", "gedung", "infrastruktur"],
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
