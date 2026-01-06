import Image from "next/image";
import Link from "next/link";

// 1. Fungsi Ambil Data Pendeta
async function getPendeta() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/pendetas?populate=*`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Gagal mengambil data pendeta");
  return res.json();
}

export default async function Home() {
  const { data } = await getPendeta();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL as string;

  return (
    <main className="min-h-screen bg-white">
      {/* === 1. HERO SECTION (BANNER UTAMA) === */}
      <section className="relative h-[550px] flex items-center justify-center">
        {/* Gambar Background Gelap */}
        <div className="absolute inset-0 bg-black">
          {/* PASTIKAN file 'foto-gereja.jpg' ada di folder 'public' */}
          <Image
            src="/foto-gereja.jpg" 
            alt="Suasana HKBP Bonang Indah"
            fill
            className="object-cover opacity-60" // Opacity biar teks putih terbaca jelas
            priority
          />
        </div>

        {/* Teks di Tengah */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-widest text-sm md:text-base mb-2 uppercase">
            Ressort Bonang Indah — Distrik XXI Banten
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Selamat Datang di<br />
            HKBP Bonang Indah
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Gereja yang inklusif, dialogis, dan melayani dengan kasih. Mari
            bertumbuh bersama dalam iman kepada Kristus.
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

      {/* === 2. JADWAL IBADAH (HIGHLIGHT) === */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Jadwal Ibadah Minggu
            </h2>
            <p className="text-gray-600 mt-2">
              Mari bersekutu memuji Tuhan bersama kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu 1: Pagi */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Ibadah Pagi
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-1">
                07.00 WIB
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                Bahasa Indonesia
              </span>
            </div>

            {/* Kartu 2: Sekolah Minggu */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                Sekolah Minggu
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-1">
                07.00 & 09.00
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">
                Anak & Remaja
              </span>
            </div>

            {/* Kartu 3: Siang */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Ibadah Siang
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-1">
                10.00 WIB
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                Bahasa Batak
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. AYAT / QUOTE HARIAN === */}
      <section className="py-20 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed opacity-90">
            "Aku bersukacita, ketika dikatakan orang kepadaku:
            <br />
            'Mari kita pergike rumah TUHAN.'"
          </p>
          <p className="mt-6 text-blue-200 font-bold tracking-wide">
            — Mazmur 122:1
          </p>
        </div>
      </section>

      {/* === 4. PROFIL PELAYAN (PENDETA) === */}
      {/* TAMPILAN PENDETA: Menggunakan Logic Lama (Flex + Center) */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Pelayan Firman</h2>
          <p className="mt-2 text-gray-600">
            Gembala yang melayani di HKBP Bonang Indah
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {data.map((item: any) => {
            // Support Strapi v4 & v5
            const nama = item.nama_lengkap || item.attributes?.nama_lengkap;
            const jabatan = item.jabatan || item.attributes?.jabatan;
            const fotoData = item.foto || item.attributes?.foto;
            const imgUrl =
              fotoData?.url ||
              fotoData?.data?.attributes?.url ||
              fotoData?.[0]?.url;

            return (
              <div
                key={item.id || item.documentId}
                className="w-full sm:w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full bg-gray-200">
                  {imgUrl ? (
                    <Image
                      src={`${STRAPI_URL}${imgUrl}`}
                      alt={nama || "Foto Dokumentasi"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Photo
                    </div>
                  )}
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{nama}</h3>
                  <p className="text-blue-600 font-medium mt-1">{jabatan}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}