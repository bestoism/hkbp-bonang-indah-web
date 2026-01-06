import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// IMPORT KOMPONEN
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HKBP Bonang Indah",
  description: "Website Resmi HKBP Bonang Indah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* NAVIGASI TETAP DI ATAS */}
        <Navbar />
        
        {/* KONTEN HALAMAN BERUBAH-UBAH DI SINI */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* FOOTER TETAP DI BAWAH */}
        <Footer />
      </body>
    </html>
  );
}