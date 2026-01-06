import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* KOLOM 1: IDENTITAS */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">HKBP Bonang Indah</h3>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Gereja yang melayani dengan kasih, membangun iman jemaat, 
            dan menjadi berkat bagi lingkungan sekitar di wilayah Tangerang dan Banten.
          </p>
          <div className="flex space-x-4">
             {/* Link Sosmed (Bisa diisi link asli nanti) */}
             <Link href="https://www.youtube.com/@hkbpbonangindah" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
               Youtube
             </Link>
             <Link href="https://www.facebook.com/gereja.indah.35" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
               Facebook
             </Link>
          </div>
        </div>

        {/* KOLOM 2: JADWAL PELAYANAN */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Jadwal Minggu</h3>
          <ul className="text-sm space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🕗</span> 
              <span>07.00 WIB - Ibadah Pagi (Bhs. Indonesia)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🕙</span> 
              <span>10.00 WIB - Ibadah Siang (Bhs. Batak)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">👶</span> 
              <span>07.00 & 09.00 WIB - Sekolah Minggu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📖</span> 
              <span>Katekisasi Sidi (Sesuai Jadwal)</span>
            </li>
          </ul>
        </div>

        {/* KOLOM 3: KONTAK & ALAMAT */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
          
          <div className="space-y-4 text-sm text-gray-400">
            <div>
              <p className="font-bold text-gray-200">Gedung Gereja:</p>
              <p>Perumahan Dasana Indah Blok UF 3,</p>
              <p>Kel. Bojong Nangka, Kec. Kelapa Dua,</p>
              <p>Kab. Tangerang, Banten.</p>
            </div>

            <div>
              <p className="font-bold text-gray-200">Kontak Sekretariat:</p>
              <p className="hover:text-white transition-colors">
                WA: 0813-1015-0145 (Inang D. Simanungkalit)
              </p>
            </div>
            
            <div>
               <p>Email: secretariat@hkbpbonangindah.org</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HKBP Bonang Indah. Developed by Tim IT & Multimedia.
      </div>
    </footer>
  );
}