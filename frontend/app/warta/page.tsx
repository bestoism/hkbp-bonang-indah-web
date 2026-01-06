import Image from "next/image";
import Link from "next/link";
import { FileText, BookOpen, Download, ExternalLink, Calendar } from "lucide-react";

async function getWarta() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/wartas?sort=publishedAt:desc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] }; 
  return res.json();
}

async function getTataIbadah() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tata-ibadahs?sort=publishedAt:desc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] };
  return res.json();
}

export default async function WartaPage() {
  const wartaData = await getWarta();
  const tataIbadahData = await getTataIbadah();

  const listWarta = wartaData.data || [];
  const listTataIbadah = tataIbadahData.data || [];

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (Compact) --- */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Dokumen HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Dokumen Mingguan
          </h1>
          <p className="text-blue-200 text-[10px] md:text-xs font-bold mt-3 tracking-[0.3em] uppercase">
            Warta Jemaat & Tata Ibadah
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        {/* --- 2. SECTION: WARTA JEMAAT --- */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Warta Jemaat</h2>
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Arsip Terbaru</span>
          </div>

          <div className="grid gap-4">
            {listWarta.length === 0 ? (
              <p className="text-sm text-gray-400 italic py-4 text-center bg-gray-50 rounded-xl">Belum ada warta yang tersedia.</p>
            ) : (
              listWarta.map((item: any) => {
                const judul = item.judul || item.attributes?.judul;
                const link = item.link_drive_warta || item.attributes?.link_drive_warta;
                
                return (
                  <div key={item.id} className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:flex w-10 h-10 items-center justify-center bg-gray-50 text-gray-400 rounded-full group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                        <Download size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 leading-tight">{judul}</h3>
                        <p className="text-[10px] font-bold text-blue-500 uppercase mt-1 tracking-wider">PDF Document</p>
                      </div>
                    </div>
                    
                    {link ? (
                      <Link 
                        href={link} 
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
                      >
                        Buka <ExternalLink size={14} />
                      </Link>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-300 uppercase">Tersedia Segera</span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* --- 3. SECTION: TATA IBADAH --- */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                <BookOpen size={20} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Tata Ibadah</h2>
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Liturgi Minggu</span>
          </div>

          <div className="grid gap-4">
            {listTataIbadah.length === 0 ? (
              <p className="text-sm text-gray-400 italic py-4 text-center bg-gray-50 rounded-xl">Belum ada tata ibadah yang tersedia.</p>
            ) : (
              listTataIbadah.map((item: any) => {
                const judul = item.judul || item.attributes?.judul;
                const ringkasan = item.ringkasan || item.attributes?.ringkasan;
                const link = item.link_drive_tata_ibadah || item.attributes?.link_drive_tata_ibadah;

                return (
                  <div key={item.id} className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-teal-200 hover:shadow-md transition-all border-l-4 border-l-teal-500">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{judul}</h3>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={12} />
                        <span className="text-xs">
                          {typeof ringkasan === "string" ? ringkasan : "Tata Ibadah Minggu Ini"}
                        </span>
                      </div>
                    </div>
                    
                    {link ? (
                      <Link 
                        href={link} 
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white text-xs font-bold rounded-full hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-100"
                      >
                        Buka <ExternalLink size={14} />
                      </Link>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-300 uppercase">Belum Tersedia</span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>

      </div>
    </main>
  );
}