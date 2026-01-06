import Image from "next/image";
import Link from "next/link";

// 1. Fungsi Ambil Data Pendeta
async function getPendeta() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/pendetas?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal mengambil data pendeta");
  return res.json();
}

export default async function Home() {
  const { data } = await getPendeta();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <main className="min-h-screen bg-white">
      
      {/* === 1. HERO SECTION === */}
      <section className="relative h-[550px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Suasana HKBP Bonang Indah"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-widest text-sm md:text-base mb-2 uppercase">
            Ressort Bonang Indah — Distrik XXI Banten
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Selamat Datang di<br/>HKBP Bonang Indah
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Gereja yang inklusif, dialogis, dan melayani dengan kasih. 
            Mari bertumbuh bersama dalam iman kepada Kristus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/warta" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg"
            >
              Lihat Warta Minggu Ini
            </Link>
            <Link 
              href="/kontak" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* === 2. JADWAL IBADAH === */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Jadwal Ibadah Minggu</h2>
            <p className="text-gray-600 mt-2">Mari bersekutu memuji Tuhan bersama kami.</p>
          </div>

          {/* ROW 1: IBADAH UMUM */}
          <div className="mb-6">
            <h3 className="text-center text-blue-900 font-bold mb-6 text-lg uppercase tracking-wide border-b border-gray-200 pb-2 max-w-xs mx-auto">Ibadah Umum</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🌅</div>
                <h3 className="text-lg font-bold text-gray-900">Minggu Pagi</h3>
                <p className="text-2xl font-bold text-blue-600 my-2">07.00 WIB</p>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Bahasa Indonesia</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-teal-500 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">☀️</div>
                <h3 className="text-lg font-bold text-gray-900">Minggu Siang</h3>
                <p className="text-2xl font-bold text-teal-600 my-2">10.00 WIB</p>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Bhs. Batak Toba</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-500 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🌇</div>
                <h3 className="text-lg font-bold text-gray-900">Minggu Sore</h3>
                <p className="text-2xl font-bold text-indigo-600 my-2">17.00 WIB</p>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Bahasa Indonesia</span>
              </div>
            </div>
          </div>

          {/* ROW 2: KATEGORIAL */}
          <div className="mt-10 max-w-4xl mx-auto">
            <h3 className="text-center text-yellow-600 font-bold mb-6 text-lg uppercase tracking-wide border-b border-gray-200 pb-2 max-w-xs mx-auto">Kategorial</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-yellow-400 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">👶</div>
                <h3 className="text-lg font-bold text-gray-900">Sekolah Minggu</h3>
                <p className="text-2xl font-bold text-yellow-600 my-2">07.00 WIB</p>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Anak-anak</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-400 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🧑‍🎓</div>
                <h3 className="text-lg font-bold text-gray-900">Pra Remaja</h3>
                <p className="text-2xl font-bold text-orange-600 my-2">10.00 WIB</p>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Kelas Khusus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. AYAT HARIAN === */}
      <section className="py-20 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed opacity-90">
            "Aku bersukacita, ketika dikatakan orang kepadaku:
            <br />
            'Mari kita pergi ke rumah TUHAN.'"
          </p>
          <p className="mt-6 text-blue-200 font-bold tracking-wide">— Mazmur 122:1</p>
        </div>
      </section>

      {/* === 4. PROFIL PELAYAN === */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Pelayan Firman</h2>
          <p className="mt-2 text-gray-600">
            Gembala yang melayani di HKBP Bonang Indah
          </p>
        </div>

        {/* GRID 2 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.map((item: any) => {
            const attr = item.attributes || {}; 

            const nama = 
              item.nama_pendeta || 
              attr.nama_pendeta || 
              "Nama Tidak Ditemukan";

            const jabatan = item.jabatan || attr.jabatan;
            
            const fotoData = item.foto || attr.foto;
            const imgUrl =
              fotoData?.url ||
              fotoData?.data?.attributes?.url ||
              fotoData?.[0]?.url;

            return (
              <div
                key={item.id || item.documentId}
                className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col"
              >
                {/* 
                   REVISI DI SINI:
                   - 'aspect-video': Memaksa rasio 16:9 (Memanjang/Landscape)
                   - 'w-full': Lebar mengikuti container
                */}
                <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                  {imgUrl ? (
                    <Image
                      src={`${STRAPI_URL}${imgUrl}`}
                      alt={nama}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100">
                      <span className="text-6xl">👤</span>
                    </div>
                  )}
                </div>

                {/* INFO PENDETA (Ditaruh di bawah foto, bukan overlay) */}
                <div className="p-6 text-center bg-white">
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                     {jabatan || "Pelayan"}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
                    {nama}
                  </h3>
                  <p className="text-gray-500 text-sm">Ressort Bonang Indah</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}