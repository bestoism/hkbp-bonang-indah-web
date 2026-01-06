import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Tentang Kami | HKBP Bonang Indah",
  description: "Sejarah, Visi, Misi, dan Prinsip Pelayanan HKBP Bonang Indah.",
};

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mengenal HKBP Bonang Indah
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Gereja yang inklusif, dialogis, dan terbuka untuk melayani Tuhan dan sesama.
          </p>
        </div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* 1. SEJARAH SINGKAT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
              Sejarah Singkat
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>HKBP Bonang Indah</strong> berdiri pada tanggal <strong>16 Agustus 1992</strong>. 
                Gereja ini hadir sebagai buah dari kerinduan umat Tuhan di wilayah Bonang untuk bersekutu 
                dan memuji nama Tuhan dalam wadah Huria Kristen Batak Protestan.
              </p>
              <p>
                Saat ini, HKBP Bonang Indah berstatus sebagai <strong>Huria Sabungan</strong> (Gereja Induk) 
                di bawah naungan <strong>Ressort Bonang Indah</strong>. Dalam pelayanan wilayahnya, 
                Ressort Bonang Indah juga menaungi HKBP Binong Permai, HKBP Kodya Tangerang, dan Pos Pelayanan Cirarab sebagai Pagaran.
              </p>
              <p>
                Terletak di Kompleks Gereja Perumahan Dasana Indah, HKBP Bonang Indah terus bertumbuh 
                menjadi tempat pembinaan iman bagi jemaat dari berbagai sektor pelayanan (Wijk).
              </p>
            </div>
          </div>
          {/* Ilustrasi Gambar (Bisa diganti foto gereja asli nanti) */}
          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
                src="/foto-gereja.jpg"  // <-- Pastikan nama file sama persis dengan di folder public
                alt="Gedung HKBP Bonang Indah"
                fill
                className="object-cover" // Agar gambar tidak gepeng (crop otomatis)
                priority // Biar diload duluan karena ini gambar penting
            />
            </div>
        </section>

        {/* 2. VISI & MISI (Box Style) */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Visi & Misi HKBP</h2>
            <p className="text-gray-500 mt-2">Landasan pelayanan kami dalam mengiring Kristus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* VISI */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-lg font-bold">VISI</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                "HKBP berkembang menjadi gereja yang inklusif, dialogis dan terbuka, serta mampu dan bertenaga mengembangkan kehidupan yang bermutu di dalam kasih Tuhan Yesus Kristus."
              </p>
              <p className="text-gray-500 mt-4 text-sm italic">
                Bersama-sama dengan semua orang di dalam masyarakat global, terutama masyarakat Kristen, demi kemuliaan Allah Bapa yang Mahakuasa.
              </p>
            </div>

            {/* MISI */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal-100 text-teal-700 p-2 rounded-lg font-bold">MISI</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                HKBP berusaha meningkatkan mutu segenap warga masyarakat, terutama warga HKBP, melalui pelayanan-pelayanan gereja yang bermutu agar mampu melaksanakan amanat Tuhan Yesus dalam:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                <li>Segenap perilaku kehidupan pribadi.</li>
                <li>Kehidupan keluarga yang harmonis.</li>
                <li>Kehidupan bersama segenap masyarakat di tingkat lokal, nasional, regional, hingga global dalam menghadapi tantangan Abad-21.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. PRINSIP PELAYANAN (3 Kolom) */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Prinsip Pelayanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Prinsip 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 transition-colors text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Melayani</h3>
              <p className="text-gray-600">
                "Melayani, bukan dilayani."
              </p>
              <p className="text-blue-600 text-sm font-semibold mt-2">(Markus 10:45)</p>
            </div>

            {/* Prinsip 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 transition-colors text-center">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Garam & Terang</h3>
              <p className="text-gray-600">
                "Menjadi garam dan terang dunia."
              </p>
              <p className="text-blue-600 text-sm font-semibold mt-2">(Matius 5:13-14)</p>
            </div>

            {/* Prinsip 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 transition-colors text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Keadilan</h3>
              <p className="text-gray-600">
                "Menegakkan keadilan, perdamaian, dan keutuhan ciptaan."
              </p>
              <p className="text-blue-600 text-sm font-semibold mt-2">(Markus 16:15)</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}