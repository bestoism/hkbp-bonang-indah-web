"use client"; // <--- Wajib ada di baris paling atas!

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Untuk menandai menu aktif (opsional)

  // Fungsi untuk menutup menu saat link diklik (biar ga nutupin layar terus)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- LOGO --- */}
          <div className="shrink-0 flex items-center gap-2">
            <Link href="/" className="font-bold text-xl tracking-wide hover:text-blue-200" onClick={closeMenu}>
              HKBP BONANG INDAH
            </Link>
          </div>

          {/* --- MENU DESKTOP (Hanya muncul di Layar Besar/md ke atas) --- */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" currentPath={pathname}>Beranda</NavLink>
            <NavLink href="/warta" currentPath={pathname}>Warta Jemaat</NavLink>
            <NavLink href="/pelayanan" currentPath={pathname}>Pelayanan</NavLink>
            <NavLink href="/tentang" currentPath={pathname}>Tentang Kami</NavLink>
            <NavLink href="/kontak" currentPath={pathname}>Hubungi Kami</NavLink>
          </div>

          {/* --- TOMBOL LOGIN DESKTOP --- */}
          <div className="hidden md:block">
            <Link 
              href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin`}
              target="_blank"
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login Majelis
            </Link>
          </div>

          {/* --- TOMBOL HAMBURGER (Hanya muncul di HP/md ke bawah) --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {/* Logika Icon: Kalau Open muncul X, kalau Close muncul Garis 3 */}
              {isOpen ? (
                // Icon X (Close)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icon Hamburger (Menu)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE (Muncul jika isOpen = true) --- */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={closeMenu}>Beranda</MobileNavLink>
            <MobileNavLink href="/warta" onClick={closeMenu}>Warta Jemaat</MobileNavLink>
            <MobileNavLink href="/pelayanan" onClick={closeMenu}>Pelayanan & Wilayah</MobileNavLink>
            <MobileNavLink href="/tentang" onClick={closeMenu}>Tentang Kami</MobileNavLink>
            <MobileNavLink href="/kontak" onClick={closeMenu}>Hubungi Kami</MobileNavLink>
            
            {/* Tombol Login di Mobile */}
            <Link 
              href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin`}
              target="_blank"
              onClick={closeMenu}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-900 text-white mt-4 hover:bg-blue-700"
            >
              Login Majelis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// --- KOMPONEN KECIL BIAR KODINGAN RAPI ---

// Link untuk Desktop
function NavLink({ href, children, currentPath }: { href: string, children: React.ReactNode, currentPath: string }) {
  const isActive = currentPath === href;
  return (
    <Link 
      href={href} 
      className={`${isActive ? 'text-white font-bold' : 'text-blue-200'} hover:text-white transition-colors`}
    >
      {children}
    </Link>
  );
}

// Link untuk Mobile
function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700 transition-colors"
    >
      {children}
    </Link>
  );
}