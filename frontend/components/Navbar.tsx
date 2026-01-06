"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  // Logic Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20px, anggap sudah discroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  // --- LOGIKA STYLE NAVBAR BARU ---
  // 1. Position: 
  //    - Homepage: 'fixed' (supaya gambar Hero terlihat di belakang navbar)
  //    - Halaman lain: 'sticky' (supaya konten tidak ketutup navbar)
  // 2. Background:
  //    - Homepage & Belum Scroll: 'bg-transparent' (Bening)
  //    - Homepage & Sudah Scroll: 'bg-blue-900' (Biru Solid)
  //    - Halaman lain: 'bg-blue-900' (Selalu Biru)
  
  const isTransparent = isHomePage && !isScrolled;

const navbarClasses = `
    z-50 w-full transition-all duration-300 ease-in-out
    ${isHomePage ? "fixed top-0" : "sticky top-0 shadow-md"}
    ${isTransparent 
        // Ganti border-white/0 menjadi border-transparent (agar tidak membawa unsur warna putih)
        ? "bg-transparent shadow-none border-b border-transparent" 
        // Tambahkan border-b border-blue-900 disini agar tinggi navbar tidak 'lompat' 1px dan warnanya menyatu
        : "bg-blue-900 shadow-md border-b border-blue-900" 
    }
    text-white
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- LOGO --- */}
          <div className="shrink-0 flex items-center gap-2">
            <Link 
              href="/" 
              className="font-bold text-xl tracking-wide hover:text-blue-200 transition-colors" 
              onClick={closeMenu}
            >
              HKBP BONANG INDAH
            </Link>
          </div>

          {/* --- MENU DESKTOP --- */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" currentPath={pathname} isTransparent={isTransparent}>Beranda</NavLink>
            <NavLink href="/warta" currentPath={pathname} isTransparent={isTransparent}>Warta Jemaat</NavLink>
            <NavLink href="/pelayanan" currentPath={pathname} isTransparent={isTransparent}>Pelayanan</NavLink>
            <NavLink href="/tentang" currentPath={pathname} isTransparent={isTransparent}>Tentang Kami</NavLink>
            <NavLink href="/kontak" currentPath={pathname} isTransparent={isTransparent}>Hubungi Kami</NavLink>
          </div>

          {/* --- TOMBOL LOGIN --- */}
          <div className="hidden md:block">
            <Link 
              href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin`}
              target="_blank"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isTransparent 
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/50" 
                  : "bg-blue-700 hover:bg-blue-600 text-white"
              }`}
            >
              Login Majelis
            </Link>
          </div>

          {/* --- HAMBURGER BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/20 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {/* Background Mobile Menu selalu Biru Solid biar tulisan terbaca jelas */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={closeMenu}>Beranda</MobileNavLink>
            <MobileNavLink href="/warta" onClick={closeMenu}>Warta Jemaat</MobileNavLink>
            <MobileNavLink href="/pelayanan" onClick={closeMenu}>Pelayanan & Wilayah</MobileNavLink>
            <MobileNavLink href="/tentang" onClick={closeMenu}>Tentang Kami</MobileNavLink>
            <MobileNavLink href="/kontak" onClick={closeMenu}>Hubungi Kami</MobileNavLink>
            
            <Link 
              href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin`}
              target="_blank"
              onClick={closeMenu}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-800 text-white mt-4 hover:bg-blue-700"
            >
              Login Majelis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// --- KOMPONEN PENDUKUNG ---

function NavLink({ href, children, currentPath, isTransparent }: { href: string, children: React.ReactNode, currentPath: string, isTransparent: boolean }) {
  const isActive = currentPath === href;
  
  // Logic warna text menu
  // Kalau Transparent: Text putih agak redup, hover putih terang
  // Kalau Solid (Biru): Text biru muda, hover putih
  
  return (
    <Link 
      href={href} 
      className={`
        transition-colors duration-300 font-medium
        ${isActive ? 'text-white font-bold' : 'text-blue-100/80 hover:text-white'}
        ${isTransparent ? 'hover:text-yellow-300' : 'hover:text-blue-200'}
      `}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 transition-colors"
    >
      {children}
    </Link>
  );
}