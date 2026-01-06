import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO / NAMA GEREJA */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Kalau ada logo bisa taruh Image di sini */}
            <Link href="/" className="font-bold text-xl tracking-wide hover:text-blue-200">
              HKBP BONANG INDAH
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Beranda
            </Link>
            <Link href="/warta" className="hover:text-blue-200 transition-colors">
              Warta Jemaat
            </Link>
            <Link href="/tentang" className="hover:text-blue-200 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="hover:text-blue-200 transition-colors">
              Hubungi Kami
            </Link>
          </div>

          {/* TOMBOL DONASI/LOGIN (Opsional) */}
          <div className="hidden md:block">
            <Link 
              href="/admin" 
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login Majelis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}