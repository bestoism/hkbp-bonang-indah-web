"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isTransparent = !isScrolled;

  // Menggunakan 'fixed' adalah syarat wajib agar bisa transparan di atas gambar
  const navbarClasses = `
    z-50 w-full fixed top-0 transition-all duration-300 ease-in-out
    ${isTransparent 
        ? "bg-transparent shadow-none border-b border-transparent" 
        : "bg-blue-900 shadow-md border-b border-blue-900" 
    }
    text-white
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center gap-2">
            <Link href="/" className="font-bold text-xl tracking-wide hover:text-blue-200 transition-colors" onClick={closeMenu}>
              HKBP BONANG INDAH
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <NavLink href="/" currentPath={pathname} isTransparent={isTransparent}>Beranda</NavLink>
            <NavLink href="/tentang" currentPath={pathname} isTransparent={isTransparent}>Tentang Kami</NavLink>
            <NavLink href="/pelayanan" currentPath={pathname} isTransparent={isTransparent}>Pelayanan</NavLink>
            <NavLink href="/warta" currentPath={pathname} isTransparent={isTransparent}>Warta Jemaat</NavLink>
            <NavLink href="/renungan" currentPath={pathname} isTransparent={isTransparent}>Renungan</NavLink>
            <NavLink href="/galeri" currentPath={pathname} isTransparent={isTransparent}>Dokumentasi</NavLink>
            <NavLink href="/kontak" currentPath={pathname} isTransparent={isTransparent}>Hubungi Kami</NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-white/10 transition-colors">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 shadow-xl text-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={closeMenu}>Beranda</MobileNavLink>
            <MobileNavLink href="/tentang" onClick={closeMenu}>Tentang Kami</MobileNavLink>
            <MobileNavLink href="/pelayanan" onClick={closeMenu}>Pelayanan & Wilayah</MobileNavLink>
            <MobileNavLink href="/warta" onClick={closeMenu}>Warta Jemaat</MobileNavLink>
            <MobileNavLink href="/renungan" onClick={closeMenu}>Renungan</MobileNavLink>
            <MobileNavLink href="/galeri" onClick={closeMenu}>Dokumentasi</MobileNavLink>
            <MobileNavLink href="/kontak" onClick={closeMenu}>Hubungi Kami</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, currentPath, isTransparent }: any) {
  const isActive = currentPath === href;
  return (
    <Link href={href} className={`transition-colors duration-300 text-[13px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-blue-100/70 hover:text-white'} ${isTransparent ? 'hover:text-yellow-300' : 'hover:text-blue-200'}`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: any) {
  return (
    <Link href={href} onClick={onClick} className="block px-3 py-4 rounded-md text-sm font-bold uppercase tracking-widest text-blue-100 hover:text-white hover:bg-blue-800 transition-colors border-b border-blue-800/50 last:border-0">
      {children}
    </Link>
  );
}