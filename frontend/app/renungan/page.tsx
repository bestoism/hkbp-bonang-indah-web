import { getRenungan } from "@/lib/scraper";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowLeft, Share2, Quote } from "lucide-react";

export default async function RenunganPage() {
  const data = await getRenungan();

  if (!data) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <div className="p-4 bg-red-50 text-red-500 rounded-full">
          <BookOpen size={40} />
        </div>
        <p className="text-gray-500 font-medium">Gagal memuat renungan hari ini.</p>
        <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (Compact & Sacred) --- */}
      <section className="relative h-[250px] md:h-[300px] lg:h-[35vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Renungan HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <BookOpen size={12} /> Makanan Rohani
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Renungan Harian
          </h1>
        </div>
      </section>

      {/* --- 2. CONTENT AREA --- */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        
        {/* Tombol Kembali (Floating effect) */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors mb-8 text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Beranda
        </Link>

        {/* Judul Renungan */}
        <header className="mb-10 border-b border-gray-100 pb-10">
          <div className="flex items-center gap-3 text-blue-600 mb-3">
             <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
               Edisi {data.date}
             </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            {data.title}
          </h2>
        </header>

        {/* Isi Renungan (Typography Optimized) */}
        <article className="relative">
          {/* Ikon Quote Dekoratif */}
          <div className="absolute -left-8 -top-4 text-blue-50 opacity-10 hidden lg:block">
            <Quote size={80} />
          </div>

          <div 
            className="prose prose-blue prose-lg max-w-none 
                       text-gray-700 leading-relaxed 
                       prose-p:mb-6 
                       prose-strong:text-blue-900 prose-strong:font-bold
                       prose-em:text-blue-800 prose-em:font-medium prose-em:not-italic
                       prose-headings:text-gray-900 prose-headings:font-black"
            dangerouslySetInnerHTML={{ __html: data.fullBody }}
          />
        </article>

        {/* Footer Renungan */}
        <footer className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Sumber Konten</p>
            <p className="text-sm text-gray-500 italic">Huria Kristen Batak Protestan (Pusat)</p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
              <Share2 size={14} /> Bagikan
            </button>
            <a 
              href={data.link} 
              target="_blank" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Buka di Web Pusat
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}