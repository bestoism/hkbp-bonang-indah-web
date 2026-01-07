import Image from "next/image";
import Link from "next/link";
import RenunganHarian from "@/components/RenunganHarian";
import VideoSection from "@/components/VideoSection";
import AyatHariIni from "@/components/AyatHariIni";

import { Sun, SunDim, Sunset, Baby, GraduationCap, ChevronDown } from "lucide-react";

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

function ScheduleItem({ icon, title, time, lang, color }: any) {
  const colors: any = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    teal: "text-teal-600 bg-teal-50 border-teal-100",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
  };

  return (
    <div className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-5">
        <div className={`p-3 rounded-xl border ${colors[color]}`}>
          {icon}
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{title}</h4>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-1 uppercase tracking-wider">{lang}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          {time}
        </span>
        <span className="block text-[10px] font-black text-gray-400 uppercase tracking-tighter mt-1">WIB</span>
      </div>
    </div>
  );
}


  return (
    <main className="min-h-screen bg-white">
      
      {/* === 1. HERO SECTION: Full Screen (Tetap) === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Suasana HKBP Bonang Indah"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-yellow-400 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase drop-shadow-md">
            Ressort Bonang Indah — Distrik XXI Banten
          </h2>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
            Selamat Datang di<br/>HKBP Bonang Indah
          </h1>
          <p className="text-gray-200 text-base md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Gereja yang inklusif, dialogis, dan melayani dengan kasih. 
            Mari bertumbuh bersama dalam iman kepada Kristus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/warta" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl flex items-center gap-2 text-sm">
              Lihat Warta Minggu <span>→</span>
            </Link>
            <Link href="/kontak" className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-blue-900 border border-white/50 font-bold rounded-full transition-all text-sm">
              Hubungi Kami
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* === 2. JADWAL IBADAH: Compact Grid & Gaps === */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              Jadwal Ibadah Minggu
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* Kolom Ibadah Umum */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b-2 border-blue-50 pb-3">
                <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                <h3 className="text-blue-900 font-black text-sm uppercase tracking-[0.2em]">
                  Ibadah Umum
                </h3>
              </div>
              <div className="space-y-4">
                <ScheduleItem icon={<Sun size={24}/>} title="Minggu Pagi" time="07.00" lang="Bhs. Indonesia" color="blue" />
                <ScheduleItem icon={<SunDim size={24}/>} title="Minggu Siang" time="10.00" lang="Batak Toba" color="teal" />
                <ScheduleItem icon={<Sunset size={24}/>} title="Minggu Sore" time="17.00" lang="Bhs. Indonesia" color="indigo" />
              </div>
            </div>

            {/* Kolom Kategorial */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b-2 border-yellow-50 pb-3">
                <span className="w-2 h-6 bg-yellow-500 rounded-full"></span>
                <h3 className="text-yellow-700 font-black text-sm uppercase tracking-[0.2em]">
                  Kategorial
                </h3>
              </div>
              <div className="space-y-4">
                <ScheduleItem icon={<Baby size={24}/>} title="Sekolah Minggu" time="07.00" lang="Anak-anak" color="yellow" />
                <ScheduleItem icon={<GraduationCap size={24}/>} title="Pra Remaja" time="10.00" lang="Kelas Khusus" color="orange" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* === 3. RENUNGAN HARIAN: Compact Padding === */}
      <section className="py-12 px-4 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
           <RenunganHarian />
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <VideoSection />
        </div>
      </section>


      {/* === 4. AYAT HARIAN: Compact Padding === */}
      <section className="py-24 bg-blue-900 text-white text-center px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <AyatHariIni />
        </div>
      </section>

      {/* === 5. PELAYAN FIRMAN: Compact & Focused === */}
      <section className="max-w-6xl mx-auto py-16 px-4 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Pelayan Firman</h2>
          <p className="text-gray-500 text-sm font-light">Para hamba Tuhan yang melayani di HKBP Bonang Indah</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((item: any) => {
            const attr = item.attributes || {}; 
            const nama = item.nama_pendeta || attr.nama_pendeta || "Nama Pelayan";
            const jabatan = item.jabatan || attr.jabatan;
            const fotoData = item.foto || attr.foto;
            const imgUrl = fotoData?.url || fotoData?.data?.attributes?.url || fotoData?.[0]?.url;

            return (
              <div key={item.id} className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group transition-all hover:shadow-xl">
                <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                  {imgUrl ? (
                    <Image src={`${STRAPI_URL}${imgUrl}`} alt={nama} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100"><span className="text-6xl">👤</span></div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-[0.1em] border border-blue-100">
                     {jabatan || "Pelayan"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">{nama}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function ScheduleCard({ icon, title, time, lang, accent }: any) {
  const accentColors: any = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    teal: "text-teal-600 bg-teal-50 border-teal-200",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-200",
    orange: "text-orange-600 bg-orange-50 border-orange-200",
  };

  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 flex flex-col items-center">
      <div className={`p-3 rounded-xl mb-4 ${accentColors[accent]}`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-2xl font-black text-gray-800 mb-2">{time}</p>
      <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${accentColors[accent]} border`}>
        {lang}
      </span>
    </div>
  );
}