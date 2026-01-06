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

  const isTransparent = isHomePage && !isScrolled;

  const navbarClasses = `
    z-50 w-full transition-all duration-300 ease-in-out
    ${isHomePage ? "fixed top-0" : "sticky top-0 shadow-md"}
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
            <NavLink href="/galeri" currentPath={pathname} isTransparent={isTransparent}>Dokumentasi</NavLink>
            <NavLink href="/kontak" currentPath={pathname} isTransparent={isTransparent}>Hubungi Kami</NavLink>
          </div>

          {/* --- TOMBOL LOGIN DIHAPUS (Hanya Tim Multimedia yang tau URL Admin) --- */}

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
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={closeMenu}>Beranda</MobileNavLink>
            <MobileNavLink href="/warta" onClick={closeMenu}>Warta Jemaat</MobileNavLink>
            <MobileNavLink href="/pelayanan" onClick={closeMenu}>Pelayanan & Wilayah</MobileNavLink>
            <MobileNavLink href="/tentang" onClick={closeMenu}>Tentang Kami</MobileNavLink>
            <MobileNavLink href="/galeri" onClick={closeMenu}>Dokumentasi</MobileNavLink>
            <MobileNavLink href="/kontak" onClick={closeMenu}>Hubungi Kami</MobileNavLink>
            
            {/* Tombol Login Mobile juga dihapus */}
          </div>
        </div>
      )}
    </nav>
  );
}

// --- KOMPONEN PENDUKUNG ---

function NavLink({ href, children, currentPath, isTransparent }: { href: string, children: React.ReactNode, currentPath: string, isTransparent: boolean }) {
  const isActive = currentPath === href;
  
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