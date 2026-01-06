import Image from "next/image";
import Link from "next/link";
import RenunganHarian from "@/components/RenunganHarian";

// Fungsi Ambil Data Pendeta
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
      
      {/* === 1. HERO SECTION (100% Layar) === */}
      <section className="relative h-screen flex items-center justify-center">
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
          <h2 className="text-yellow-400 font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
            Ressort Bonang Indah — Distrik XXI Banten
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Selamat Datang di<br/>HKBP Bonang Indah
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Gereja yang inklusif, dialogis, dan melayani dengan kasih. 
            Mari bertumbuh bersama dalam iman kepada Kristus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/warta" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg">
              Lihat Warta Minggu Ini
            </Link>
            <Link href="/kontak" className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-blue-900 border border-white font-bold rounded-full transition-all">
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Panah Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* === 2. SECTION RENUNGAN HARIAN === */}
      {/* Kita beri background abu-abu sangat tipis agar ada pemisah dengan Hero */}
      <section className="py-24 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
           <RenunganHarian />
        </div>
      </section>

      {/* === 3. JADWAL IBADAH MINGGU === */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Jadwal Ibadah Minggu</h2>
            <p className="text-gray-600 mt-2 text-lg">Mari bersekutu memuji Tuhan bersama kami.</p>
          </div>

          <div className="mb-12">
            <h3 className="text-center text-blue-900 font-bold mb-8 text-lg uppercase tracking-wide border-b border-gray-200 pb-2 max-w-xs mx-auto">Ibadah Umum</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScheduleCard emoji="🌅" title="Minggu Pagi" time="07.00 WIB" lang="Bhs. Indonesia" color="blue" />
              <ScheduleCard emoji="☀️" title="Minggu Siang" time="10.00 WIB" lang="Bhs. Batak Toba" color="teal" />
              <ScheduleCard emoji="🌇" title="Minggu Sore" time="17.00 WIB" lang="Bhs. Indonesia" color="indigo" />
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <h3 className="text-yellow-600 font-bold mb-8 text-lg uppercase tracking-wide border-b border-gray-200 pb-2 max-w-xs mx-auto">Kategorial</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScheduleCard emoji="👶" title="Sekolah Minggu" time="07.00 WIB" lang="Anak-anak" color="yellow" />
              <ScheduleCard emoji="🧑‍🎓" title="Pra Remaja" time="10.00 WIB" lang="Kelas Khusus" color="orange" />
            </div>
          </div>
        </div>
      </section>

      {/* === 4. AYAT HARIAN (QUOTE) === */}
      <section className="py-24 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed opacity-95">
            "Aku bersukacita, ketika dikatakan orang kepadaku:
            <br />
            'Mari kita pergi ke rumah TUHAN.'"
          </p>
          <p className="mt-8 text-blue-200 font-bold tracking-widest text-lg">— MAZMUR 122:1</p>
        </div>
      </section>

      {/* === 5. PELAYAN FIRMAN === */}
      <section className="max-w-7xl mx-auto py-24 px-4 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Pelayan Firman</h2>
          <p className="mt-2 text-gray-600 text-lg">Gembala yang melayani di HKBP Bonang Indah</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {data.map((item: any) => {
            const attr = item.attributes || {}; 
            const nama = item.nama_pendeta || attr.nama_pendeta || "Nama Pelayan";
            const jabatan = item.jabatan || attr.jabatan;
            const fotoData = item.foto || attr.foto;
            const imgUrl = fotoData?.url || fotoData?.data?.attributes?.url || fotoData?.[0]?.url;

            return (
              <div key={item.id} className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
                <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                  {imgUrl ? (
                    <Image src={`${STRAPI_URL}${imgUrl}`} alt={nama} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100"><span className="text-6xl">👤</span></div>
                  )}
                </div>
                <div className="p-8 text-center">
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                     {jabatan || "Pelayan"}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{nama}</h3>
                  <p className="text-gray-500">Ressort Bonang Indah</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// Komponen Kecil untuk Jadwal biar kode page.tsx ga kepanjangan
function ScheduleCard({ emoji, title, time, lang, color }: any) {
  const colorClasses: any = {
    blue: "border-blue-500 text-blue-600 bg-blue-50",
    teal: "border-teal-500 text-teal-600 bg-teal-50",
    indigo: "border-indigo-500 text-indigo-600 bg-indigo-50",
    yellow: "border-yellow-400 text-yellow-600 bg-yellow-50",
    orange: "border-orange-400 text-orange-600 bg-orange-50",
  };

  return (
    <div className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${colorClasses[color].split(' ')[0]} text-center hover:shadow-xl transition-all hover:-translate-y-1`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className={`text-3xl font-bold my-3 ${colorClasses[color].split(' ')[1]}`}>{time}</p>
      <span className={`text-sm font-medium px-4 py-1.5 rounded-full ${colorClasses[color].split(' ')[2]} ${colorClasses[color].split(' ')[1]}`}>
        {lang}
      </span>
    </div>
  );
}