// frontend/app/pelayanan/page.tsx
import Image from "next/image";
import { CalendarDays, MapPin, Users, Clock } from "lucide-react";

async function getJadwal() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/jadwals?sort=urutan:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] };
  return res.json();
}

async function getWijk() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/wijks?sort=nama:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] };
  return res.json();
}

function renderStrapiBlocks(content: any) {
  if (!content) return null;
  if (typeof content === 'string') {
    return <p className="whitespace-pre-line">{content}</p>;
  }
  if (Array.isArray(content)) {
    return content.map((block: any, index: number) => {
      if (block.type === 'list') {
        return (
          <ul key={index} className="list-disc pl-4 space-y-1 text-gray-600">
            {block.children.map((item: any, i: number) => (
              <li key={i}>{item.children.map((node: any) => node.text).join('')}</li>
            ))}
          </ul>
        );
      }
      if (block.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-600 leading-relaxed">
            {block.children?.map((child: any) => child.bold ? <strong key={child.text}>{child.text}</strong> : child.text)}
          </p>
        );
      }
      return null;
    });
  }
  return null;
}

export default async function PelayananPage() {
  const jadwalData = await getJadwal();
  const wijkData = await getWijk();

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (Compact) --- */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Pelayanan HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Pelayanan & Wilayah
          </h1>
          <p className="text-blue-200 text-xs md:text-sm font-bold mt-3 tracking-[0.3em] uppercase">
            Jadwal Kegiatan & Informasi Sektor
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* --- 2. JADWAL SEPEKAN: Modern List Table --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <CalendarDays size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Jadwal Sepekan</h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Agenda Kegiatan Rutin</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {jadwalData.data?.map((item: any, index: number) => {
              const hari = item.hari || item.attributes?.hari;
              const kegiatan = item.kegiatan || item.attributes?.kegiatan;
              
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row md:items-center p-5 gap-4 md:gap-10 transition-colors hover:bg-gray-50 ${
                    index !== (jadwalData.data.length - 1) ? 'border-b border-gray-50' : ''
                  }`}
                >
                  <div className="w-24 shrink-0">
                    <span className="text-sm font-black text-blue-600 uppercase tracking-wider">
                      {hari}
                    </span>
                  </div>
                  <div className="flex-grow flex items-center gap-3">
                    <div className="text-sm md:text-base text-gray-700 font-medium">
                      {renderStrapiBlocks(kegiatan)}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Clock size={16} className="text-gray-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 3. PEMBAGIAN WIJK: Clean Directory Style --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Sektor Pelayanan</h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Informasi Wijk & Sintua</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wijkData.data?.map((item: any) => {
               const nama = item.nama || item.attributes?.nama;
               const area = item.area || item.attributes?.area;
               const pelayanRaw = item.pelayan || item.attributes?.pelayan;

               return (
                <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {nama}
                    </h3>
                    <div className="p-1.5 bg-teal-50 text-teal-600 rounded-md">
                      <MapPin size={16} />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-3 py-2 rounded-lg mb-6 flex items-center gap-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Wilayah</span>
                    <p className="text-xs font-bold text-gray-600 truncate">{area}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black text-teal-600 uppercase tracking-widest mb-2">
                      <span>Daftar Pelayan</span>
                      <div className="h-px flex-grow bg-teal-100"></div>
                    </div>
                    <div className="text-sm">
                      {renderStrapiBlocks(pelayanRaw)}
                    </div>
                  </div>
                </div>
               );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}