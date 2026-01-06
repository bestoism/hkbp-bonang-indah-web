import type { Metadata } from "next";
import Image from "next/image";
import { Users, Flame, Scale, History } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | HKBP Bonang Indah",
  description: "Sejarah, Visi, Misi, dan Prinsip Pelayanan HKBP Bonang Indah.",
};

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION: Compact with Background Image --- */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Mengenal HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Tentang Kami
          </h1>
          <p className="text-blue-200 text-sm md:text-base font-medium mt-3 tracking-[0.2em] uppercase">
            Huria Kristen Batak Protestan
          </p>
        </div>
      </section>

      {/* --- 2. SEJARAH SINGKAT: Compact Grid --- */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <History size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Sejarah Gereja</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              Berdiri Sejak <br/> 16 Agustus 1992
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>
            <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                <strong>HKBP Bonang Indah</strong> hadir sebagai buah dari kerinduan umat Tuhan di wilayah Bonang untuk bersekutu dalam wadah Huria Kristen Batak Protestan.
              </p>
              <p>
                Saat ini berstatus sebagai <strong>Huria Sabungan</strong> di bawah <strong>Ressort Bonang Indah</strong>, yang juga menaungi HKBP Binong Permai, HKBP Kodya Tangerang, dan Pos Pelayanan Cirarab.
              </p>
              <p>
                Terletak di Perumahan Dasana Indah, gereja ini terus menjadi pusat pembinaan iman bagi jemaat dari berbagai sektor pelayanan.
              </p>
            </div>
          </div>
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
                src="/foto-gereja.jpg"
                alt="Gedung HKBP Bonang Indah"
                fill
                className="object-cover"
                unoptimized
            />
          </div>
        </div>
      </section>

      {/* --- 3. VISI & MISI: Card Style (Compact) --- */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* VISI */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-blue-600 font-black text-[10px] tracking-widest uppercase block mb-4">Visi Kami</span>
              <p className="text-xl font-bold text-gray-800 leading-snug">
                "HKBP berkembang menjadi gereja yang inklusif, dialogis dan terbuka, serta bertenaga mengembangkan kehidupan yang bermutu di dalam kasih Kristus."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 italic">
                Bersama masyarakat global demi kemuliaan Allah Bapa.
              </div>
            </div>

            {/* MISI */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-teal-600 font-black text-[10px] tracking-widest uppercase block mb-4">Misi Kami</span>
              <ul className="space-y-4">
                {[
                  "Meningkatkan mutu segenap warga masyarakat.",
                  "Melaksanakan amanat Tuhan dalam perilaku pribadi.",
                  "Membangun keluarga yang harmonis.",
                  "Menghadapi tantangan lokal hingga global Abad-21."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-teal-500 mt-1">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. PRINSIP PELAYANAN: Clean & Elegant --- */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10 tracking-tight">
            Prinsip Pelayanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PrincipleCard 
              icon={<Users size={28}/>} 
              title="Melayani" 
              desc="Melayani, bukan dilayani." 
              verse="Markus 10:45" 
            />
            <PrincipleCard 
              icon={<Flame size={28}/>} 
              title="Garam & Terang" 
              desc="Menjadi saksi di tengah dunia." 
              verse="Matius 5:13-14" 
            />
            <PrincipleCard 
              icon={<Scale size={28}/>} 
              title="Keadilan" 
              desc="Menegakkan perdamaian & keutuhan." 
              verse="Markus 16:15" 
            />
          </div>
        </div>
      </section>

    </main>
  );
}

function PrincipleCard({ icon, title, desc, verse }: any) {
  return (
    <div className="p-8 rounded-3xl border border-gray-100 bg-white text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
      <div className="text-blue-600 mb-6 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{desc}</p>
      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{verse}</p>
    </div>
  );
}