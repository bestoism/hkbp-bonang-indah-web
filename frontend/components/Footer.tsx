export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* KOLOM 1: IDENTITAS */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">HKBP Bonang Indah</h3>
          <p className="text-sm leading-relaxed">
            Gereja yang melayani dengan kasih, membangun iman jemaat, 
            dan menjadi berkat bagi lingkungan sekitar.
          </p>
        </div>

        {/* KOLOM 2: JADWAL IBADAH */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Jadwal Ibadah</h3>
          <ul className="text-sm space-y-2">
            <li>Minggu Pagi: 07.00 WIB (Bahasa Indonesia)</li>
            <li>Minggu Siang: 10.00 WIB (Bahasa Batak)</li>
            <li>Sekolah Minggu: 07.00 & 09.00 WIB</li>
          </ul>
        </div>

        {/* KOLOM 3: KONTAK */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
          <p className="text-sm mb-2">
            Jl. Bonang Raya No. 123<br />
            Kelapa Dua, Tangerang
          </p>
          <p className="text-sm">Email: secretariat@hkbpbonangindah.org</p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HKBP Bonang Indah. Developed by Mahasiswa IT Keren.
      </div>
    </footer>
  );
}